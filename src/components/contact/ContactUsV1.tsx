import ContactForm from "../form/ContactForm";
import Image from "next/image";
import illustration14 from "@/assets/img/illustration/14.png";
import Animate from "../animation/Animate";

const ContactUsV1 = () => {
  return (
    <>
      <div className="contact-style-one-area overflow-hidden default-padding">
        <div className="contact-shape">
          <Image src={illustration14} alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="contact-stye-one col-lg-5 mb-md-50 mb-xs-40">
              <div className="contact-style-one-info">
                <h4 className="sub-title">Асуулт байна уу?</h4>
                <h2>Холбоо барих</h2>
                <p>Бидэнтэй холбогдох</p>
                <ul>
                  <Animate className="animate__animated animate__fadeInUp">
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="content">
                        <h5 className="title">Утас</h5>
                        <a href="tel:+4733378901">
                          99015440, 99097756, 99160604
                        </a>
                      </div>
                    </li>
                  </Animate>

                  <Animate
                    className="animate__animated animate__fadeInUp"
                    delay="300ms"
                  >
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="info">
                        <h5 className="title">Хаяг</h5>
                        <p>
                          Сүхбаатар дүүрэг 6 дугаар хороо, <br /> Монреимпекс
                          ХХК-ийн байр, 208 тоот
                        </p>
                      </div>
                    </li>
                  </Animate>

                  <Animate
                    className="animate__animated animate__fadeInUp"
                    delay="500ms"
                  >
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope-open-text" />
                      </div>
                      <div className="info">
                        <h5 className="title">Email</h5>
                        <a href="mailto:info@agrul.com.com">
                          {" "}
                          digitax2025@gmail.com
                        </a>
                      </div>
                    </li>
                  </Animate>
                </ul>
              </div>
            </div>
            <div className="contact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15">
              <div className="contact-form-style-one">
                <h2 className="heading">Мессэж илгээх</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsV1;
