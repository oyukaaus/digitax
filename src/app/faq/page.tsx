import FaqV1 from '@/components/faq/FaqV1';
import LayoutV1 from '@/components/layouts/LayoutV1';

export const metadata = {
    title: "Digitax - Санхүү татварын тайлан бэлдэх үйлчилгээ- Faq"
};

const FaqPage = () => {
    return (
        <>
            <LayoutV1>
                <FaqV1 />
            </LayoutV1>
        </>
    );
};

export default FaqPage;