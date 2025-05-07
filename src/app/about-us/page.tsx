import AboutV2 from "@/components/about/AboutV2";
import TeamV1 from "@/components/team/TeamV1";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
  title: "Digitax - Санхүү татварын тайлан бэлдэх үйлчилгээ - About Us",
};

const AboutUsPage = () => {
  return (
    <>
      <LayoutV1>
        <AboutV2 />
        {/* 
        {data && (
          <BlogSingleContent blogInfo={data} totalBlogs={BlogData.length} />
        )} */}
        <TeamV1 />
      </LayoutV1>
    </>
  );
};

export default AboutUsPage;
