import FaqV1 from '@/components/faq/FaqV1';
import LayoutV5 from '@/components/layouts/LayoutV5';

export const metadata = {
    title: "Digitax - Санхүү татварын тайлан бэлдэх үйлчилгээ- Faq"
};

const FaqPage = () => {
    return (
        <>
            <LayoutV5>
                <FaqV1 />
            </LayoutV5>
        </>
    );
};

export default FaqPage;