import React from "react";
import "../Styles/Home.scss";
import since from "../Assets/Since.png";
import breads from "../Assets/Breads.jpg";
import fresca from "../Assets/Fresca.jpg";
import pastries from "../Assets/Pastries.jpg";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BackToTopBtn from "../Components/BackToTopBtn";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("TitleHome")}</title>
        <link rel="canonical" href="http://localhost:3000" />
      </Helmet>

      <figure className="landscape">
        <div className="layer">
          <article className="content" data-aos="fade-down">
            <LazyLoadImage src={since} alt="Since" />
            <h1>
              {t("TitleHome1")}
              <br />
              {t("TitleHome2")}
            </h1>
            <h6 className="details">
              <IoLocationSharp className="icons" />
              <span>{t("Location")}</span>
            </h6>
            <h6 className="details">
              <IoMdPhonePortrait className="icons" />
              <span>(212) 123-4567</span>
            </h6>
            <p>
              {t("Time1")}
              <br />
              {t("Time2")}
              <br />
              {t("Time3")}
            </p>
            <Link to="menu">{t("ViewProducts")}</Link>
          </article>
        </div>
      </figure>

      <section className="bg-cooker">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5 reset" data-aos="fade-right">
              <figure className="chief"></figure>
            </div>
            <figcaption
              className="col-sm-12 col-md-7 bg-white"
              data-aos="fade-left"
            >
              <article className="img-caption">
                <h2>{t("TitleBaker")}</h2>
                <p>{t("PBaker")}</p>
                <Link to="#">
                  <FaPhoneAlt className="iconPhone" />
                  <span>+1&nbsp;(234)&nbsp;567-8910</span>
                </Link>
              </article>
            </figcaption>
          </div>
        </div>
      </section>

      <div className="bg-breads">
        <div className="container">
          <div className="row gy-5">
            <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-right">
              <figure className="figure-position">
                <LazyLoadImage src={breads} alt="breads" />
              </figure>
              <figcaption className="text-caption">
                <h3>{t("Breads")}</h3>
                <p>
                  {t("PublicText1")}
                  <br />
                  {t("PublicText2")}
                </p>
              </figcaption>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-down">
              <figure>
                <LazyLoadImage src={fresca} alt="Fresca" />
              </figure>
              <div className="text-caption">
                <h3>{t("Cookies")}</h3>
                <p>
                  {t("PublicText1")}
                  <br />
                  {t("PublicText2")}
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-left">
              <figure className="figure-position">
                <LazyLoadImage src={pastries} alt="Pastries" />
              </figure>
              <figcaption className="text-caption">
                <h3>{t("Pastries")}</h3>
                <p>
                  {t("PublicText1")}
                  <br />
                  {t("PublicText2")}
                </p>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
      <BackToTopBtn />
    </>
  );
}