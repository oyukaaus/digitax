
import BlogData from '@/assets/jsonData/blog/BlogData.json';
import BlogSingleContent from '@/components/blog/BlogSingleContent';
import BlogSingleWithSidebarContent from '@/components/blog/BlogSingleWithSidebarContent';
import BodyClassV2 from '@/components/classes/BodyClassV2';
import LayoutV1 from '@/components/layouts/LayoutV1';

export const metadata = {
    title: "Digitax - Санхүү татварын тайлан бэлдэх үйлчилгээ"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const BlogSingleWithSidebar = async ({  }: PageProps) => {

    const data = BlogData[0]

    return (
        <>
            <LayoutV1>
                {data && <BlogSingleWithSidebarContent blogInfo={data} totalBlogs={BlogData.length} />}
                {data && <BlogSingleContent blogInfo={data} totalBlogs={BlogData.length} />}
                <BodyClassV2 />
            </LayoutV1>
        </>
    );
};

export default BlogSingleWithSidebar;