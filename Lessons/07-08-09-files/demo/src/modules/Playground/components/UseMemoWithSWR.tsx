import useSWR from "swr";
import { Event } from '@/model/Event'
import { useMemo } from "react";

export default function UseMemoWithSWR({}: {event: Event}) {

    // Croatia vs England WC 2018 semifinal
    const { data } = useSWR<{ event: Event }>(
      "https://api.sofascore.com/api/v1/event/7693132",
      { refreshInterval: 1000 }
    );

    const memoizedValue = useMemo(() => {

        console.log('Inside memo')

        if (data?.event) {
            return data.event.slug
        }

        return 'unknown'
    }, [data])

    return (
        <div>{memoizedValue}</div>
    )
}