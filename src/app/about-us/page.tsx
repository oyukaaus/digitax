import AboutV2 from '@/components/about/AboutV2';
import LayoutV5 from '@/components/layouts/LayoutV5';
import TeamV1 from '@/components/team/TeamV1';
import BlogData from '@/assets/jsonData/blog/BlogData.json';
import BlogSingleContent from '@/components/blog/BlogSingleContent';

export const metadata = {
    title: "Digitax - Санхүү татварын тайлан бэлдэх үйлчилгээ - About Us"
};

const AboutUsPage = () => {
    
  const data = BlogData[0]
    return (
        <>
            <LayoutV5>
                <AboutV2/>
                
              {data && <BlogSingleContent blogInfo={data} totalBlogs={BlogData.length} />}
                <TeamV1 />
            </LayoutV5>
        </>
    );
};

export default AboutUsPage;