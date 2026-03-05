import React from "react";
import { Facebook, Linkedin, Mail, X } from "lucide-react";
const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 mt-12">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-white text-xl font-semibold mb-3">
                            cs— Ticket System
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm text-white font-medium mb-3">
                            Company
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>About Us</li>
                            <li>Our Mission</li>
                            <li>Contact Saled</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm text-white font-medium mb-3">
                            Services
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Products & Services</li>
                            <li>Customer Stories</li>
                            <li>Download Apps</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm text-white font-medium mb-3">
                            Information
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Join Us</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm text-white font-medium mb-3">
                            Social Links
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-center gap-3">
                                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-800">
                                    <X className="h-4 w-4 text-white" />
                                </span>
                                <span>@CS — Ticket System</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-800">
                                    <Linkedin className="h-4 w-4 text-white" />
                                </span>
                                <span>@CS — Ticket System</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-800">
                                    <Facebook className="h-4 w-4 text-white" />
                                </span>
                                <span>@CS — Ticket System</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-800">
                                    <Mail className="h-4 w-4 text-white" />
                                </span>
                                <span>support@cst.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                    <div>© 2025 CS — Ticket System. All rights reserved.</div>
                    <div className="mt-3 md:mt-0 flex items-center space-x-4">
                        <a
                            href="mailto:support@cst.com"
                            className="flex items-center text-gray-300 hover:text-white"
                        >
                            <Mail className="h-4 w-4 mr-2" />
                            <span className="text-sm">support@cst.com</span>
                        </a>

                        <div className="flex items-center space-x-3">
                            <a
                                href="#"
                                aria-label="X"
                                className="text-gray-400 hover:text-white"
                            >
                                <X className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="text-gray-400 hover:text-white"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="text-gray-400 hover:text-white"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>

                        <div className="hidden sm:block">
                            @CS — Ticket System
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
