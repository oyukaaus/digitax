
import BlogData from '@/assets/jsonData/blog/BlogData.json';
import BlogSingleContent from '@/components/blog/BlogSingleContent';
import BlogSingleWithSidebarContent from '@/components/blog/BlogSingleWithSidebarContent';
import BodyClassV2 from '@/components/classes/BodyClassV2';
import LayoutV5 from '@/components/layouts/LayoutV5';

export const metadata = {
    title: "Gixus - Business Consulting - Blog Single With Sidebar"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const BlogSingleWithSidebar = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = BlogData[0]

    return (
        <>
            <LayoutV5 breadCrumb="blog-single-with-sidebar" title="Partiality indulgence dispatched to of celebrated.">
                {data && <BlogSingleWithSidebarContent blogInfo={data} totalBlogs={BlogData.length} />}
                {data && <BlogSingleContent blogInfo={data} totalBlogs={BlogData.length} />}
                <BodyClassV2 />
            </LayoutV5>
        </>
    );
};

export default BlogSingleWithSidebar;