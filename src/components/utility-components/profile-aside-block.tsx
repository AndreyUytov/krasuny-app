import React, { useState, ChangeEvent } from 'react'
import { NavLink } from 'react-router-dom'

import avatarBackground from "./../../images/fon/avatar-prodile.png"

const ProfileAsideBlock: React.FC = () => {

  const [avatar, setAvatar] = useState<string>(`url(${avatarBackground})`)

  const onAvatarClick = (evt: ChangeEvent<HTMLInputElement>) => {
    let file = evt.target.files?.[0]
    let reader = new FileReader()
    if (file) {
      reader.readAsDataURL(file)
      reader.addEventListener('load', () => {
      setAvatar("url(" + reader.result + ")")
  })
    }
  }

  return (
    <section className="profile-block-aside">
    <div className="avatar__wrapper">
      <form className="avatar__form" method="post" action="" encType="multipart/data">
        <label className="avatar__label" style = {{backgroundImage: avatar}}>
          <input type="file" className="avatar__input" onChange = {onAvatarClick} />
        </label>
      </form>
    </div>
    <nav className="profile-block-aside__nav">
      <h3 className="profile-block-aside__nav-subtitle">Личная информация</h3>
      <ul  className="profile-block-aside__list">
        <li>
          <NavLink to = '/lk/profile' activeClassName='link--active' className="profile-block-aside__nav-link link">Профиль</NavLink>
        </li>
        <li>
          <NavLink to = '/lk/poll' activeClassName='link--active' className="profile-block-aside__nav-link link">Данные для консультации</NavLink>
        </li>
      </ul>
      <h3 className="profile-block-aside__nav-subtitle">Заказы</h3>
      <ul  className="profile-block-aside__list">
        <li>
          <NavLink to = '/lk/favorite' activeClassName='link--active' className="profile-block-aside__nav-link link">Избранные товары</NavLink>
        </li>
        <li>
          <NavLink to = '/lk/order' activeClassName='link--active' className="profile-block-aside__nav-link link">Мои заказы</NavLink>
        </li>
      </ul>
    </nav>
    <button type="button" className="profile-block-aside-btn btn">Выйти</button>
  </section>
  )
}

export default ProfileAsideBlock