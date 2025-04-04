"use client";

import React, { useState, useId, useRef, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

const staffData = [
  {
    name: "Mr. Pratik Patel",
    image: "http://diu.iiitvadodara.ac.in/img/Pratik_Patel.jpg",
    designation: "Jr. System Administrator",
    email: "pratikpatel@iiitvadodara.ac.in",
    description: "Responsible for maintaining the institute's IT infrastructure and systems.",
    content: () => (
      <div className="space-y-4">
        <p>Mr. Pratik Patel is the Junior System Administrator at IIIT Vadodara-International Campus Diu. He is responsible for maintaining the institute's IT infrastructure, including servers, networks, and computer systems.</p>
        <p>His responsibilities include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>System administration and maintenance</li>
          <li>Network configuration and troubleshooting</li>
          <li>User account management</li>
          <li>Security implementation and monitoring</li>
          <li>Technical support for faculty and staff</li>
        </ul>
      </div>
    )
  },
  {
    name: "Mr. Gautam Kumar",
    image: "http://iiitvadodara.ac.in/img/gautam.jpg",
    designation: "Jr. Technical Superintendent",
    email: "gautam_kumar@diu.iiitvadodara.ac.in",
    description: "Manages technical equipment and laboratory facilities.",
    content: () => (
      <div className="space-y-4">
        <p>Mr. Gautam Kumar serves as the Junior Technical Superintendent at IIIT Vadodara-International Campus Diu. He oversees the technical equipment and laboratory facilities across the campus.</p>
        <p>His responsibilities include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Laboratory equipment maintenance</li>
          <li>Technical support for research activities</li>
          <li>Inventory management of technical resources</li>
          <li>Assisting faculty with technical demonstrations</li>
          <li>Training students on equipment usage</li>
        </ul>
      </div>
    )
  },
  {
    name: "Mr. Sagar Biren",
    image: "http://diu.iiitvadodara.ac.in/img/sagar.jpg",
    designation: "Administrative Assistant",
    email: "sagar_upadhyay@diu.iiitvadodara.ac.in",
    description: "Provides administrative support for campus operations.",
    content: () => (
      <div className="space-y-4">
        <p>Mr. Sagar Biren works as an Administrative Assistant at IIIT Vadodara-International Campus Diu. He provides essential administrative support to ensure smooth campus operations.</p>
        <p>His responsibilities include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Document management and filing</li>
          <li>Correspondence handling</li>
          <li>Meeting coordination</li>
          <li>Office supplies management</li>
          <li>Assisting with administrative procedures</li>
        </ul>
      </div>
    )
  },
  {
    name: "Mr. Prashant B Solanki",
    image: "http://diu.iiitvadodara.ac.in/img/p.jpg",
    designation: "System Administrator",
    email: "prashant_solanki@diu.iiitvadodara.ac.in",
    description: "Oversees the institute's IT systems and infrastructure.",
    content: () => (
      <div className="space-y-4">
        <p>Mr. Prashant B Solanki is the System Administrator at IIIT Vadodara-International Campus Diu. He leads the IT infrastructure management and ensures the smooth operation of all technical systems.</p>
        <p>His responsibilities include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Strategic planning for IT infrastructure</li>
          <li>Server and network administration</li>
          <li>Cybersecurity implementation</li>
          <li>IT policy development</li>
          <li>Technical team supervision</li>
        </ul>
      </div>
    )
  }
];

const Staff = () => {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#800000] mb-8">Administrative & Technical Staff</h1>
          
          <div className="mb-8">
            <p className="text-gray-700">
              The administrative and technical staff at IIIT Vadodara-International Campus Diu play a vital role in the smooth functioning of the institute. They provide essential support services to maintain the academic and administrative operations of the campus.
            </p>
          </div>
          
          {/* Expandable Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {staffData.map((staff, index) => (
              <motion.div
                layoutId={`card-${staff.name}-${id}`}
                key={staff.name}
                onClick={() => setActive(staff)}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative w-32 h-32 mx-auto md:mx-0">
                        <Image
                          src={staff.image}
                          alt={staff.name}
                          width={128}
                          height={128}
                          className="object-contain rounded-md"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-grow text-center md:text-left">
                      <h2 className="text-xl font-semibold text-[#800000] mb-2">{staff.name}</h2>
                      <p className="text-gray-700 mb-2">{staff.designation}</p>
                      <p className="text-gray-600 text-sm">{staff.description}</p>
                      <p className="text-gray-700 mt-2">
                        <span className="font-medium">Contact: </span>
                        <a href={`mailto:${staff.email}`} className="text-blue-600 hover:underline">
                          {staff.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Expanded Card Modal */}
          <AnimatePresence>
            {active && typeof active === "object" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
              />
            )}
          </AnimatePresence>
          
          <AnimatePresence>
            {active && typeof active === "object" ? (
              <div className="fixed inset-0 grid place-items-center z-[100]">
                <motion.button
                  key={`button-${active.name}-${id}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex absolute top-2 right-2 items-center justify-center bg-white rounded-full h-8 w-8 shadow-md"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </motion.button>
                
                <motion.div
                  layoutId={`card-${active.name}-${id}`}
                  ref={ref}
                  className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white rounded-3xl overflow-hidden"
                >
                  <motion.div layoutId={`image-${active.name}-${id}`} className="relative h-64 w-full">
                    <Image
                      src={active.image}
                      alt={active.name}
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>

                  <div className="p-6 overflow-y-auto">
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`}
                      className="font-semibold text-[#800000] text-xl mb-2"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.designation}-${id}`}
                      className="text-gray-700 mb-4"
                    >
                      {active.designation}
                    </motion.p>
                    
                    <div className="text-gray-700 space-y-4">
                      {typeof active.content === "function" ? active.content() : active.content}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="text-gray-700">
                        <span className="font-medium">Contact: </span>
                        <a href={`mailto:${active.email}`} className="text-blue-600 hover:underline">
                          {active.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>
          
          {/* General Contact Information */}
          <div className="mt-12 bg-gray-50 p-6 rounded-md">
            <h2 className="text-xl font-semibold text-[#800000] mb-4">General Contact Information</h2>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Administrative Office: </span>
                <a href="mailto:administration@diu.iiitvadodara.ac.in" className="text-blue-600 hover:underline">
                  administration@diu.iiitvadodara.ac.in
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Academic Section: </span>
                <a href="mailto:academics@diu.iiitvadodara.ac.in" className="text-blue-600 hover:underline">
                  academics@diu.iiitvadodara.ac.in
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">IT Support: </span>
                <a href="mailto:itsupport@diu.iiitvadodara.ac.in" className="text-blue-600 hover:underline">
                  itsupport@diu.iiitvadodara.ac.in
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone: </span>
                +91 79905 73335 / 9265647473
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-4 border border-gray-200 rounded-md">
            <p className="text-gray-600 text-sm italic">
              Note: For general inquiries, please contact the administrative office. For specific department-related queries, please reach out to the respective staff members via their email addresses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-gray-800"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

export default Staff;