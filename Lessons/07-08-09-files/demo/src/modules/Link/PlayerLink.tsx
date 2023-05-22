import { Player } from '@/model/Player'
import Link from 'next/link'
import React from 'react'

interface P {
  player: Player
}

export default function PlayerLink({player, children}: React.PropsWithChildren<P>) {
  
  if (!children) {
    return null
  }
  
  return (
    <Link href={{
      pathname: '/player/[slug]/[id]',
      query: {slug: player.slug, id: player.id},
    }}>{children || player.name}</Link>
  )
}
