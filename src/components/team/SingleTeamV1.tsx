import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    img?: string;
    title?: string;
    name?: string;
    firstname?: string;
}

const SingleTeamV1 = ({ team }: { team: DataType }) => {
    const { id, img, title, name, firstname } = team
    console.log("img: ", img)
    return (
        <>
            <div className="team-style-one-item">
                <div className="thumb">
                    <Image src={`/assets/img/team/${img}`} width={800} height={900} alt="Image Not Found" />
                    {/* <div className="social-overlay">
                        <ul>
                            <li>
                                <Link href="https://www.linkedin.com/" target="_blank">
                                    <i className="fab fa-linkedin-in" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://dribbble.com/" target="_blank">
                                    <i className="fab fa-dribbble" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.facebook.com/" target="_blank">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                            </li>
                        </ul>
                        <div className="icon">
                            <i className="fas fa-plus" />
                        </div>
                    </div> */}
                </div>
                <div className="info">
                    <span>{title}</span>
                    <h4><Link href={`/team-details/${id}`}>{name} {firstname}</Link></h4>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV1;