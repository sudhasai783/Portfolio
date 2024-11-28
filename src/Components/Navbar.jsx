import { useState } from "react";
import logo from "../assets/logo.png"; // Your logo file path

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85; // Adjust offset as per header height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    };

    // Updated navigation links
    const NAVIGATION_LINKS = [
        { label: "Bio", href: "#bio" },
        { label: "Skills", href: "#skills" },
        { label: "Work Experience", href: "#work-experience" },
        { label: "Projects", href: "#projects" },
        { label: "Education", href: "#education" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <div>
            <nav className="fixed left-0 right-0 top-4 z-50">
                {/* Desktop Menu */}
                <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
                    <div className="flex items-center justify-between gap-6">
                        <div className="flex items-center gap-2">
                            {/* Your name displayed on the navbar */}
                            <span className="text-white text-lg font-bold">Sai Sudha Pidugu</span>
                        </div>
                        <div>
                            <ul className="flex items-center gap-4">
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            className="text-sm hover:text-yellow-400"
                                            href={item.href}
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="rounded-lg backdrop-blur-md lg:hidden">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-white text-lg font-bold">Sai Sudha Pidugu</span>
                        </div>
                        <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <span className="m-2 text-white">✖</span>
                            ) : (
                                <span className="m-2 text-white">☰</span>
                            )}
                        </button>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className="ml-4 mt-4 flex flex-col gap-4">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="block w-full text-lg hover:text-yellow-400"
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
