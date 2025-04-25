import LayoutV5 from '@/components/layouts/LayoutV5';
import PortfolioV3 from '@/components/portfolio/PortfolioV3';

export const metadata = {
    title: "Digitax - Санхүү татварын тайлан бэлдэх үйлчилгээ - Project"
};

const ProjectPage = () => {
    return (
        <>
            <LayoutV5>
                <PortfolioV3 />
            </LayoutV5>
        </>
    );
};

export default ProjectPage;