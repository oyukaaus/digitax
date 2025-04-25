"use client";
import Link from 'next/link';

interface DataType {
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    navbarPlacement?: string;
}

const MainMenu = ({ toggleSubMenu, navbarPlacement }: DataType) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                    <Link href="#"  onClick={toggleSubMenu}>Нүүр</Link>
                    {/* <ul className="dropdown-menu">
                        <li><Link href="/">Business Consultant</Link></li>
                        <li><Link href="/home-2">It Solutions</Link></li>
                        <li><Link href="/home-3">Creative Agency</Link></li>
                        <li><Link href="/home-4">Transport &amp; Logistics</Link></li>
                        <li><Link href="/home-5">Financial Advisor</Link></li>
                    </ul> */}
                </li>
                {/* <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Pages</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/about-us-2">About Us Two</Link></li>
                        <li><Link href="/team">Team</Link></li>
                        <li><Link href="/team-2">Team Two</Link></li>
                        <li><Link href="/team-details/1">Team Details</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/contact-us">Contact Us</Link></li>
                        <li><Link href="/not-found">Error Page</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Projects</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/project">Project style one</Link></li>
                        <li><Link href="/project-2">Project style two</Link></li>
                        <li><Link href="/project-3">Project style three</Link></li>
                        <li><Link href="/project-details/1">Project Details</Link></li>
                    </ul>
                </li> */}
                <li className="dropdown">
                    <Link href="/services-2" >Үйлчилгээ</Link>
                    {/* <ul className="dropdown-menu">
                        <li><Link href="/services">Үйлчилгээ Нэг</Link></li>
                        <li><Link href="/services-2">Үйлчилгээ Хоёр</Link></li>
                        <li><Link href="/services-3">Үйлчилгээ Гурав</Link></li>
                    </ul> */}
                </li>
                <li className="dropdown">
                    <Link href="/blog-standard" >Мэдээ мэдээлэл</Link>
                    {/* <ul className="dropdown-menu">
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-with-sidebar">Blog With Sidebar</Link></li>
                        <li><Link href="/blog-2-column">Blog Grid Two Column</Link></li>
                        <li><Link href="/blog-3-column">Blog Grid Three Column</Link></li>
                        <li><Link href="/blog-single/1">Blog Single</Link></li>
                        <li><Link href="/blog-single-with-sidebar/1">Blog Single With Sidebar</Link></li>
                    </ul> */}
                </li>
                <li><Link href="/contact-us">Холбоо барих</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;