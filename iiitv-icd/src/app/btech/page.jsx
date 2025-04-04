import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const courseStructure = [
  {
    semester: "Semester 1",
    courses: [
      "Introduction to Programming",
      "Digital Logic Design",
      "Mathematics I",
      "Physics",
      "Communication Skills",
      "Introduction to Programming Lab",
      "Digital Logic Design Lab"
    ]
  },
  {
    semester: "Semester 2",
    courses: [
      "Data Structures and Algorithms",
      "Computer Organization",
      "Mathematics II",
      "Electrical Science",
      "Introduction to Engineering Design",
      "Data Structures and Algorithms Lab",
      "Computer Organization Lab"
    ]
  },
  {
    semester: "Semester 3",
    courses: [
      "Operating Systems",
      "Database Management Systems",
      "Discrete Mathematics",
      "Object-Oriented Programming",
      "Principles of Economics",
      "Operating Systems Lab",
      "Database Management Systems Lab",
      "Object-Oriented Programming Lab"
    ]
  },
  {
    semester: "Semester 4",
    courses: [
      "Design and Analysis of Algorithms",
      "Computer Networks",
      "Theory of Computation",
      "Software Engineering",
      "Mathematics III",
      "Design and Analysis of Algorithms Lab",
      "Computer Networks Lab",
      "Software Engineering Lab"
    ]
  }
];

const careerOpportunities = [
  "Software Developer",
  "Systems Analyst",
  "Web Developer",
  "Database Administrator",
  "Network Engineer",
  "Security Analyst",
  "Data Scientist",
  "Machine Learning Engineer",
  "Cloud Computing Specialist",
  "Mobile Application Developer"
];

const BTech = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#800000] mb-6">Bachelor of Technology - Computer Science and Engineering</h1>
          
          {/* Program Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#800000] mb-4">Program Overview</h2>
            <p className="text-gray-700 text-justify mb-4">
              The programme is designed to make a strong foundation in CSE that includes electronics and hardware. Computer science courses are introduced in the early semesters while non-IT courses in the later stages. IT workshops are specially designed courses allowing the students to have mastery in the use of the latest software technologies. The courses in mathematics, sciences, engineering and humanities enable students to explore the wider applications of technology.
            </p>
            <div className="mt-4">
              <a 
                href="http://diu.iiitvadodara.ac.in/pdf/UG_Curriculum_2018.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-red-600 hover:text-red-800 font-semibold flex items-center"
              >
                <span>Approved Curriculum</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Program Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#800000] mb-4">Program Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-lg font-medium text-[#800000] mb-2">Program Duration</h3>
                <p className="text-gray-700">4 Years (8 Semesters)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-lg font-medium text-[#800000] mb-2">Eligibility</h3>
                <p className="text-gray-700">Admission through JEE Main</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-lg font-medium text-[#800000] mb-2">Intake Capacity</h3>
                <p className="text-gray-700">120 Seats</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-lg font-medium text-[#800000] mb-2">Degree Awarded</h3>
                <p className="text-gray-700">Bachelor of Technology in Computer Science and Engineering</p>
              </div>
            </div>
          </div>
          
          {/* Course Structure */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#800000] mb-4">Course Structure (First Two Years)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courseStructure.map((semester, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-lg font-medium text-[#800000] mb-2">{semester.semester}</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {semester.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="text-gray-700">{course}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <a 
                href="http://diu.iiitvadodara.ac.in/pdf/UG_Curriculum_2018.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-[#800000] text-white rounded hover:bg-[#600000] transition duration-200 inline-block"
              >
                View Complete Curriculum
              </a>
            </div>
          </div>
          
          {/* Career Opportunities */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#800000] mb-4">Career Opportunities</h2>
            <p className="text-gray-700 mb-4">
              Graduates of the B.Tech program in Computer Science and Engineering have excellent career prospects across various sectors. Some of the career paths include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {careerOpportunities.map((career, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-md text-center">
                  <span className="text-gray-700">{career}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Admission Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#800000] mb-4">Admission Process</h2>
            <p className="text-gray-700 mb-4">
              Admissions to the B.Tech program at IIIT Vadodara-International Campus Diu are made through the Joint Entrance Examination (JEE) Main conducted by the National Testing Agency (NTA). The selection and seat allocation is done by the Joint Seat Allocation Authority (JoSAA).
            </p>
            <div className="mt-4">
              <Link 
                href="/admission" 
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
              >
                <span>More About Admission Process</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTech; 