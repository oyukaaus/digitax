import Link from "next/link";
import ProjectV1Data from "@/assets/jsonData/projects/ProjectV1Data.json";
import SingleProjectV1 from "./SingleProjectV1";

const ProjectV1 = () => {
  return (
    <>
      <div className="project-style-one-area default-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pr-60 pr-md-15 pr-xs-15">
              <div
                className="project-style-one-info bg-cover text-light"
                // style={{ backgroundImage: "url(/assets/img/shape/1.jpg)" }}
                style={{ backgroundColor: "" }}
              >
                <h3>Бидний үйлчилгээ</h3>
                {/* <p>
                                Таны бизнесийн үйл ажиллагааны өдөр тутмын борлуулалт, зардал, төлбөр тооцоог бүртгэн санхүү, татвар, НДШ, НӨАТ-ын тайланг цаг тухай бүрт дижитал системийн тусламжтай мэргэжлийн нягтлан бодогч нар бэлтгэн илгээж таны цаг завыг хэмнэх гэрээт цахим үйлчилгээ юм.
                                </p> */}
                <ul className="list-style-two mt-20">
                  <li>Санхүү, татварын чадварлаг багийн зөвлөх үйлчилгээ</li>
                  <li>
                    Санхүү, татвар, НДШ-ийн тайланг бэлтгэн цахим системд илгээж
                    үйлчилгээ
                  </li>
                  <li>Тайлангийн төлвийн хялбар хяналт</li>
                  <li>Гар утасны аппликейшн</li>
                </ul>
                <Link className="btn-style-two" href="/about-us">
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="project-style-one-items">
                <div className="accordion" id="projectAccordion">
                  {ProjectV1Data.map((project) => (
                    <SingleProjectV1 project={project} key={project.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectV1;
