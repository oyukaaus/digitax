import Image from 'next/image';
import thumb7 from "@/assets/img/team/11.jpg"
import LayoutV5 from '@/components/layouts/LayoutV5';

const ProjectDetailsContent = () => {

    return (
        <>
            <LayoutV5>
                <div className="project-details-area default-padding">
                    <div className="container">
                        <div className="project-details-items">
                            <div className="top-info">
                                <div className="row">
                                    <h4 className="title" style={{ textAlign: "center", marginBottom: 100 }}>ТАТВАРЫН ХӨГЖИЛ ДЭВШИЛ ХОЛБОО ТББ-ЫН ТАНИЛЦУУЛГА</h4>
                                    <div className="col-xl-4 col-lg-5 order-lg-last right-info">
                                        <div className="project-info">
                                            {/* <h4 className="title">Project Info</h4> */}
                                            <Image src={thumb7} alt="Image Not Found" />
                                            {/* <ul className="social">
                                            <li>
                                                <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter" /></a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in" /></a>
                                            </li>
                                            <li>
                                                <a href="https://www.pinterest.com/" target="_blank"><i className="fab fa-pinterest-p" /></a>
                                            </li>
                                        </ul> */}
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-7  pr-35 pr-md-15 pr-xs-15 left-info mt-md-10">
                                        <h4 style={{ marginTop: 20 }}>  Татварын хөгжил дэвшил холбоо нь</h4>
                                        <ul className="list-style-two">
                                            <li>Татвар төлөгчийн эрх ашгийг төлөөлөх, мэргэжлийн зөвлөгөө үйлчилгээ үзүүлэх</li>
                                            <li>Төрийн болон төрийн бус байгууллагууд</li>
                                            <li>Мэргэжлийн холбоодуудтай хамтран ажиллах</li>
                                            <li>Татварын хөгжлийн талаар судалгаа хийх</li>
                                            <li>Төр, иргэний хамтын ажиллагааны гүүр болох чиглэлээр үүсгэн байгуулагдсан.</li>
                                        </ul>
                                        <h4 style={{ marginTop: 40 }}>Бид үйл ажиллагаанд дараах зарчмыг баримтлана.</h4>
                                        <ul className="list-style-two">
                                            <li>Монгол Улсын хуулийг дээдлэн аливаа улс төрөөс ангид байж, хуулиар хориглоогүй үйл ажиллагааг явуулна.</li>
                                            <li> Гишүүдийн эрх, ашиг сонирхолыг хүндэтгэж дотоод ардчилалтай байна.</li>
                                            <li>Холбооны үйл ажиллагаа нь ил тод, нээлттэй гишүүддээ тэгш үйлчилж, зохион байгуулах арга хэмжээ, төсөл хөтөлбөрүүдэд гишүүдийн оролцох бололцоог хангана.</li>
                                            <li>Холбоо нь хараат бус дотоод хяналттай байна.</li>
                                            <li>Гишүүд болон олон нийтийг үндэслэлтэй, үнэн бодит, шинжлэх ухаанч, мэдээлэл, мэдлэгээр хангана.</li>
                                            <li>Гишүүдийнхээ мэргэжил, мэдлэгийг дээшлүүлэх, бусдаас суралцах, мэдээлэл солилцох боломжоор байнга хангана.</li>
                                            <li>Үйл ажиллагаандаа уламжлал, шинэчлэлийг хослуулна.</li>
                                        </ul>
                                        <p style={{ marginTop: 20 }}>Цаашид ‘’АЛСЫН ХАРАА-2050’’  Монгол улсын урт хугацааны хөгжлийн бодлогын зорилт ‘’ Хөдөлмөр эрхлэлтийг дэмжих, бизнес эрхлэх арга ур чадварыг хөгжүүлж, бизнес эрхлэгчдийн цахим технологд суурилсан олон талт санхүүгийн үйлчилгээг хөгжүүлэх’’ бодлого,	бичил, жижиг, бизнес  эрхлэгчдэд санхүү, татварын  зөвлөх үйлчилгээг технологийн цогц шийдлээр хүргэж, Татвар төлөгчийг татварын дарамтаас сэргийлэх, бизнесийн таатай орчинг бүрдүүлэхэд дэмжлэг үзүүлж, Монгол Улсынхаа төлөө хамтдаа хөгжье.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-details-items bg-gray default-padding mt-20 mt-xs-40">
                            <div className="item-grid-container">
                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3>Эрхэм зорилго</h3>
                                        </div>
                                        <div className="right-info">
                                            <p>Татвар төлөгч бүр татварын хууль ёсны эрх ашгаа хамгаалах, зөвлөгөө үйлчилгээ авах шударга орчинг бүрдүүлнэ. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3>Алсын хараа</h3>
                                        </div>
                                        <div className="right-info">
                                            <p>Бизнес эрхлэгчдэд татварын хуулийг хэрэгжүүлэхэд татварын үйлчилгээг дэвшилтэт технологи, сургалтаар мэргэжлийн түвшинд хүргэж улс орны эдийн засагт хувь нэмрээ оруулна.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3>Үнэт зүйлc</h3>
                                        </div>
                                        <div className="right-info">
                                            <ul>
                                                <li>Шинэ үеийн татварын албаны түүхийг бүтээлцсэн татварын үе үеийн төлөөлөл, ур чадвар бүхий туршлагатай татварын зөвлөхүүд.</li>
                                                <li>Үнэ цэнэтэй бүтээгдэхүүн, үйлчилгээ</li>
                                                <li>Салбартаа манлайлах, найдартай ёс зүйтэй хамтын ажиллагаа</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutV5>
        </>
    );
};

export default ProjectDetailsContent;