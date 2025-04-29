import Image from 'next/image';
import Link from 'next/link';
import team1Thumb from "@/assets/img/team/v1.jpg"
import SocialShare from '../utilities/SocialShare';
import BlogPostComments from './BlogPostComments';
import BlogCommentForm from '../form/BlogCommentForm';
import Animate from '../animation/Animate';
import BlogData from '@/assets/jsonData/blog/BlogData.json';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

interface DataType {
    id: number;
    date?: string;
    dateIcon?: string;
    thumbFull?: string;
}

interface BlogSingleProps {
    blogInfo?: DataType;
    totalBlogs?: number;
}

const BlogSingleContent = ({ blogInfo, totalBlogs }: BlogSingleProps) => {
    const { id, date, dateIcon, thumbFull } = blogInfo || {};

    // Blogs Navigation 
    const currentId = id ? parseInt(id.toString(), 10) : 1;

    // Calculate the previous and next IDs dynamically
    const previousId = currentId === 1 ? totalBlogs : currentId - 1;
    const nextId = currentId === totalBlogs ? 1 : currentId + 1;

    // Get the previous and next project titles
    const previousBlog = BlogData.find((blog) => blog.id === previousId);
    const nextBlog = BlogData.find((blog) => blog.id === nextId);

    // Get the first two words of the project title
    const getFirstTwoWords = (text?: string) => text?.split(' ').slice(0, 2).join(' ') || "No Title";

    return (
        <>
            <div className="blog-area single full-blog full-blog ">
                <div className="container">
                    {/* <div className="blog-items">
                        <div className="row"> */}
                    <h1 className='text-center'>"Татварын хөгжил дэвшил холбоо" ТББ-ын Үйл ажиллагааны Танилцуулга</h1>
                    <Animate className="animate__animated animate__fadeInUp">
                        <div className="blog-content">
                            <div className="blog-style-two item">
                                <div className="blog-item-box">
                                    {/* <div className="thumb">
                                                <Link href="#"><Image src={`/assets/img/blog/${thumbFull}`} width={1075} height={546} alt="Thumb" /></Link>
                                            </div> */}
                                    <div className="info">
                                        {/* <div className="meta">
                                                    <ul>
                                                        <li>
                                                            <Link href="#"><i className={dateIcon}></i> {date}</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#"><i className="fas fa-user-circle" /> Md Sohag</Link>
                                                        </li>
                                                    </ul>
                                                </div> */}
                                        <p>
                                        2022 оны 6 сард үүсгэн байгуулагдсан "Татварын хөгжил дэвшил холбоо" ТББ нь санхүү, татварын салбарын өндөр туршлагатай, мэргэшсэн мэргэжилтнүүдийн санаачилгаар байгуулагдсан. Тус байгууллага нь татварын албанд 20 ба түүнээс дээш жил ажилласан татварын итгэмжит зөвлөхүүд, МНБ, ТМЗ зэрэг мэргэжилтнүүдээс бүрддэг.  </p>
                                        {/* <p>
                                            New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                        </p>
                                        <blockquote>
                                            Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness.
                                        </blockquote>
                                        <p>
                                            Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                        </p> */}
                                        <h3>Үндсэн Үнэт зүйлс ба Эрхэм зорилго</h3>
                                        <ul>
                                            <li>Татварын хуулийг хэрэгжүүлэхэд татвар төлөгчдөд мэргэжлийн түвшний зөвлөгөө, үйлчилгээ үзүүлэх</li>
                                            <li>Татвар төлөгч бүрийн эрх ашгийг хамгаалсан шударга орчныг бүрдүүлэх.</li>
                                            <li>Улс орны эдийн засгийн хөгжилд хувь нэмэр оруулах</li>
                                        </ul>
                                        <h3>Гол Зорилтууд</h3>
                                        <ul>
                                            <li>Татварын талаар судалгаа хийх, татвар төлөгчдийн эрх ашгийг хамгаалах</li>
                                            <li>Ижил зорилготой төрийн болон төрийн бус байгууллагуудтай хамтран ажиллах</li>
                                            <li>Сургалт, төслүүд хэрэгжүүлэх, бизнес эрхлэгчдэд татварын боловсрол олгох</li>
                                        </ul>
                                        <h3>Гишүүнчлэл</h3>
                                        <h5>"Татварын хөгжил дэвшил холбоо" ТББ нь өнөөдрийн байдлаар 220 гишүүнтэй бөгөөд:</h5>
                                        <ul>
                                            <li>55 жинхэнэ гишүүн (МНБ болон ТМЗ зэрэг мэргэжилтнүүд)</li>
                                            <li>165 дэмжигч гишүүн бүртгэгдээд байна.</li>
                                        </ul>
                                        <h3>Хийсэн Ажлууд</h3>
                                        <ul>
                                            <li>УИХ-ын төсвийн байнгын хорооны дэд ажлын хэсэгт орж ажилласан</li>
                                            <li>ТМЗ-ын тухай хуулийн нэмэлт өөрчлөлтөд санал боловсруулж оролцсон</li>
                                            <li>500 гаруй бизнес эрхлэгчдэд татварын сургалт, мэргэжлийн зөвлөгөө өгсөн</li>
                                            <li>Нийслэл болон дүүргийн татварын албадын дарга нартай уулзалт, танилцуулга зохион байгуулсан</li>
                                        </ul>
                                        <h3>Ирээдүйн Төлөвлөгөө</h3>
                                        <ul>
                                            <li>Татварын хуулийн шинэчлэлд идэвхтэй оролцох</li>
                                            <li>ТМЗ-ын тухай хуулийг шинэчлэн боловсруулах</li>
                                            <li>Жижиг, бичил бизнес эрхлэгчдэд чиглэсэн татварын боловсрол олгох</li>
                                            <li>Татварын албатай илүү үр дүнтэй хамтран ажиллах</li>
                                            <li>Санхүү, татварын тайлангийн зөрүүг зохицуулах сургалт, хөтөлбөр хэрэгжүүлэх</li>
                                            <li>Татвар төлөгчдийн эрх ашгийг хамгаалах мэргэжлийн зөвлөгөө, үйлчилгээг өргөжүүлэх</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Animate>
                    {/* </div>
                    </div> */}
                </div>
            </div>

        </>
    );
};

export default BlogSingleContent;