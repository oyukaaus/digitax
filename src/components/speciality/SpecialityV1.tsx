import SkillProgressData from "@/assets/jsonData/progress/SkillProgressData.json";
import SkillProgress from '../progress/SkillProgress';
import Counter from '../counter/Counter';

interface DataType {
    sectionClass?: string
}

const SpecialityV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`speciality-style-one-area default-padding-bottom ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-4">
                            <div className="fun-fact-style-two text-light" style={{ backgroundImage: 'url(/assets/img/shape/1.jpg)' }}>
                                <div className="fun-fact">
                                    <div className="counter-title">
                                        <div className="counter">
                                            <div className="timer"><Counter end={90} /></div>
                                            <div className="operator">%</div>
                                        </div>
                                    </div>
                                    <span className="medium">Хэрэгжүүлсэн амжилт</span>
                                </div>
                                <div className="fun-fact">
                                    <div className="counter-title">
                                        <div className="counter">
                                            <div className="timer"><Counter end={1} /></div>
                                            <div className="operator">K</div>
                                        </div>
                                    </div>
                                    <span className="medium">Үйлчлүүлэгч байгууллага</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 offset-xl-1 col-lg-8">
                            <div className="speciality-items">
                                <h4 className="sub-title">Бидний туршлага</h4>
                                <h2 className="title">Бидний зорилт бол <br /> хэрэглэгчдийн сэтгэл ханамж юм </h2>
                                <div className="d-grid mt-40">
                                    <ul className="list-style-two">
                                        <li>Байгууллагын тайлангийн загварчлал </li>
                                        <li>Сэтгэл ханамжын баталгаа</li>
                                        <li>Цаг хугацаанд нь үйлчилгээ үзүүлэх</li>
                                    </ul>
                                    <div className="progress-items">
                                        {SkillProgressData.map(skill =>
                                            <SkillProgress skill={skill} key={skill.id} />
                                        )}
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

export default SpecialityV1;