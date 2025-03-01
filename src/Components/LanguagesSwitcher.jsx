import React, { useState, useEffect, useRef } from 'react';
import '../Styles/LanguageSwitcher.scss';
import { TbWorldDown } from "react-icons/tb";
import { Link } from 'react-router-dom';
import i18n from 'i18next';
import Flag from 'react-flagkit'
export default function LanguagesSwitcher() {
  const [open, setOpen] = useState(JSON.parse(localStorage.getItem('savedMenuLng')) || false);

  const menuLng = useRef(null);
  useEffect(() => {
    let handler = (e) => {
      console.log(e.target)
      if (!menuLng.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("savedMenuLng", open)
  })
  return (
    <>
      <div className='MultiLngMenu' ref={menuLng}>
        <div className='menu-icon' onClick={() => { setOpen(!open) }}>
          <i><TbWorldDown /></i>
        </div>

        <div className={`dropdown-menu ${open ? "active" : ''}`}  >
          <ul>
            <li>
              <Link href="#" onClick={() => {
                i18n.changeLanguage('en');
                setOpen(false);
              }}>
                <i><Flag country="GB" className='flag' /></i>&nbsp;
                english</Link>
            </li>
            
            <li>
              <Link href="#" onClick={() => {
                i18n.changeLanguage('fr');
                setOpen(false);
              }}>
                <i><Flag country="FR" className='flag' /></i>&nbsp;
                français</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}