import React from 'react'

import instaMock from './../../images/content/instagram-img.png'

const Footer: React.FC = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer-wrapper container">
        <div className="page-footer__up-row">
          <section className="instagram-block">
            <h3 className="footer-row__title">
              Мы в инстаграмме
            </h3>
            <ul className="instagram-list">
              <li>
                <a className="instagramm-list__item">
                  <img src={instaMock}
                    width="71" height="71"
                  />
                </a>
              </li>
              <li>
                <a className="instagramm-list__item">
                <img src={instaMock}
                    width="71" height="71"
                  />
                </a>
              </li>
              <li>
                <a className="instagramm-list__item">
                <img src={instaMock}
                    width="71" height="71"
                  />
                </a>
              </li>
              <li>
                <a className="instagramm-list__item">
                <img src={instaMock}
                    width="71" height="71"
                  />
                </a>
              </li>
              <li>
                <a className="instagramm-list__item">
                <img src={instaMock}
                    width="71" height="71"
                  />
                </a>
              </li>
              <li>
                <a className="instagramm-list__item">
                <img src={instaMock}
                    width="71" height="71"
                  />
                </a>
              </li>
            </ul>
          </section>

          <section className="info-block">
            <h3 className="footer-row__title">
              Информация
            </h3>
            <ul className="info-block__info-list">
              <li>
                <a className="info-list__link">
                  Акции
                </a>
              </li>
              <li>
                <a className="info-list__link">
                  Программы ухода
                </a>
              </li>
              <li>
                <a className="info-list__link">
                  Бренды
                </a>
              </li>
              <li>
                <a className="info-list__link">
                  Оплата и доставка
                </a>
              </li>
              <li>
                <a className="info-list__link">
                  Ингридиенты
                </a>
              </li>
              <li>
                <a className="info-list__link">
                  Контакты
                </a>
              </li>
            </ul>
          </section>

          <section className="contact-block">
            <h3 className="footer-row__title">
              Контакты
            </h3>
            <div className="contact-block__inner-wrapper">
              <span className="contact-block__telephone">
                +380 (068) 455-50-53
              </span>
              <button className="contact-block__btn btn" type="button">
                Обратный звонок
              </button>
              <a className="contact-block__email-link">
                shop.krasunya.ua@gmail.com
              </a>
            </div>
          </section>
        </div>
        <div className="page-footer__down-row">
          <span className="page-footer__copyright">
            © 2019 KRASUNYA интернет магазин лечащей косметики. все права защищены.
          </span>
          <a className="page-footer__confidentiality-link">
            Конфиденциальность
          </a>
          <a className="page-footer__personally-data-link">
            Персональные данные
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer