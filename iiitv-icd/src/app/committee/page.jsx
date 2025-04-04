"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const committeeMembers = [
  {
    role: "Presiding Officer",
    name: "Dr. Deepika Gupta",
    designation: "Assistant Professor",
    email: "deepika_gupta@diu.iiitvadodara.ac.in"
  },
  {
    role: "Member",
    name: "Dr. Varun Kumar",
    designation: "",
    email: "varun_kumar@diu.iiitvadodara.ac.in"
  },
  {
    role: "Member",
    name: "Ms. Prita Jha",
    designation: "Founder and President, Peace and Equality Cell(PEC)",
    email: "",
    note: "Members from amongst non-governmental Organizations"
  },
  {
    role: "Member",
    name: "Ms. Nitu Singh Bhaduria",
    designation: "Institute Counsellor",
    email: "counselor@iiitvadodara.ac.in"
  },
  {
    role: "Member",
    name: "Dr. Gaurav Pareek",
    designation: "Assistant Professor, PIC Students Affairs",
    email: "gaurav_pareek@diu.iiitvadodara.ac.in"
  },
  {
    role: "Member",
    name: "Dr. Vikas Kumar",
    designation: "Assistant Professor",
    email: "vikas_kumar@diu.iiitvadodara.ac.in"
  }
];

const responsibilities = [
  {
    title: "Prevention",
    description: "Creating awareness about sexual harassment through workshops, seminars, and educational materials to prevent incidents before they occur."
  },
  {
    title: "Protection",
    description: "Ensuring a safe and secure environment for all members of the institute community, particularly women, through vigilant monitoring and responsive protocols."
  },
  {
    title: "Redressal",
    description: "Addressing complaints of sexual harassment promptly and fairly, while maintaining confidentiality and sensitivity throughout the process."
  }
];

const Committee = () => {
  const [activeTab, setActiveTab] = useState('members');

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="bg-gradient-to-r from-red-900 to-red-700 text-white p-8">
          <h1 className="text-4xl font-bold mb-4 text-center">Internal Complaints Committee</h1>
          <p className="text-lg text-center opacity-90">
            IIIT Vadodara - International Campus Diu
          </p>
        </div>
        
        <div className="p-8">
          {/* Introduction Card */}
          <div className="mb-12 bg-white rounded-lg shadow-md p-6 border-l-4 border-red-800 transform transition-all duration-300 hover:scale-102 hover:shadow-lg">
            <p className="text-gray-700 text-lg">
              The Internal Complaints Committee of IIIT Vadodara - International Campus Diu was constituted in accordance with the{' '}
              <a 
                href="/pdf/Sexual-Harassment-at-Workplace-Act.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-800 font-semibold hover:underline transition-colors duration-300"
              >
                Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013.
              </a>
            </p>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button 
              className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${activeTab === 'members' ? 'text-red-800 border-b-2 border-red-800' : 'text-gray-500 hover:text-red-700'}`}
              onClick={() => setActiveTab('members')}
            >
              Committee Members
            </button>
            <button 
              className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${activeTab === 'responsibilities' ? 'text-red-800 border-b-2 border-red-800' : 'text-gray-500 hover:text-red-700'}`}
              onClick={() => setActiveTab('responsibilities')}
            >
              Responsibilities
            </button>
            <button 
              className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${activeTab === 'process' ? 'text-red-800 border-b-2 border-red-800' : 'text-gray-500 hover:text-red-700'}`}
              onClick={() => setActiveTab('process')}
            >
              Grievance Process
            </button>
          </div>
          
          {/* Committee Members Tab */}
          <div className={`transition-opacity duration-500 ${activeTab === 'members' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <div className="mb-12 overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-6 py-4 text-left text-lg font-medium text-red-800">Role</th>
                    <th className="border border-gray-200 px-6 py-4 text-left text-lg font-medium text-red-800">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {committeeMembers.map((member, index) => (
                    <tr 
                      key={index} 
                      className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} transition-colors duration-300 hover:bg-red-50`}
                    >
                      <td className="border border-gray-200 px-6 py-4">
                        <h3 className="font-semibold">{member.role}</h3>
                      </td>
                      <td className="border border-gray-200 px-6 py-4">
                        <p className="font-bold text-red-800">{member.name}</p>
                        {member.designation && <p className="text-gray-700">{member.designation}</p>}
                        {member.note && <p className="text-gray-700 italic">{member.note}</p>}
                        {member.email && (
                          <p className="text-gray-700">
                            Email:{' '}
                            <a 
                              href={`mailto:${member.email}`} 
                              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                            >
                              {member.email}
                            </a>
                          </p>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Responsibilities Tab */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#800000] mb-4">The committee is committed to address the following:</h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 text-justify">
                Prevention, prohibition and redressal of sexual harassment of women -- faculty, staff students, regardless of the duration and nature of association with the Institute.
              </p>
              
              <p className="text-gray-700 text-justify">
                Organization of gender sensitization programmes and other measures for campus residents to ensure knowledge and awareness of rights, entitlements and responsibilities spelled out in the Sexual Harassment Act, 2013.
              </p>
              
              <p className="text-gray-700 text-justify">
                We advise you to read the Act carefully to identify sexual harassment and also keep the following in mind as signals of the same: Attempts to influence/intimidate by linking professional advancement with sexual favors, or creating a hostile work environment through (for instance) sexually colored conversations, letters, telephone calls and text messages, or making demeaning comments about women's roles in society are all cases of sexual harassment.
              </p>
            </div>
          </div>

          
          {/* Grievance Redressal Process Tab */}
          <div className={`transition-opacity duration-500 ${activeTab === 'process' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-red-800 mb-4">Grievance Redressal Process</h2>
              <p className="text-gray-700 mb-6 text-lg">
                If you have experienced or witnessed sexual harassment at the institute, you can file a complaint with the Internal Complaints Committee. The process is confidential and designed to provide fair and timely resolution.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-800 text-white flex items-center justify-center mt-0.5 text-lg font-bold transition-all duration-300 group-hover:bg-red-700 group-hover:scale-110">
                    <span>1</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800 text-lg">
                      <span className="font-semibold">Submit a written complaint</span> to the Presiding Officer of the Internal Complaints Committee.
                    </p>
                    <p className="text-gray-600 mt-2">
                      The complaint should include details of the incident(s), date, time, location, and any witnesses if available.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-800 text-white flex items-center justify-center mt-0.5 text-lg font-bold transition-all duration-300 group-hover:bg-red-700 group-hover:scale-110">
                    <span>2</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800 text-lg">
                      <span className="font-semibold">The committee will investigate</span> the complaint in a fair and timely manner.
                    </p>
                    <p className="text-gray-600 mt-2">
                      Both parties will be given an opportunity to present their case. The committee ensures confidentiality throughout the process.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-800 text-white flex items-center justify-center mt-0.5 text-lg font-bold transition-all duration-300 group-hover:bg-red-700 group-hover:scale-110">
                    <span>3</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800 text-lg">
                      <span className="font-semibold">Appropriate action will be taken</span> based on the findings of the investigation.
                    </p>
                    <p className="text-gray-600 mt-2">
                      The committee will recommend appropriate action to the institute authorities for implementation.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Contact Card */}
              <div className="mt-8 bg-red-50 p-6 rounded-lg border-l-4 border-red-800 shadow-sm">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Need Help or Have Questions?</h3>
                <p className="text-gray-700 mb-4">
                  You can reach out to the Presiding Officer directly for guidance or assistance regarding complaints or the process.
                </p>
                <div className="flex items-center">
                  <div className="bg-red-800 text-white p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a 
                    href="mailto:deepika_gupta@diu.iiitvadodara.ac.in" 
                    className="text-red-800 hover:underline transition-colors duration-300"
                  >
                    deepika_gupta@diu.iiitvadodara.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-100 p-4 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} IIIT Vadodara - International Campus Diu. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Committee;