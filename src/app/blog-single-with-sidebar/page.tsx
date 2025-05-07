
import BlogData from '@/assets/jsonData/blog/BlogData.json';
import BlogSingleWithSidebarContent from '@/components/blog/BlogSingleWithSidebarContent';
import BodyClassV2 from '@/components/classes/BodyClassV2';
import LayoutV5 from '@/components/layouts/LayoutV5';

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
            <LayoutV5 breadCrumb="Мэдээ мэдээлэл" title="Мэдээ">
                {data && <BlogSingleWithSidebarContent blogInfo={data} totalBlogs={BlogData.length} />}
                <BodyClassV2 />
            </LayoutV5>
        </>
    );
};

export default BlogSingleWithSidebar;