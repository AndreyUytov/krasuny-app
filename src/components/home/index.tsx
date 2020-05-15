import React from 'react';

import LeftBlockIndex from './left-block-index'
import RightBlock from './right-block'

const Home: React.FunctionComponent = () => {
  return (
    <header className="page-header page-header--fon">
      <section className="header-block header-block--index-page container">
        <LeftBlockIndex />
        <RightBlock />
      </section>
    </header>
  )
}

export default Home;