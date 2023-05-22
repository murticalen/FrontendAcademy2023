import { Event } from '@/model/Event'
import Playground from '@/modules/Playground/Playground'
import { fetcher } from '@/utils/fetcher'
import { GetServerSideProps } from 'next'
import React from 'react'

interface PlaygroundProps {
  event: Event
}

export default function PlaygroundPage(props: PlaygroundProps) {
  return <Playground event={props.event} />
}

// This value is considered fresh for ten seconds (s-maxage=10).
// If a request is repeated within the next 10 seconds, the previously
// cached value will still be fresh. If the request is repeated before 59 seconds,
// the cached value will be stale but still render (stale-while-revalidate=59).
//
// In the background, a revalidation request will be made to populate the cache
// with a fresh value. If you refresh the page, you will see the new value.
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, res } = context;

  try {
    const details = await fetcher(`https://api.sofascore.com/api/v1/event/7693131`)

    const props: PlaygroundProps = {event: details.event}

    return {
      props: props,
    };
  } catch (error) {
    res.statusCode = 404;
    return { props: { error } };
  }
};
