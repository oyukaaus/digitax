import AboutV2 from '@/components/about/AboutV2';
import LayoutV5 from '@/components/layouts/LayoutV5';
import TeamV1 from '@/components/team/TeamV1';

export const metadata = {
    title: "Digitax - Санхүү татварын тайлан бэлдэх үйлчилгээ - About Us"
};

const AboutUsPage = () => {
    return (
        <>
            <LayoutV5>
                <AboutV2/>
                <TeamV1 />
            </LayoutV5>
        </>
    );
};

export default AboutUsPage;