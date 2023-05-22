import Button, { MemoizedButton } from "@/components/Button/Button";
import { darkTheme } from "@/utils/theme";
import { Player } from "@/model/Player";
import PlayerLink from "@/modules/Link/PlayerLink";
import { ThemeSetterContext } from "@/utils/context";
import { useIsServer } from "@/utils/hooks";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import useSWR from "swr";
import { noop } from "swr/_internal";

export default function PlayerLayout({ player }: { player: Player }) {
  // console.log("player console");

  const {setTheme} = useContext(ThemeSetterContext)
  const ref = useRef<HTMLDivElement>(null)
  const [divWidth, setDivWidth] = useState<number|undefined>(undefined)

  const {
    data: nextPlayer,
    error,
    isLoading,
  } = useSWR<{ player: Player }>(
    "https://api.sofascore.com/api/v1/player/" + (player.id + 1),
    { refreshInterval: 1000 }
  );
  // const router = useRouter();

  // const mockObject = {}
  // console.log('aAAA')

  // const mockObjectValue = useMemo(() => {
  //   console.log(mockObject)

  //   return 1
  // }, [mockObject])

  useEffect(() => {
    console.log(ref.current)
    setDivWidth(ref.current?.getBoundingClientRect()?.width)
  }, [])


  if (!nextPlayer) {
    if (isLoading) {
      return <div>LOADING</div>;
    }
    return <div>THERE IS NO NEXT PLAYER</div>;
  }

  return (
    <>
      <MemoizedButton onClick={noop}>PRESS HERE DOES NOTHING</MemoizedButton>

      <PlayerLink player={nextPlayer.player}>
        Next player {nextPlayer.player.name} with id: {nextPlayer.player.id}
      </PlayerLink>

      <div ref={ref} style={{padding: '30px', width: '100%'}}>
        <div>hdjfsddjedkdxjedfjdf {divWidth}</div>
      </div>
    </>
  );
}
