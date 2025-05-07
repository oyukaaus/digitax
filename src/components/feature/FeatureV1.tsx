import SingleFeatureV1 from "./SingleFeatureV1";
import FeatureV1Data from "@/assets/jsonData/feature/FeatureV1Data.json";

const FeatureV1 = () => {
  const serviceList = [
    "📢 DiGiTAX-аас бизнес эрхлэгчдэд зориулсан шинэ, шинэлэг төсөл эхлүүлж байна.",
    "🔹 Бидний зорилго: Татварын зөв зохистой тайлагнал, хууль эрх зүйн зөвлөгөө, бизнесийн өсөлтийг дэмжих.",
    "🔹 Туршлагатай татварын зөвлөхүүд нэг дор цугларч, танд бодит, хэрэгцээтэй мэдээлэл хүргэнэ.",
    '🔹 Хуулийн хүрээнд зөв ажиллаж, бизнесээ урт хугацаанд тогтвортой авч явахад тань тусална.',
    '📍 Таны бизнес зөв системтэй, эрсдэлгүй, ашигтай байх ёстой. Бидэнтэй нэгдэж, зөв хандлагыг түгээцгээе.'
  ];
  // const serviceList = [
  //   "Санхүү, Татвар, НДШ-ийн цахим тайлангийн үйлчилгээ",
  //   "Санхүүгийн зөвлөх үйлчилгээ",
  //   "Татвар, системийн сургалт",
  // ];

  return (
    <>
      <div className="feature-style-one-area">
        <div className="container container-stage">
          <div className="feature-style-one-items">
            <div className="row">
              <div className="col-xl-4 col-lg-5">
                <div className="feature-style-one-info">
                  <div className="fun-fact">
                    <div className="counter">
                      {/* <div className="timer">
                        <Counter end={68} />
                      </div> */}
                      {/* <div className="operator">K</div> */}
                    </div>
                  </div>
                  <h3>Бизнес эрхлэгч танд:</h3>
                  <ul className="list-style-one mt-25">
                    {serviceList.map((service, index) => (
                      <p key={index}>{service}</p>
                    ))}
                  </ul>
                  <div className="path" />
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 feature-style-one-content text-light">
                <div className="feature-style-one-cards">
                  <div className="path" />
                  {FeatureV1Data.map((feature) => (
                    <SingleFeatureV1 feature={feature} key={feature.id} />
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

export default FeatureV1;
