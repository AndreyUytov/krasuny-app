import React from 'react'

const AboutBlock:React.FC = () => {
  return (
    <section className="about-block">
      <div className="about-block__out-wrapper container">
        <div className="about-block__wrapper">
          <h3 className="about-block__slogan">
            Наш товар не купить в магазинах
          </h3>
          <div className="about-block__description">
            В нашем портфеле — продукты известных мировых производителей профессиональной косметики и космецевтики, не только полностью удовлетворяющие запросам клиентов, но и отвечающие высоким требованиям профессионалов, работающих с ними.
          </div>
          <button className="about-block__btn btn-fon" type="button">
            Подобрать косметику
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutBlock