import Button, { MemoizedButton } from "@/components/Button/Button";
import { darkTheme } from "@/components/theme/theme";
import { Player } from "@/model/Player";
import PlayerLink from "@/modules/Link/PlayerLink";
import { ThemeSetterContext } from "@/utils/context";
import { useIsServer } from "@/utils/hooks";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import useSWR from "swr";

export default function PlayerLayout({ player }: { player: Player }) {
  // console.log("player console");

  const {setTheme} = useContext(ThemeSetterContext)

  const {
    data: nextPlayer,
    error,
    isLoading,
  } = useSWR<{ player: Player }>(
    "https://api.sofascore.com/api/v1/player/" + (player.id + 1),
    { refreshInterval: 1000 }
  );
  const router = useRouter();

  const [randomNumber, setRandomNumber] = useState(0)

  useEffect(() => {
    const intervalV = setInterval(() => setRandomNumber(Math.random()), 1000)

    return () => clearInterval(intervalV)
  }, [])

  const onClickNoCallback = () => {
    console.log("Button Clicked");
    setTheme(darkTheme)
  }
  const onClick = useCallback(onClickNoCallback, [setTheme]);

  // const mockValue = useMemo(() => {
  //   console.log(nextPlayer)

  //   return 1
  // }, [nextPlayer])

  // const mockObject = {}
  // console.log('aAAA')

  // const mockObjectValue = useMemo(() => {
  //   console.log(mockObject)

  //   return 1
  // }, [mockObject])

  // console.log(typeof window === 'undefined')
  // const isServer = useIsServer()

  // console.log(isServer)

  if (!nextPlayer) {
    if (isLoading) {
      return <div>LOADING</div>;
    }
    return <div>THERE IS NO NEXT PLAYER</div>;
  }

  return (
    <>
      <MemoizedButton onClick={onClick}>PRESS HERE</MemoizedButton>

      <PlayerLink player={nextPlayer.player}>
        Next player {nextPlayer.player.name} with id: {nextPlayer.player.id}
      </PlayerLink>
    </>
  );
}
