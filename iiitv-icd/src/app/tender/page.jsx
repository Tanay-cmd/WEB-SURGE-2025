import React from 'react';
import Image from 'next/image';

const tenderNotices = [
  {
    title: "Corrigendum - I to the Institute's EOI enquiry for 'Empanelment of vendors to provide student hostel accommodation' for Diu Campus.",
    link: "http://diu.iiitvadodara.ac.in/pdf/IIITV - ICD _Hostel EOI_Corrigendum_I_22325.pdf",
    isNew: true
  },
  {
    title: "'Addendum - I for  'Expression of Interest (EOI) documents for 'Empanelment of vendors to provide a student hostel accommodation located within 25 kms from the institute's Diu campus' vide EOI No. IIITV/PUR/EOI/EMPANELMENT/STUDENT HOSTEL/DIU/24-25/07 dated 03 March 2025)'",
    link: "http://diu.iiitvadodara.ac.in/pdf/IIITV-ICD_hostel2.pdf",
    isNew: true
  },
  {
    title: "Tender enquiry for 'Expression of Interest (EOI) for Empanelment of Vendors to provide Student hostel accommodation for Diu Campus'.",
    link: "http://diu.iiitvadodara.ac.in/pdf/IIITV-ICD_Hostel.pdf",
    isNew: true
  },
  {
    title: "Corrigendum - I for 'Providing Student Mess Services to the Institute's' DIU campus (IIIT Vadodara – International Campus DIU (IIITV-ICD), Education Hub, Kevdi - DIU (U.T) -362520)' vide Tender No. IIITV/PUR/TENDER/STUDENT MESS/DIU CAMPUS/24-25/01 dated 08 May 2024.",
    link: "http://diu.iiitvadodara.ac.in/pdf/Corrigendum_I_Mess_Tender_Diu Campus.pdf",
    isNew: true
  },
  {
    title: "TENDER ENQUIRY FOR PROVIDING STUDENT MESS SERVICES TO THE INSTITUTE'S DIU CAMPUS (IIIT VADODARA - INTERNATIONAL CAMPUS DIU (IIITV-ICD), EDUCATION HUB, KEVDI - DIU (U.T.) - 362520)",
    link: "http://diu.iiitvadodara.ac.in/pdf/IIITVICD08052024-Mess Tender.pdf",
    isNew: true
  }
];

const Tender = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#800000] mb-8">Tenders</h1>
          
          <div className="mb-8">
            <p className="text-gray-700">
              IIIT Vadodara-International Campus Diu publishes tenders for various services and requirements. 
              Below is the list of current tender notices. Please click on the links to access the detailed documents.
            </p>
          </div>
          
          <div className="space-y-4">
            {tenderNotices.map((tender, index) => (
              <div 
                key={index}
                className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition duration-200"
              >
                <div className="flex">
                  <div className="flex-grow">
                    <a 
                      href={tender.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {tender.title}
                    </a>
                    
                    {tender.isNew && (
                      <span className="ml-2 inline-flex items-center">
                        <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                          NEW
                        </span>
                      </span>
                    )}
                  </div>
                  
                  <div className="flex-shrink-0 ml-4">
                    <div className="flex space-x-2">
                      <a 
                        href={tender.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                      >
                        View
                      </a>
                      
                      <a 
                        href={tender.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700 transition duration-200"
                        download
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-4 bg-gray-50 rounded-md">
            <h2 className="text-xl font-semibold text-[#800000] mb-4">Tender Archives</h2>
            <p className="text-gray-700 mb-4">
              To access previous tender notices and archived documents, please visit our archives section.
            </p>
            <a 
              href="http://diu.iiitvadodara.ac.in/Archive.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#800000] text-white rounded hover:bg-[#600000] transition duration-200 inline-block"
            >
              View Archives
            </a>
          </div>
          
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-[#800000] mb-4">Contact for Tender Enquiries</h3>
            <p className="text-gray-700">
              For any queries related to tenders, please contact the Administrative Office at:
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Email:</strong> administration@diu.iiitvadodara.ac.in
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +91 79905 73335
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tender;