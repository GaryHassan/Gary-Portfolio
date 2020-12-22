import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import FsLightbox from "fslightbox-react";
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleToggler = (event) => {
    setToggler({
      toggler: event,
    });
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
    axios.get("/api/services").then((response) => {
      setServices(response.data);
    });
    axios.get("/api/reviews").then((response) => {
      setReviews(response.data);
    });
  }, []);

  function getAge() {
    var année = new Date();
    var age = année.getFullYear() - 1997;
    return age;
  }

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="A propos de moi" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img src={information.aboutImage} alt="about" />
                {/* <span className="mi-about-image-icon">
									<Icon.ZoomIn />
								</span> */}
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  Je suis{" "}
                  <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  Je suis un développeur Front-End Javascript. Je crée des sites
                  et applications web responsive. Je sais également créer des
                  applications mobiles multiplateformes compatibles avec iOS et
                  Android.
                </p>
                <ul>
                  {!information.name ? null : (
                    <li>
                      <b>Nom</b> {information.name}
                    </li>
                  )}
                  {!information.age ? null : (
                    <li>
                      <b>Age</b> {getAge()} ans
                    </li>
                  )}
                  {!information.phone ? null : (
                    <li>
                      <b>Téléphone</b> {information.phone}
                    </li>
                  )}
                  {!information.nationality ? null : (
                    <li>
                      <b>Nationalité</b> {information.nationality}
                    </li>
                  )}
                  {!information.language ? null : (
                    <li>
                      <b>Langues</b> {information.language}
                    </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b>Email</b> {information.email}
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b>Adresse</b> {information.address}
                    </li>
                  )}
                  {/* {!information.freelanceStatus ? null : (
										<li>
											<b>Alternance</b> {information.freelanceStatus}
										</li>
									)} */}
                </ul>
                <a
                  href={information.cvfile}
                  target="_blank"
                  className="mi-button"
                >
                  Afficher mon CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Services" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map((service) => (
                <div
                  className="col-lg-6 col-md-6 col-12 mt-3"
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        {/* <div className="container">
					<Sectiontitle title="Reviews" />
					<div className="row justify-content-center">
						<div className="col-12">
							<Slider className="mi-testimonial-slider" {...sliderSettings}>
								{reviews.map((review) => <Testimonial key={review.id} content={review} />)}
							</Slider>
						</div>
					</div>
				</div> */}
      </div>
    </Layout>
  );
}

export default About;
