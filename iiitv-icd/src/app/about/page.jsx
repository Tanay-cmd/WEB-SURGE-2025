import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div className="wrapper">
      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-[#800000] mb-6">About IIIT Vadodara-International Campus Diu</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              Indian Institute of Information Technology Vadodara (IIIT-V) is set up by the Ministry of Education (MoE), Government of India under Public Private Partnership (PPP) model. The partners in this project are Government of India, Government of Gujarat, Gujarat Energy Research and Management Institute, Gujarat State Fertilizers and Chemicals and Tata Consultancy Services.
            </p>
            
            <p className="mb-4">
              The Institute was established in the year 2013. At that time, the first batch of students was mentored at DA-IICT Gandhinagar. DA-IICT hosted IIIT Vadodara students for the first year, and also has supported tremendously for the initial establishment of the Institute. Subsequently, the Institute was operated from its temporary premises at Government Engineering College (Gandhinagar) during AY 2014-15, and AY 2015-16. The Institute operated from Block Number 9 of Government Engineering College Gandhinagar until the new campus at Vadodara is ready. The institute was been functioning from its new campus situated at c/o Block No. 9, Government Engineering College, Sector-28, Gandhinagar.
            </p>
            
            <p className="mb-4">
              In AY-2019-20, MHRD, Govt. of India decided to set up a satellite campus of IIIT Vadodara at Education Hub, Diu (UT). Consequently, a portion of the students from the first batch of IIITV-ICD campus received their education at IIIT Vadodara and the rest of them were taught at Diu campus. In AY 2020-21, both the first year and the second year students have been taught at Diu campus. The campus is surrounded by greenery and is free from pollution and traffic woes. The campus has been developed in a total area of 30 acres of land.
            </p>
            
            <p className="mb-4">
              The Institute aims at addressing the emerging needs and meeting the IT aspirations of the country.
            </p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#800000] mb-4">Vision and Mission</h2>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="text-xl font-medium text-[#800000] mb-2">Vision</h3>
              <p>
                To be a globally recognized institution that provides state-of-the-art education, research, and training in Information Technology and allied fields to produce highly skilled human resources who can contribute towards research, design and development in the field of technology.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-xl font-medium text-[#800000] mb-2">Mission</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>To pursue applied research and education in IT and allied areas.</li>
                <li>To develop human potential to its fullest extent so that intellectually capable and imaginatively gifted leaders can emerge in a range of professions.</li>
                <li>To develop technology-enabled tools for expanding the reach of education nationally.</li>
                <li>To be a think-tank for the industry and government to provide solutions to challenging technological problems.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;