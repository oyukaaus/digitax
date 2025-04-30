import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    thumbFull?: string;
    date?: string;
    text?: string;
    title?: string;
}

const SingleBlogStandard = ({ blog }: { blog: DataType }) => {
    const { id, thumbFull, date, title, text } = blog

    return (
        <>
            <div className="item">
                <div className="thumb">
                    <Link href={`/blog-single-with-sidebar`}>
                        <Image src={`/assets/img/blog/${thumbFull}`} alt="Image Not Found" width={1500} height={750} />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li>
                                <Link href="#" scroll={false}><i className="far fa-calendar-alt" /> {date}</Link>
                            </li>
                            <li>
                                <Link href="#" scroll={false}><i className="far fa-user-circle" /> Admin</Link>
                            </li>
                        </ul>
                    </div>
                    <h2 className="title">
                        <Link href={`/blog-single-with-sidebar`}>{title}</Link>
                    </h2>
                    <p>{text}</p>
                    <Link className="btn mt-10 btn-md circle btn-theme animation" href={`/blog-single-with-sidebar`}>Continue Reading</Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogStandard;