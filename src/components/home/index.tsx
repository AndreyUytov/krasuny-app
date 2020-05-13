import React from 'react';

import LeftBlock from './left-block'
import RightBlock from './right-block'

const Home: React.FunctionComponent = () => {
  return (
    <header className="page-header page-header--fon">
      <section className="header-block header-block--index-page container">
        <LeftBlock />
        <RightBlock />
      </section>
    </header>
  )
}

export default Home;