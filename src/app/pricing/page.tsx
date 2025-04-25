import LayoutV5 from '@/components/layouts/LayoutV5';
import PriceV1 from '@/components/price/PriceV1';

export const metadata = {
    title: "Digitax - Санхүү татварын тайлан бэлдэх үйлчилгээ- Pricing"
};

const PricingPage = () => {
    return (
        <>
            <LayoutV5>
                <PriceV1 />
            </LayoutV5>
        </>
    );
};

export default PricingPage;