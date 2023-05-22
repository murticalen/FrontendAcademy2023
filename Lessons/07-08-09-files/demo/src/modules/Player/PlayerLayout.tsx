import { MemoizedButton } from "@/components/Button/Button";
import { Player } from "@/model/Player";
import PlayerLink from "@/modules/Link/PlayerLink";
import { useRouter } from "next/router";
import useSWR from "swr";

function PlayerDetails({ player }: { player: Player }) {
  return (
    <>
      <div>Id: {player.id}</div>
      <div>Name: {player.name}</div>
      <div>Team: {player.team.name}</div>
    </>
  );
}

function NextPlayer({ currentPlayerId }: { currentPlayerId: number }) {
  const { data: nextPlayer, isLoading } = useSWR<{ player: Player }>(
    "https://api.sofascore.com/api/v1/player/" + (currentPlayerId + 1),
    { refreshInterval: 1000 }
  );
  const router = useRouter();

  if (!nextPlayer) {
    if (isLoading) {
      return <div>Next player is loading</div>;
    }
    return <div>THERE IS NO NEXT PLAYER</div>;
  }

  const onButtonClick = () => {
    router.push(`/player/${nextPlayer.player.slug}/${nextPlayer.player.id}`);
  };

  return (
    <>
      <MemoizedButton onClick={onButtonClick}>
        PRESS HERE FOR NEXT PLAYER USING router.push
      </MemoizedButton>

      <PlayerLink player={nextPlayer.player}>
        Next player {nextPlayer.player.name} with id: {nextPlayer.player.id}
      </PlayerLink>
    </>
  );
}

export default function PlayerLayout({ player }: { player: Player }) {
  return (
    <>
      <PlayerDetails player={player} />
      <NextPlayer currentPlayerId={player.id} />
    </>
  );
}
