import ContactUsV1 from '@/components/contact/ContactUsV1';
import LayoutV1 from '@/components/layouts/LayoutV1';
import MapV1 from '@/components/map/MapV1';

export const metadata = {
    title: "Digitax - Санхүү татварын тайлан бэлдэх үйлчилгээ - Contact Us"
};

const ContactUsPage = () => {
    return (
        <>
            <LayoutV1>
                <ContactUsV1 />
                <MapV1 />
            </LayoutV1>
        </>
    );
};

export default ContactUsPage;