import React from 'react'

import MainNav from './../main-nav'

const FavoritePage: React.FC = () => {
  return (
    <main className='page-main--login-profile container'>
      <MainNav links={['Главная']} to={['/']} activeLink={'Избранное'} />
    </main>
  )
}

export default FavoritePage