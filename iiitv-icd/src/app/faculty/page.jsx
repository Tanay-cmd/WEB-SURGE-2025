"use client";

import React, { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

const facultyData = [
  {
    name: "Gaurav Pareek",
    image: "http://diu.iiitvadodara.ac.in/img/gauravsir.jpg",
    profile: "http://diu.iiitvadodara.ac.in/pdf/gauravsir.pdf",
    education: "Ph.D. in Computer Science and Engineering",
    thesis: "Cryptographic Solutions for Secure Sharing of Outsourced Data",
    institution: "National Institute of Technology (NIT) Goa",
    interests: "Cryptography, Information Security, Cloud Security, Access Control",
    contact: "gaurav_pareek@diu.iiitvadodara.ac.in",
    department: "Computer Science and Engineering"
  },
  {
    name: "Abhisek Paul",
    image: "http://diu.iiitvadodara.ac.in/img/AP.jpg",
    profile: "http://diu.iiitvadodara.ac.in/pdf/AbhisekPaul.pdf",
    education: "Ph.D. in Computer Science and Engineering",
    institution: "National Institute of Technology (NIT) Agartala",
    interests: "Image Processing, Soft Computing, Vision Computing",
    contact: "abhisek_paul@diu.iiitvadodara.ac.in",
    department: "Computer Science and Engineering"
  },
  {
    name: "Dr. Venkata Phanikrishna B.",
    image: "http://diu.iiitvadodara.ac.in/img/BVPK.jpg",
    profile: "http://diu.iiitvadodara.ac.in/pdf/BVPK_CV.pdf",
    education: "Ph.D. in Computer Science and Engineering",
    thesis: "Study of Single Channel EEG Signal Analysis for Drowsiness Detection using Machine Learning",
    institution: "National Institute of Technology (NIT) Rourkela",
    interests: "Machine Learning, Bio-signal (EEG) analysis, Algorithms, Pattern Recognition",
    contact: "venkata_phanikrishna@diu.iiitvadodara.ac.in",
    department: "Computer Science and Engineering"
  },
  {
    name: "Jignesh Patel",
    image: "http://diu.iiitvadodara.ac.in/img/Jignesh_Patel.jpg",
    profile: "https://jignnesh.github.io/",
    education: "Ph.D. (Information and Communication Technology)",
    institution: "DA-IICT, Gandhinagar India",
    interests: "Remote Sensing, Machine Learning",
    contact: "jignesh_patel@diu.iiitvadodara.ac.in",
    department: "Electronics & Communication Engineering"
  },
  {
    name: "Varun Kumar",
    image: "http://diu.iiitvadodara.ac.in/img/Varun_Kumar.jpg",
    profile: "http://diu.iiitvadodara.ac.in/pdf/vok001.pdf",
    education: "Ph.D. (Wireless Communication)",
    institution: "NIT, Rourkela",
    interests: "Wireless Communication, Machine Learning, Signal Processing",
    contact: "varun_kumar@diu.iiitvadodara.ac.in",
    department: "Electronics & Communication Engineering"
  },
  {
    name: "Vikas Kumar",
    image: "http://diu.iiitvadodara.ac.in/img/vikas_kumar.jpg",
    profile: "http://diu.iiitvadodara.ac.in/faculty-profile/vk001.php",
    education: "Ph.D. (Science, Society and Development)",
    institution: "Central University of Gujarat",
    interests: "Science, Technology and Society",
    contact: "vikas_kumar@diu.iiitvadodara.ac.in",
    department: "Humanities"
  },
  {
    name: "Ashish Phophalia",
    image: "http://iiitvadodara.ac.in/img/ashish_phophalia.jpg",
    profile: "https://iiitvadodara.ac.in/ashish_phophalia.php",
    education: "Ph.D. (Information and Communication Technology)",
    institution: "DA-IICT",
    interests: "Image Processing, Pattern Recognition, Medical Image Analysis",
    contact: "ashish_p@iiitvadodara.ac.in",
    department: "Faculties Associated from IIIT Vadodara"
  },
  {
    name: "Barnali Chetia",
    image: "http://iiitvadodara.ac.in/img/barnali.jpg",
    profile: "https://iiitvadodara.ac.in/barnali_chetia.php",
    education: "Ph.D. (Linguistics)",
    institution: "JNU New Delhi",
    interests: "Applied Linguistics, Sociolinguistics, Discourse Analysis, Gender Studies, Technical Communication",
    contact: "barnali@iiitvadodara.ac.in",
    department: "Faculties Associated from IIIT Vadodara"
  }
];

const Faculty = () => {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  // Group faculty by department
  const facultyByDepartment = facultyData.reduce((acc, faculty) => {
    if (!acc[faculty.department]) {
      acc[faculty.department] = [];
    }
    acc[faculty.department].push(faculty);
    return acc;
  }, {});

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
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
      <h1 className="text-3xl font-bold text-[#800000] mb-8">Faculty</h1>
      
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10" 
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-8 w-8"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.name}-${id}`} className="relative">
                <Image
                  priority
                  width={600}
                  height={300}
                  src={active.image}
                  alt={active.name}
                  className="w-full h-60 sm:h-80 object-contain sm:rounded-tr-lg sm:rounded-tl-lg bg-gray-100"
                />
              </motion.div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`}
                      className="text-2xl font-bold text-[#800000]"
                    >
                      {active.name}
                    </motion.h3>
                    
                    <motion.p
                      layoutId={`department-${active.name}-${id}`}
                      className="text-gray-600 font-medium"
                    >
                      {active.department}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.name}-${id}`}
                    href={active.profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-full font-bold bg-[#800000] text-white hover:bg-[#600000] transition-colors"
                  >
                    View Profile
                  </motion.a>
                </div>
                
                <div className="space-y-3 text-sm md:text-base">
                  <div>
                    <span className="font-semibold">Education: </span>
                    {active.education}
                  </div>
                  
                  {active.thesis && (
                    <div>
                      <span className="font-semibold">Thesis: </span>
                      {active.thesis}
                    </div>
                  )}
                  
                  <div>
                    <span className="font-semibold">Institution: </span>
                    {active.institution}
                  </div>
                  
                  <div>
                    <span className="font-semibold">Areas of Interest: </span>
                    {active.interests}
                  </div>
                  
                  <div>
                    <span className="font-semibold">Contact: </span>
                    <a href={`mailto:${active.contact}`} className="text-blue-600 hover:underline">
                      {active.contact}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      
      {Object.entries(facultyByDepartment).map(([department, facultyList]) => (
        <div key={department} className="mb-12">
          <h2 className="text-2xl font-semibold text-[#800000] mb-6 border-b-2 border-gray-200 pb-2">
            {department}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyList.map((faculty) => (
              <motion.div
                layoutId={`card-${faculty.name}-${id}`}
                key={`card-${faculty.name}-${id}`}
                onClick={() => setActive(faculty)}
                className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="p-4">
                  <div className="flex flex-col items-center">
                    <motion.div 
                      layoutId={`image-${faculty.name}-${id}`}
                      className="relative mb-4"
                    >
                      <Image
                        width={120}
                        height={120}
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-32 h-32 rounded-full object-cover object-top bg-gray-100"
                      />
                    </motion.div>
                    
                    <div className="text-center">
                      <motion.h3
                        layoutId={`title-${faculty.name}-${id}`}
                        className="text-lg font-semibold text-[#800000]"
                      >
                        {faculty.name}
                      </motion.h3>
                      
                      <motion.p
                        layoutId={`department-${faculty.name}-${id}`}
                        className="text-sm text-gray-600 mb-3"
                      >
                        {faculty.education}
                      </motion.p>
                      
                      <motion.button
                        layoutId={`button-${faculty.name}-${id}`}
                        className="px-4 py-2 text-sm rounded-full font-medium bg-gray-100 hover:bg-[#800000] hover:text-white transition-colors"
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
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
      className="h-5 w-5 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

export default Faculty;