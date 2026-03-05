import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="navbar shadow-sm p-4 sticky top-0 bg-white z-50">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">CS — Ticket System</h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <nav>
                            <ul className="flex space-x-6">
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Changelog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Download
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <button className="btn bg-linear-to-r from-indigo-500 to-violet-600 text-white font-bold py-2 px-4 rounded">
                            <Plus className="mr-2" /> New Ticket
                        </button>
                    </div>

                    {/* Mobile Menu Button - Using text for icon */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-2xl p-2"
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <nav className="flex flex-col space-y-3">
                            <a
                                href="#"
                                className="py-2 hover:bg-gray-50 px-2 rounded"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="py-2 hover:bg-gray-50 px-2 rounded"
                            >
                                FAQ
                            </a>
                            <a
                                href="#"
                                className="py-2 hover:bg-gray-50 px-2 rounded"
                            >
                                Changelog
                            </a>
                            <a
                                href="#"
                                className="py-2 hover:bg-gray-50 px-2 rounded"
                            >
                                Blog
                            </a>
                            <a
                                href="#"
                                className="py-2 hover:bg-gray-50 px-2 rounded"
                            >
                                Download
                            </a>
                            <a
                                href="#"
                                className="py-2 hover:bg-gray-50 px-2 rounded"
                            >
                                Contact
                            </a>
                            <button className="w-full mt-2 btn bg-linear-to-r from-indigo-500 to-violet-600 text-white font-bold py-3 px-4 rounded">
                                <Plus className="mr-2" /> New Ticket
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
