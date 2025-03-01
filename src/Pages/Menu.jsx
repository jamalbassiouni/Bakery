import React from "react";
import "../Styles/Menu.scss";
import woman from "../Assets/doughBread.jpg";
import basket from "../Assets/BasketBread.jpg";
import croissant from "../Assets/Croissant.jpg";
import brownies from "../Assets/Brownies.jpg";
import cinnamon from "../Assets/Cinnamon.jpg";
import turkish from "../Assets/Turkish.jpg";
import doughnuts from "../Assets/Doughnuts.jpg";
import tarts from "../Assets/Tarts.jpg";
import shortbread from "../Assets/Shortbread.jpg";
import cookies from "../Assets/Cookies.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BackToTopBtn from "../Components/BackToTopBtn";
import { useTranslation } from "react-i18next";
export default function Menu() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("TitleMenu")}</title>
        <link rel="canonical" href="http://localhost:3000/menu" />
      </Helmet>

      <div className="menus">
        <figure></figure>
        <div className="color">
          <div className="container">
            <div className="row">
              <div
                className="col-sm-12 col-md-6 col-lg-3 top"
                data-aos="fade-right"
              >
                <article className="item">
                  <h2>01</h2>
                  <h5>{t("Breads")}</h5>
                  <p>{t("TextDescription")} </p>
                </article>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-3 top"
                data-aos="fade-down"
              >
                <article className="item">
                  <h2>02</h2>
                  <h5>{t("Baguette")}</h5>
                  <p>{t("TextDescription")} </p>
                </article>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-3 top"
                data-aos="fade-down"
              >
                <article className="item">
                  <h2>03</h2>
                  <h5>{t("MiniPizza")}</h5>
                  <p>{t("TextDescription")} </p>
                </article>
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-3 top"
                data-aos="fade-left"
              >
                <article className="item">
                  <h2>04</h2>
                  <h5>{t("Scone")}</h5>
                  <p>{t("TextDescription")} </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="traditions">
        <h1 data-aos="fade-right">{t("TitleTraditions")}</h1>
        <div className="container" data-aos="fade-down">
          <div className="row">
            <article className="col-lg-7 spacing">
              <h4>{t("TraditionText1")} </h4>
              <p>{t("TraditionDescription")} </p>
            </article>
            <article className="col-lg-7 spacing">
              <h4>{t("TraditionText2")} </h4>
              <p>{t("TraditionDescription")} </p>
            </article>
            <article className="col-lg-7 spacing">
              <h4>{t("TraditionText3")} </h4>
              <p>{t("TraditionDescription")} </p>
            </article>
          </div>
          <Link to="/about">{t("TitleAbout")}</Link>
        </div>
      </div>

      <div className="bg-goal">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-7" data-aos="fade-right">
              <figure className="figureWoman">
                <LazyLoadImage src={woman} alt="Dough'SWoman" />
              </figure>
            </div>
            <div className="col-sm-12 col-lg-12">
              <article className="bg-text" data-aos="fade-left">
                <h3>{t("TitleGoal")} </h3>
                <p>{t("GoalDescription")} </p>
                <Link to="/">{t("TitleHome")}</Link>
              </article>
            </div>
            <div className="col-sm-12 col-lg-7">
              <figure className="figureBasket" data-aos="fade-up">
                <LazyLoadImage src={basket} alt="BasketBread" />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="price">
        <div className="container">
        <h2 data-aos="fade-right">{t("TitlePrice")} </h2>
          <div className="row">
            <div className="col-sm-12 col-lg-3" data-aos="fade-right">
              <figure className="figureSourdough"></figure>
            </div>
            <figcaption
              className="col-sm-12 col-lg-3 spacing"
              data-aos="fade-right"
            >
              <h4>{t("SourdoughLoaf")}</h4>
              <p>{t("SourdoughDes")}</p>
              <h5> {t("SourdoughPrice")}</h5>
            </figcaption>
            <div className="col-sm-12 col-lg-3" data-aos="fade-left">
              <figure className="figureBaguette"></figure>
            </div>
            <figcaption
              className="col-sm-12 col-lg-3 spacing"
              data-aos="fade-left"
            >
              <h4>{t("Baguette")}</h4>
              <p>{t("BaguetteDes")}</p>
              <h5> {t("BaguettePrice")}</h5>
            </figcaption>
          </div>
          <div className="row">
            <figcaption
              className="col-sm-12 col-lg-3 spacing farmerText"
              data-aos="fade-right"
            >
              <h4>{t("FarmersLoaf")}</h4>
              <p>{t("FarmerDes")}</p>
              <h5> {t("FarmerPrice")}</h5>
            </figcaption>
            <div
              className="col-sm-12 col-lg-3 farmerFigure"
              data-aos="fade-right"
            >
              <figure className="figureFarmers"></figure>
            </div>
            <figcaption
              className="col-sm-12 col-lg-3 spacing roundText"
              data-aos="fade-left"
            >
              <h4>{t("RoundBread")}</h4>
              <p>{t("RoundDes")}</p>
              <h5> {t("RoundPrice")}</h5>
            </figcaption>
            <div
              className="col-sm-12 col-lg-3 roundFigure"
              data-aos="fade-left"
            >
              <figure className="figureRound"></figure>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sweets">
        <h2 data-aos="fade-right">{t("TitleSweets")} </h2>
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
              data-aos="fade-right"
            >
              <article className="bg-item">
                <LazyLoadImage src={croissant} alt="Croissant" />
                <h4>{t("Croissant")}</h4>
                <p>
                  <span>{t("SweetsDes1")}</span>
                  <span className="text-underline">{t("SweetsDes2")}</span>
                  {t("SweetsDes3")}
                </p>
                <button>{t("SweetsBtn")}</button>
              </article>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
              data-aos="fade-down"
            >
              <article className="bg-item">
                <LazyLoadImage src={brownies} alt="Brownies" />
                <h4>{t("Brownies")}</h4>
                <p>
                  <span>{t("SweetsDes1")}</span>
                  <span className="text-underline">{t("SweetsDes2")}</span>
                  {t("SweetsDes3")}
                </p>
                <button>{t("SweetsBtn")}</button>
              </article>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
              data-aos="fade-down"
            >
              <article className="bg-item">
                <LazyLoadImage src={cinnamon} alt="Cinnamon" />
                <h4>{t("CinnamonBun")}</h4>
                <p>
                  <span>{t("SweetsDes1")}</span>
                  <span className="text-underline">{t("SweetsDes2")}</span>
                  {t("SweetsDes3")}
                </p>
                <button>{t("SweetsBtn")}</button>
              </article>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
              data-aos="fade-left"
            >
              <article className="bg-item">
                <LazyLoadImage src={turkish} alt="Turkish" />
                <h4>{t("TurkishBagels")}</h4>
                <p>
                  <span>{t("SweetsDes1")}</span>
                  <span className="text-underline">{t("SweetsDes2")}</span>
                  {t("SweetsDes3")}
                </p>
                <button>{t("SweetsBtn")}</button>
              </article>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
              data-aos="fade-right"
            >
              <article className="bg-item">
                <LazyLoadImage src={doughnuts} alt="Doughnuts" />
                <h4>{t("Doughunts")}</h4>
                <p>
                  <span>{t("SweetsDes1")}</span>
                  <span className="text-underline">{t("SweetsDes2")}</span>
                  {t("SweetsDes3")}
                </p>
                <button>{t("SweetsBtn")}</button>
              </article>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
              data-aos="fade-down"
            >
              <article className="bg-item">
                <LazyLoadImage src={tarts} alt="Tarts" />
                <h4>{t("TARTS")}</h4>
                <p>
                  <span>{t("SweetsDes1")}</span>
                  <span className="text-underline">{t("SweetsDes2")}</span>
                  {t("SweetsDes3")}
                </p>
                <button>{t("SweetsBtn")}</button>
              </article>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
              data-aos="fade-down"
            >
              <article className="bg-item">
                <LazyLoadImage src={shortbread} alt="Shortbread" />
                <h4>{t("ShortBread")}</h4>
                <p>
                  <span>{t("SweetsDes1")}</span>
                  <span className="text-underline">{t("SweetsDes2")}</span>
                  {t("SweetsDes3")}
                </p>

                <button>{t("SweetsBtn")}</button>
              </article>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
              data-aos="fade-left"
            >
              <article className="bg-item">
                <LazyLoadImage src={cookies} alt="Cookies" />
                <h4>{t("Cookies")}</h4>
                <p>
                  <span>{t("SweetsDes1")}</span>
                  <span className="text-underline">{t("SweetsDes2")}</span>
                  {t("SweetsDes3")}
                </p>
                <button>{t("SweetsBtn")}</button>
              </article>
            </div>
          </div>
        </div>
      </div>
      <BackToTopBtn />
    </>
  );
}