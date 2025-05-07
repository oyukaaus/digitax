import Image from "next/image";
import Link from "next/link";
import Animate from "../animation/Animate";

const BannerV1 = () => {
  return (
    <>
      <div className="banner-style-one-area overflow-hidden bg-gray">
        <div className="shape-blury" />
        <div className="banner-style-one">
          <div className="container">
            <div className="content">
              <div className="row align-center">
                <div className="col-xl-6 col-lg-7 pr-50 pr-md-15 pr-xs-15">
                  <div className="information">
                    <div className="animation-shape">
                      <Image
                        src="/assets/img/shape/anim-2.png"
                        alt="Image not found"
                        width={200}
                        height={200}
                      />
                    </div>
                    <Animate
                      className="animate__animated animate__fadeInUp"
                      duration="400ms"
                    >
                      <h4 style={{ color: "#246bfd" }}>Digitax</h4>
                    </Animate>

                    <Animate
                      className="animate__animated animate__fadeInUp"
                      delay="500ms"
                      duration="400ms"
                    >
                      <h2>
                        Таны <strong>санхүү, татварын</strong> <br />
                        ухаалаг хөтөч
                      </h2>
                    </Animate>

                    <Animate
                      className="animate__animated animate__fadeInUp"
                      delay="900ms"
                      duration="400ms"
                    >
                      <p>Digitax - Таны бизнесийг дэмжих дижитал шийдэл</p>
                    </Animate>

                    <Animate
                      className="animate__animated animate__fadeInUp"
                      delay="1200ms"
                      duration="400ms"
                    >
                      <div className="button mt-40">
                        <Link href="https://www.digitax.mn/app">
                          <button className="btn btn-theme effect">
                            Нэвтрэх
                          </button>
                        </Link>
                      </div>
                    </Animate>
                  </div>
                </div>
                <div className="banner-one-thumb col-xl-6 col-lg-5 pl-60 pl-md-15 pl-xs-15">
                  <div className="thumb relative">
                    <Animate className="animate__animated animate__fadeInUp">
                      <Image
                        src="/assets/img/thumb/11.png"
                        alt="Thumb"
                        width={1000}
                        height={1142}
                      />
                    </Animate>

                    <div className="strategy absolute top-0 left-0 flex flex-col gap-6 p-6">

                      <Animate
                        className="animate__animated animate__fadeInUp "
                        delay="500ms"
                      >
                        <div className="item flex items-center gap-3">
                          <div className="icon">
                            <i className="fas fa-chart-pie" />
                          </div>
                          <div className="info">
                            <p>
                              <strong>Хялбар хэрэглээ</strong>
                            </p>
                          </div>
                        </div>
                      </Animate>

                      <Animate
                        className="animate__animated animate__fadeInLeft"
                        delay="300ms"
                      >
                        <div className="item flex items-center gap-3">
                          <div className="icon">
                            <i className="fas fa-rocket" />
                          </div>
                          <div className="info">
                            <p>
                              <strong>Бизнесийн өсөлт</strong>
                            </p>
                          </div>
                        </div>
                      </Animate>
                      <div >
                        {/* <Animate
                        // className="animate__animated animate__fadeInLeft"
                        delay="700ms"
                      > */}
                        <Animate
                          className="animate__animated animate__fadeInLeft"
                          delay="700ms"
                        >
                          <div style={{ backgroundColor: "white", display: "flex", flexDirection: "row", justifyContent: "center", width: 400, alignItems: "center", height: 100, marginLeft: -300, borderRadius: 10 }}>
                            <div
                              className="icon"
                              style={{
                                height: "auto",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <i
                                className="fas fa-rocket"
                                style={{
                                  height: 60,
                                  width: 60,
                                  backgroundColor: "#246bfd",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  borderRadius: 10,
                                  color: "white",
                                  fontSize: 30,
                                }}
                              />
                            </div>

                            <div className="">
                              <p style={{ fontSize: 30, color: "#04000b", display: "block", marginBottom: 3, marginLeft: 20 }}>
                                <strong>Үр ашигтай байдал</strong>
                              </p>
                            </div>
                          </div>
                          {/* </div>
                        </div> */}
                        </Animate>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerV1;
