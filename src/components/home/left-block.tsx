import React, {useState} from 'react';

import SearchForm from './search-form';
import logo from './../../images/content/KRASUNYA.png';

const LeftBlock: React.FC = () => {

  const [visibleForm, setVisibleForm] = useState(false);

  const showForm = ():void => {
    setVisibleForm(true)
  }

  const hiddenForm = ():void => {
    setVisibleForm(false)
  }

  return (
    <div className="header-left-block__wrapper">
      <div className="header-left-block">
        <div className="header-left-block__inner-wrapper">
          <img className="header-left-block__logo" src={logo} width="140" height="18"
            alt="logo-krasunya"/>
          {visibleForm
              ? <SearchForm onCloseSnap = {hiddenForm} visibleForm={visibleForm}/>
              : <>
                  <button className="header-left-block__catalog-snap snap" type="button">
                    Каталог косметики
                  </button>
                  <button className="header-left-block__search-snap snap" type="button" onClick={showForm}>
                    <span className="visually-hidden">Открыть форму поиска</span>
                  </button>
                </>
          }         
          <div className="header-left-block__progress-bar visually-hidden">
            <span className="bar">
              <span className="scale"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBlock;