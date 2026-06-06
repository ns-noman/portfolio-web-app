import React from 'react'
import {
  FaCogs,
  FaCode,
  FaServer,
  FaPlug,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

export default function Service() {
const services = [
    {
        icon: <FaCogs size={40} />,
        title: "ERP SYSTEM DEVELOPMENT",
        description:
        "I design and develop enterprise-level ERP systems including inventory, accounting, HRM, logistics, and business automation solutions using Laravel and modern architecture.",
    },
    {
        icon: <FaCode size={40} />,
        title: "WEB APPLICATION DEVELOPMENT",
        description:
        "Build scalable and secure web applications using PHP, Laravel, CodeIgniter, JavaScript, and React.js with RESTful API integration.",
    },
    {
        icon: <FaServer size={40} />,
        title: "BACKEND ENGINEERING",
        description:
        "Develop robust backend systems, APIs, authentication systems, RBAC, and scalable database architectures using MySQL, PostgreSQL, MongoDB, and Oracle.",
    },
    {
        icon: <FaPlug size={40} />,
        title: "REST API DEVELOPMENT",
        description:
        "Create and integrate RESTful APIs for mobile apps, web platforms, ERP systems, and third-party services with secure authentication.",
    },
    {
        icon: <FaDatabase size={40} />,
        title: "DATABASE DESIGN",
        description:
        "Expert in MySQL, PostgreSQL, MongoDB, and Oracle database design, optimization, complex joins, reporting systems, and enterprise data structures.",
    },
    {
        icon: <FaCloud size={40} />,
        title: "SAAS & MULTI-TENANT SYSTEMS",
        description:
        "Build scalable SaaS platforms such as bike dealership ERP with multi-branch support, inventory control, and cloud-based architecture.",
    },
    ];

  return (
        <section 
            className="relative bg-cover bg-center bg-no-repeat py-20"
            style={{
                backgroundImage: "url('/img/services-img/bg.jpg')",
            }}
            >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="container relative z-10 mx-auto px-4">
                {/* Section Title */}
                <div className="mb-14 text-center">
                <h2 className="text-4xl font-bold text-white">
                    <strong>WHAT I DO</strong>
                </h2>
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <div
                    key={index}
                    className="rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    >
                    <div className="mb-5 text-blue-600">{service.icon}</div>

                    <h3 className="mb-4 text-xl font-bold uppercase">
                        {service.title}
                    </h3>

                    <p className="leading-7 text-gray-600">
                        {service.description}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </section>

  )
}
