import React from 'react';
import {useRouteMatch} from 'react-router-dom'
import {connect, ConnectedProps} from 'react-redux'

import LeftBlock from './left-block'
import LeftBlockPoll from './left-block-poll'
import RightBlock from './right-block'
import RightBLockPoll from './right-block-poll';
import {resetCurrentPage} from './../../action'

const Header: React.FunctionComponent<PropsFromRedux> = (props) => {
  let {path} = useRouteMatch();

  return (
    <header className={
      /\/$/.test(path) 
      ? "page-header page-header--fon"
      : "page-header"
    }>
      <section className="header-block header-block--index-page container">
        {/poll/i.test(path) 
          ? <> <LeftBlockPoll {...props} /> <RightBLockPoll /> </>
          : <> <LeftBlock {...props} /> <RightBlock /> </>
        }
      </section>
    </header>
  )
}

const MapDispatch = {
  resetCurrentPage
}

const connector = connect(null, MapDispatch)
interface Props {
  rightBlockFixed?: boolean
}
type PropsFromRedux = ConnectedProps<typeof connector> & Props

export default connector (Header);