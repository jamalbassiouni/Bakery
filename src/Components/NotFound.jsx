import React from 'react';
import '../Styles/NotFound.scss';
import noPage from '../Assets/404.png'
import { Helmet } from "react-helmet-async";
import error from '../Assets/Error.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from "react-i18next"
export default function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('TitleNotFound')}</title>
        <link rel="icon" href={noPage} />
      </Helmet>
      
      <section className='error'>
        <LazyLoadImage src={error} alt='Error' data-aos='zoom-out' data-aos-duration="2000" data-aos-delay="50"
        />
      </section>
    </>
  )
}