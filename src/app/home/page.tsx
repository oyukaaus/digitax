import AboutV1 from "@/components/about/AboutV1";
import BannerV1 from "@/components/banner/BannerV1";
import FeatureV1 from "@/components/feature/FeatureV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PriceV1 from "@/components/price/PriceV1";
import ProjectV1 from "@/components/projects/ProjectV1";
import ServicesV1 from "@/components/services/ServicesV1";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
  title: "Digitax - Санхүү татварын тайлан бэлдэх үйлчилгээ - NextJS Template",
};

const Home = () => {
  return (
    <>
      <LayoutV1>
        <BannerV1 />
        <AboutV1 />
        <div style={{ marginBottom: 120 }}></div>
        <FeatureV1 />
        <div style={{ marginBottom: 40 }}></div>
        <ServicesV1 />
        <WhyChooseV1 />
        <ProjectV1 />
        {/* <FactV1 /> */}
        <div className="mb-4"></div>
        {/* <PriceV1 /> */}
      </LayoutV1>
    </>
  );
};

export default Home;
