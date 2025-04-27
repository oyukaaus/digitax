import Link from "next/link";
import Animate from "../animation/Animate";

const PriceV1 = () => {
  return (
    <>
      <div
        className="pricing-style-one-area default-padding bg-cover bg-gray"
        style={{ backgroundImage: "url(/assets/img/shape/3.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">Үнийн санал</h4>
                <h2 className="title">Манай үйлчилгээний багцууд</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Animate
                className="animate__animated animate__fadeInUp"
                delay="100ms"
              >
                <div className="pricing-style-one">
                  <div className="pricing-header">
                    <h4>Багц-1</h4>
                    {/* <p>5 хүртэлх ажилтан</p> */}
                    {/* <h2>200,000₮</h2>
                                        <span>Сард төлөх</span> */}
                  </div>
                  <ul>
                    <li>
                      <i className="fas fa-check" /> Санхүүгийн тайлан
                    </li>
                    <li>
                      <i className="fas fa-check" /> Татварын тайлан
                    </li>
                    <li>
                      <i className="fas fa-check" /> НДШ тайлан /5 хүртэл
                      ажилтан/
                    </li>
                    <li>
                      <i className="fas fa-check" /> Аппликейшн ашиглах 1 эрх
                    </li>
                  </ul>
                  <Link
                    className="btn btn-gradient btn-md animation"
                    href="/contact-us"
                  >
                    Үнийн санал авах
                  </Link>
                </div>
              </Animate>
            </div>
            <div className="col-lg-8">
              <Animate
                className="animate__animated animate__fadeInUp"
                delay="300ms"
              >
                <div className="pricing-two-box">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pricing-style-one">
                        <div className="badge">Best Deal</div>
                        <div className="pricing-header">
                          <h4>Багц-2</h4>
                          {/* <p>20 хүртэл ажилтан</p> */}
                          {/* <h2>600,000₮</h2>
                          <span>Сард төлөх</span> */}
                        </div>
                        <ul>
                          <li>
                            <i className="fas fa-check" /> Санхүүгийн тайлан
                          </li>
                          <li>
                            <i className="fas fa-check" /> Татварын тайлан
                          </li>
                          <li>
                            <i className="fas fa-check" /> НДШ тайлан /20 хүртэл
                            ажилтан/
                          </li>
                          <li>
                            <i className="fas fa-check" /> Аппликейшн ашиглах 3
                            эрх
                          </li>
                        </ul>
                        <Link
                          className="btn btn-dark btn-md animation"
                          href="/contact-us"
                        >
                          Дэлгэрэнгүй
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="pricing-style-one">
                        <div className="pricing-header">
                          <h4>Багц-3</h4>
                          {/* <p>50 хүртэл ажилтан</p> */}
                          {/* <h2>2,000,000₮</h2>
                          <span>Сард төлөх</span> */}
                        </div>
                        <ul>
                          <li>
                            <i className="fas fa-check" /> Санхүүгийн тайлан
                          </li>
                          <li>
                            <i className="fas fa-check" /> Татварын тайлан
                          </li>
                          <li>
                            <i className="fas fa-check" /> НДШ тайлан /50 хүртэл
                            ажилтан/
                          </li>
                          <li>
                            <i className="fas fa-check" /> Аппликейшн ашиглах 5
                            эрх
                          </li>
                        </ul>
                        <Link
                          className="btn btn-dark btn-md animation"
                          href="/contact-us"
                        >
                          Дэлгэрэнгүй
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Animate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceV1;
