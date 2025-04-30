import BlogStandardContent from '@/components/blog/BlogStandardContent';
import BodyClassV2 from '@/components/classes/BodyClassV2';
import LayoutV1 from '@/components/layouts/LayoutV1';

export const metadata = {
    title: "Digitax - Татварын зөвлөх үйлчилгээ"
};

const BlogStandard = () => {
    return (
        <>
            <LayoutV1 >
                <BlogStandardContent />
                <BodyClassV2 />
            </LayoutV1>
        </>
    );
};

export default BlogStandard;