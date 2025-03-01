import React from "react";
import "../Styles/Footer.scss";
import since from "../Assets/Since.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useTranslation } from "react-i18next"
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-footer">
      <div className="container">
        <figure data-aos='zoom-out'>
          <LazyLoadImage src={since} alt="Since" />
        </figure>
        <div className="row">
          <div className="col-sm-3">
            <div className="text-caption">
              <h6>{t('Headline')}</h6>
              <p>{t('SampleText')}</p>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="text-caption">
              <h6>{t('Headline')}</h6>
              <p>{t('SampleText')}</p>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="text-caption">
              <h6>{t('Headline')}</h6>
              <p>{t('SampleText')}</p>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="text-caption">
              <h6>{t('Headline')}</h6>
              <p>{t('SampleText')}</p>
            </div>
          </div>
        </div>
      </div>
      <ul className="group-icon">
        <li>
          <i>
            <FaFacebookF />
          </i>
        </li>
        <li>
          <i>
            <FaTwitter />
          </i>
        </li>
        <li>
          <i>
            <BsInstagram />
          </i>
        </li>
      </ul>
    </footer>
  );
}