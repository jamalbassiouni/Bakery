import React from "react";
import "../Styles/About.scss";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import { Link } from "react-router-dom";
import dough from "../Assets/Dough.jpg";
import toast from "../Assets/Toast.jpg";
import chief3 from "../Assets/Chief3.jpg";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BackToTopBtn from "../Components/BackToTopBtn";
import { useTranslation } from "react-i18next";
export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("TitleAbout")}</title>
        <link rel="canonical" href="http://localhost:3000/about" />
      </Helmet>

      <div className="aboutUs">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-sm-12 col-md-6 col-lg-7 spacing"
              data-aos="fade-right"
            >
              <figure></figure>
            </div>
            <figcaption
              className="col-sm-12 col-md-6 col-lg-5 spacing"
              data-aos="fade-left"
            >
              <article className="content">
                <h6>{t("TitleDescription1")}</h6>
                <h1 className="col-sm-10 col-xl-8">
                  {t("TitleDescription2")}{" "}
                </h1>
                <h6 className="flex">
                  <IoLocationSharp className="icons" />
                  <span>{t("Location")}</span>
                </h6>
                <h6 className="flex">
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
                <Link to="/menu">{t("ViewProducts")}</Link>
              </article>
            </figcaption>
          </div>
        </div>
      </div>

      <div className="baked-daily">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-5">
              <article className="bg-dough" data-aos="fade-right">
                <LazyLoadImage src={dough} alt="Dough" />
                <figcaption className="col-sm-12">
                  <p>{t("TitleImg")}</p>
                </figcaption>
              </article>
              <article className="bg-toast" data-aos="fade-right">
                <LazyLoadImage src={toast} alt="Toast" />
                <div className="col-sm-12"></div>
              </article>
            </div>
            <div className="col-sm-12 col-lg-5" data-aos="fade-left">
              <h2>{t("TitleChief")}</h2>
              <article className="bg-chief">
                <LazyLoadImage src={chief3} alt="Chief" />
                <figcaption className="col-sm-12">
                  <p className="p-chief">{t("TitleImg")}</p>
                  <Link to="/menu">{t("ViewProducts")}</Link>
                </figcaption>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-qualityBread">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 spacing" data-aos="fade-down">
              <figure></figure>
            </div>
          </div>
        </div>
        <figcaption className="container">
          <article className="row" data-aos="fade-right">
            <h2>{t("TitleBreads")}</h2>
            <div className="col-sm-12 col-lg-6">
              <p>{t("BreadDescription1")}</p>
            </div>
            <div className="col-sm-12 col-lg-6">
              <p className="text">{t("BreadDescription2")}</p>
              <Link to="#">{t("OurValues")}</Link>
            </div>
          </article>
        </figcaption>
      </div>
      <BackToTopBtn />
    </>
  );
}