import LayoutV5 from '@/components/layouts/LayoutV5';

export const metadata = {
    title: "Digitax - Санхүү татварын тайлан бэлдэх үйлчилгээ- Project Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ProjectDetailsPage = async ({  }: PageProps) => {


    return (
        <>
            <LayoutV5>
            </LayoutV5>
        </>
    );
};

export default ProjectDetailsPage;