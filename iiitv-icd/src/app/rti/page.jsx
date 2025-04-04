"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RTI() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#800000] mb-8">RTI Home</h1>
          
          <div className="mb-8">
            <Image 
              src="http://diu.iiitvadodara.ac.in/img/rti_standard_signature_eng_colour-copy.gif" 
              alt="RTI Standard Signature" 
              width={200} 
              height={80}
              className="mb-4"
            />
            <p className="text-gray-700 mb-6">
              Right to Information (RTI) is an Act of the Indian Parliament enforced from the year 2005, to provide for a practical regime for citizens to secure access to information under the control of public authorities. This aims to promote transparency and accountability in the working of every public authority. IIIT Vadodara is covered under this act.
            </p>
          </div>

          <div className="mb-8">
            <Link 
              href="/pdf/Transparency Audit of Disclosures Under Section 4 of the RTI Act by the Public authorities.pdf"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <p className="text-xl text-[#800000] font-serif font-bold">
                Transparency Audit of Disclosures Under Section 4 of the RTI Act by the Public authorities (12 Nov 2018)
              </p>
            </Link>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-[#800000] mb-4">For RTI queries please write to</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-[#800000] mb-2">Public Information Officer (PIO)</h3>
                <p className="font-bold">Dr. Vikas Kumar</p>
                <p><span className="font-bold">Address:</span> IIIT Vadodara - International Campus Diu (IIITV-ICD), Education Hub, Kevdi - Diu (U.T) -362520.</p>
                <p><span className="font-bold">Phone:</span> +91 79905 73335</p>
                <p>
                  <span className="font-bold">E-mail:</span>{' '}
                  <a href="mailto:cpio@diu.iiitvadodara.ac.in" className="text-blue-600 hover:underline">
                    cpio@diu.iiitvadodara.ac.in
                  </a>
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#800000] mb-2">First Appellate Authority</h3>
                <p className="font-bold">Prof. Dharmendra Singh</p>
                <p><span className="font-bold">Address:</span> IIIT Vadodara, Block No.9, Government Engineering College, Sector-28, Gandhinagar-382028.</p>
                <p><span className="font-bold">Phone:</span> +91 (79) 23977501</p>
                <p>
                  <span className="font-bold">E-mail:</span>{' '}
                  <a href="mailto:director@iiitvadodara.ac.in" className="text-blue-600 hover:underline">
                    director@iiitvadodara.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 