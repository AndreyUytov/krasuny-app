import React from 'react';
import {useRouteMatch} from 'react-router-dom'

import LeftBlock from './left-block'
import LeftBlockPoll from './left-block-poll'
import RightBlock from './right-block'
import RightBLockPoll from './right-block-poll';

const Home: React.FunctionComponent = () => {
  let {path} = useRouteMatch();

  return (
    <header className={
      /\/$/.test(path) 
      ? "page-header page-header--fon"
      : "page-header"
    }>
      <section className="header-block header-block--index-page container">
        {/poll/i.test(path) 
          ? <> <LeftBlockPoll /> <RightBLockPoll /> </>
          : <> <LeftBlock /> <RightBlock /> </>
        }
      </section>
    </header>
  )
}

export default Home;