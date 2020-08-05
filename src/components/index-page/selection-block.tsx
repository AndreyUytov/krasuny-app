import React from 'react'

const SelectionBlock: React.FC = () => {
  return (
    <section className="selection-block">
      <div className="selection-block__wrapper container">
        <div className="selection-block__titles">
          <b className="selection-block__slogan">Не знаете что нужно?</b>
          <p className="selection-block__description">
            Мы можем помочь вам выбрать из нашего каталога именно то, что вам нужно, так как косметика очень спецефическая наши специалисты помогут сделать окончательный выбор
          </p>
        </div>
        <div className="selection-block__assortment">
          <button className="selection-block__btn btn-fon" type="button">
            Пройти подбор
          </button>
        </div>
        <div className="selection-block__question">
          <button className="selection-block__btn btn-fon" type="button">
            Задать вопрос
          </button>
        </div>
      </div>
    </section>
  )
}

export default SelectionBlock