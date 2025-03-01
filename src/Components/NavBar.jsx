import React, { useState, useContext, useEffect, useRef } from 'react'
import '../Styles/NavBar.scss';
import useWindowSize from '../Hooks/Window-size';
import logo from '../Assets/BakeryLogo.png';
import darkLogo from '../Assets/DarkBakeryLogo.png';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, NavLink } from 'react-router-dom';
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";
import { DarkModeContext } from '../Context/DarkModeContext';
import { useTranslation } from "react-i18next";
import LanguagesSwitcher from './LanguagesSwitcher';
import i18n from 'i18next';
import Flag from 'react-flagkit'
export default function NavBar() {
  const [menu, setMenu] = useState(JSON.parse(localStorage.getItem('savedMenu')) || false);
  useEffect(() => {
    localStorage.setItem('savedMenu', menu);
  }, [menu]);

  const { width, scrollY } = useWindowSize();
  const handleEsc = (event) => {
    if (event.key === 'Escape') {
      setMenu(false);
    }
  };

  const menuRef = useRef(null);
  useEffect(() => {
    let handler = (e) => {
      console.log(e.target)
      if (!menuRef.current.contains(e.target)) {
        setMenu(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    }
  }, [])

  let { theme, toggleMode } = useContext(DarkModeContext);
  const { t } = useTranslation();
  return (<div ref={menuRef}>
    <nav data-aos='fade-down'>
      <div className={`${scrollY > 100 ? "activeScrollBottom" : "activeScrollTop"}`}>
        <div className='container d-flex'>
          <Link to='/'><LazyLoadImage src={theme === 'light' ? logo : darkLogo} alt="Logo" /></Link>
          {width >= 991 ? (
            <ul>
              <li><NavLink to='/'>{t('TitleHome')}</NavLink></li>
              <li><NavLink to='about'>{t('TitleAbout')}</NavLink></li>
              <li><NavLink to='menu'>{t('TitleMenu')}</NavLink></li>
              <li><LanguagesSwitcher /></li>
              <li onClick={toggleMode}> {theme === 'light' ? <i><BsFillMoonFill className='darkMode dark' /></i> : <i><FaSun className='darkMode light' /></i>}</li>
            </ul>) : (<button className={`hamburger hamburger--elastic ${menu ? "is-active" : ''}`} type="button" onKeyDown={handleEsc} onClick={() => setMenu(!menu)} >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>)}
        </div>
      </div>
    </nav>

    <div className={`menu ${menu ? "active" : ''}`}  >
      <div className="container">
        <ul>
          <li><NavLink onClick={() => setMenu(false)} to='/'>{t('TitleHome')}</NavLink></li>
          <li><NavLink onClick={() => setMenu(false)} to='about'>{t('TitleAbout')}</NavLink></li>
          <li><NavLink onClick={() => setMenu(false)} to='menu'>{t('TitleMenu')}</NavLink></li>

          <div className='d-flex'>
            <li><Link onClick={() => {
              i18n.changeLanguage('en')
              setMenu(false)
            }}><i><Flag country="GB" className='flag' /></i>&nbsp;
              en</Link></li>&nbsp;

            <li><Link onClick={() => {
              i18n.changeLanguage('fr')
              setMenu(false)
            }}><i><Flag country="FR" className='flag' /></i>&nbsp;
              fr</Link></li>&nbsp;
          </div>

          <li className='resDark' onClick={() => {
            setMenu(false)
            toggleMode()
          }}> {theme === 'light' ? <div className='DarkMode'>{t('DarkMode')}</div> : <div className='LightMode'>{t('LightMode')}</div>}</li>
        </ul>
      </div>
    </div>
  </div>
  )
}