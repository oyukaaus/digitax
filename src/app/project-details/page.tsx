import LayoutV5 from '@/components/layouts/LayoutV5';
import ProjectDetailsContent from '@/components/projects/ProjectDetailsContent';
import GalleryV1Data from "@/assets/jsonData/gallery/GalleryV1Data.json";

export const metadata = {
    title: "Digitax - Санхүү татварын тайлан бэлдэх үйлчилгээ- Project Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ProjectDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = GalleryV1Data.find(project => project.id === parseInt(id))

    return (
        <>
            <LayoutV5>
                {data && <ProjectDetailsContent projectInfo={data} />}
            </LayoutV5>
        </>
    );
};

export default ProjectDetailsPage;