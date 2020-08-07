import React from 'react'
import {connect, ConnectedProps} from 'react-redux'

import { RootState } from '../../reducers'
import {getAllItems} from './../../selectors'

import MainNav from './../main-nav'
import FavoritesList from './favorite-list'
import ProfileAsideBlock from './../utility-components/profile-aside-block'

const mapStateToProps = (state: RootState) => {
  return {
    items: state.itemsByFavorites,
    allItems: state.allItems
  }
}

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

const FavoritePage: React.FC<PropsFromRedux> = ({items, allItems}) => {
  const favoriteItems = getAllItems(items, allItems)
  return (
    <main className='page-main--login-profile container'>
      <MainNav links={['Главная']} to={['/']} activeLink={'Избранное'} />
      <ProfileAsideBlock />
      {
      favoriteItems.length ? <FavoritesList items = {favoriteItems} /> 
      : <section className="profile-block-main">
        <h2 className="profile-block-main__title">Избранные товары</h2>
        Список пуст
        </section>
      }
    </main>
  )
}

export default connector(FavoritePage)