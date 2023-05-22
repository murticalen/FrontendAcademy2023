import { fetcher } from '@/utils/fetcher'
import { useIsServer } from '@/utils/hooks'
import { GetServerSideProps } from 'next'
import React from 'react'


export default function IsServerPage() {
  const isServerWindow = typeof window === 'undefined'

  const useIsServerHook = useIsServer()

  console.log('Is server condition: '+isServerWindow)
  console.log('useIsServer hook: '+useIsServerHook)

  return (
    <div>Check out your terminal and console</div>
  )
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

  return {
    props: {},
  };
};
