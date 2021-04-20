import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import AddLiquidityV2 from './index'

export function RedirectDuplicateTokenIdsV2(props: RouteComponentProps<{ currencyIdA: string; currencyIdB: string }>) {
  const {
    match: {
      params: { currencyIdA, currencyIdB },
    },
  } = props

  if (currencyIdA.toLowerCase() === currencyIdB.toLowerCase()) {
    return <Redirect to={`/add/v2/${currencyIdA}`} />
  }
  return <AddLiquidityV2 {...props} />
}
