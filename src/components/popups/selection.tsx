import React from 'react'
import {Link} from 'react-router-dom'

const SelectionPopup: React.FC<{hiddenSelectionPopup: () => void}> = ({hiddenSelectionPopup}) => {
  return (
    <div className = 'selection-popup' onClick = {hiddenSelectionPopup}>
      <div className = 'selection-popup__wrapper'>
        <div className = 'selection-popup__programma selection-popup__block'>
          <h3 className = 'selection-popup__title'>
            Онлайн подбор косметики
          </h3>
          <p className = 'selection-popup__description'>
            Вы можете подобрать для себя наилучшее средство для вашей кожи онлайн
          </p>
          <button type = 'button' className = 'btn-fon'>
            Задать вопрос
          </button>
        </div>
        <div className = 'selection-popup__consultation selection-popup__block'>
          <h3 className = 'selection-popup__title'>
            Консультация косметолога
          </h3>
          <p className = 'selection-popup__description'>
            Мы можем помочь вам выбрать из нашего каталога именно то, что вам нужно
          </p>
          <Link to='/poll' className = 'btn-fon'>
            Пройти подбор
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SelectionPopup