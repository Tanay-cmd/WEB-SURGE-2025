"use client";
import React, { useState } from 'react';
import { FAQExpandableCard } from '@/components/faq-expandable-card';
import Link from 'next/link';
import Image from 'next/image';

const faqItems = [
  {
    question: "About Indian Institute of Information Technology Vadodara International Campus Diu",
    answer: (
      <>
        <p className="mb-4">
          <strong>Indian Institute of Information Technology Vadodara International Campus Diu</strong> (IIITV-ICD) is a satellite campus of Indian Institute of Information Technology Vadodara (IIIT Vadodara). IIITV-ICD has been established at Education Hub, Kevdi – Diu under partnership with Government of Dadra & Nagar Haveli and Daman & Diu (UT Administration of DNH & DD).
        </p>
        <p className="mb-4">
          "Educational Hub" spread over 25 acre (1,01,869 sq. m) land. The campus has total Built-up area of 12,908.84 sq.m. It presently houses Government College (B.A., B.Com. and B.Sc. Streams) and a Polytechnic (Diplomas in Mechanical, Electrical, Civil and Marine Engineering; Affiliated to Gujarat Technical University). The Educational Hub has following objectives:
        </p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>To provide quality education with the highest standards.</li>
          <li>A stimulating learning environment.</li>
          <li>State of the art infrastructure.</li>
        </ul>
        <p className="mb-4">
          IIITV-ICD has been accommodated in the state of art campus of Education hub. Complete Infrastructure and Capital equipment for IIITV-ICD has been provided by UT Administration of DNH & DD. IIITV-ICD will function in self-sustainable mode.
        </p>
      </>
    )
  },
  {
    question: "How do I Reach at IIITV-ICD, Diu?",
    answer: (
      <>
        <div className="mb-4">
          <p className="font-medium mb-1">Road:</p>
          <ul className="list-disc pl-8 mb-2 space-y-1">
            <li>Rajkot: 225 kms.</li>
            <li>Ahmedabad: 350 kms.</li>
            <li>Veraval and Somnath: 90 kms.</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-medium mb-1">Flight:</p>
          <ul className="list-disc pl-8 mb-2 space-y-1">
            <li>Mumbai: By Air India, four times a week.</li>
            <li>Ahmedabad, Surat and Daman routes have been approved under UDAN scheme and likely to be operationalised soon.</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-medium mb-1">Train:</p>
          <ul className="list-disc pl-8 mb-2 space-y-1">
            <li>Delwada: 9 kms; meter-gauge.</li>
            <li>Somnath: 90 kms; broad-gauge.</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-medium mb-1">Bus:</p>
          <ul className="list-disc pl-8 mb-2 space-y-1">
            <li>Volvo buses to Ahmedabad, Rajkot, Surat etc.</li>
          </ul>
        </div>
        <p>
          <a href="http://diu.iiitvadodara.ac.in/howtoreach.php" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            For more information
          </a>
        </p>
      </>
    )
  },
  {
    question: "How do I get admission in IIITV-ICD Diu?",
    answer: (
      <p>
        Admissions to B Tech program is through the <a href="http://josaa.nic.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Joint Seat Allocation Authority</a> (JOSSA) constituted by the Government of India. The Institute does not conduct its own entrance examination. The admissions are purely based on the All India Ranking (AIR) announced by the JEE main examination committee (conducted by National Testing agency). Admission is through the centralized counselling process. Reservation as per mandate of GoI applicable to SC, ST, OBC, PH, EWS and others is applicable. The seat matrix provides a breakup of the seats in different categories.
      </p>
    )
  },
  {
    question: "Do you have student accommodation on the campus?",
    answer: (
      <>
        <p className="mb-4">
          Student accommodation is available in campus. Hostel has student capacity of 416 students. There is separate accommodation for girl students.
        </p>
        <p>
          <Link href="/hostel" className="text-blue-600 hover:underline">
            For more information
          </Link>
        </p>
      </>
    )
  },
  {
    question: "What about Placements?",
    answer: (
      <p>
        The institute has started it first batch in academic year 2020-21. The details of placement of IIIT Vadodara can be view <a href="https://sites.google.com/iiitvadodara.ac.in/placement2021/home" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a>.
      </p>
    )
  },
  {
    question: "What were the closing ranks for the last year?",
    answer: (
      <p>
        For details refer CSAB website.
      </p>
    )
  },
  {
    question: "What is the Fees?",
    answer: (
      <p>
        <a href="http://diu.iiitvadodara.ac.in/btech_admission.php" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          B. Tech
        </a>
      </p>
    )
  },
  {
    question: "Will the IIITV-ICD students be getting the same degree on certificate as the ones from IIIT Vadodara?",
    answer: (
      <p>
        The current academic programme at IIITV-ICD campus is B.Tech. Degree will be awarded by IIIT Vadodara.
      </p>
    )
  },
  {
    question: "Is the placement of IIIT Vadodara and IIITV-ICD going to be taken place as a single unit?",
    answer: (
      <p>
        IIITV-ICD is a satellite campus of IIIT Vadodara. The management of both Institutes is same. However, both are independent campus. Also, please note Institute are generally facilitator. It is students' performance which gets them placed.
      </p>
    )
  },
  {
    question: "What does the international part of IIITV-ICD mean?",
    answer: (
      <p>
        The International part in IIITV-ICD means that the Institute in due course will have International NRI students in addition to other students such as from Direct Admission of Students Abroad (DASA) or Study in India (SII). The quantum of international student seats may change as per demand and with the approval of competent authority.
      </p>
    )
  }
];

const FAQ = () => {
  const [openCard, setOpenCard] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#800000] mb-8">Frequently Asked Questions</h1>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQExpandableCard
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openCard === index}
                onToggle={(isOpen) => setOpenCard(isOpen ? index : null)}
              />
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-md">
            <h2 className="text-xl font-semibold text-[#800000] mb-4">Contact Information</h2>
            <p className="text-gray-700">
              <strong>Address:</strong> IIIT Vadodara - International Campus Diu (IIITV-ICD), Education Hub, Kevdi - Diu (U.T) -362520
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="/" className="text-gray-700 hover:text-[#800000]">Home</Link>
              <a href="http://diu.iiitvadodara.ac.in/rti.php" className="text-gray-700 hover:text-[#800000]">RTI</a>
              <a href="http://diu.iiitvadodara.ac.in/pdf/MOU.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#800000]">MOU</a>
              <Link href="/admissions" className="text-gray-700 hover:text-[#800000]">Admission</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;