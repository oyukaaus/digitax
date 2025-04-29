import BlogStandardContent from '@/components/blog/BlogStandardContent';
import BodyClassV2 from '@/components/classes/BodyClassV2';
import LayoutV5 from '@/components/layouts/LayoutV5';

export const metadata = {
    title: "Digitax - Татварын зөвлөх үйлчилгээ"
};

const BlogStandard = () => {
    return (
        <>
            <LayoutV5 breadCrumb="мэдээ мэдээлэл" title="Мэдээ мэдээлэл">
                <BlogStandardContent />
                <BodyClassV2 />
            </LayoutV5>
        </>
    );
};

export default BlogStandard;