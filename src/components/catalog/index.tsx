import React from 'react'

import MainNav from './../main-nav'

const CatalogMain: React.FC = () => {
  return (
    <main className="page-main--catalog container">
      <MainNav links={['Главная']} activelink={'Каталог'} to={['/']}/>
      CATALOG
    </main>
  )
}

export default CatalogMain