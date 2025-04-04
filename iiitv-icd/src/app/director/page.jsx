import React from 'react';
import Image from 'next/image';
import { GlareCard } from '@/components/ui/glare-card';

const Director = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#800000] mb-8">Director's Profile</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Director's Image and Info */}
            <div className="flex flex-col items-center">
              <div className="w-[320px] aspect-[17/21]">
                <GlareCard>
                  <div className="relative w-full h-full">
                    <Image 
                      src="http://diu.iiitvadodara.ac.in/img/Prof_Dharmendra_Singh_1.png"
                      alt="Prof. Dharmendra Singh" 
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                </GlareCard>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold text-blue-600">Prof. Dharmendra Singh</h2>
                <p className="text-gray-600">Director</p>
              </div>
            </div>
            
            {/* Director's Message */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-[#800000] mb-4">Director's Message</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  <strong>Welcome to IIIT Vadodara, where innovation meets excellence.</strong>
                </p>
                
                <p className="mb-4">
                  It is my privilege to lead this prestigious institution committed to academic excellence and innovation in the field of Information Technology. IIIT Vadodara-International Campus Diu is dedicated to nurturing talented minds and preparing them for the challenges of tomorrow's technological landscape.
                </p>
                
                <p className="mb-4">
                  Our institute focuses on providing a comprehensive education that balances theoretical knowledge with practical skills, ensuring our students are well-equipped to make significant contributions to the IT industry and society at large. We have a distinguished faculty team comprising experts from various domains who are dedicated to guiding students through their academic journey.
                </p>
                
                <p className="mb-4">
                  At IIIT Vadodara-ICD, we place a strong emphasis on research and innovation. Our state-of-the-art infrastructure and collaborative environment facilitate cutting-edge research in areas such as artificial intelligence, machine learning, data science, cybersecurity, and more. We encourage our students and faculty to explore new horizons and contribute to the advancement of technology.
                </p>
                
                <p className="mb-4">
                  We are committed to fostering an inclusive and diverse campus community where every individual has the opportunity to thrive. Our holistic approach to education extends beyond academics, encompassing personality development, ethical values, and social responsibility.
                </p>
                
                <p className="mb-4">
                  I invite you to explore our website and learn more about the exciting opportunities that await you at IIIT Vadodara-International Campus Diu. Whether you are a prospective student, a parent, a researcher, or an industry partner, we welcome you to connect with us and be a part of our journey towards excellence.
                </p>
                
                <p className="font-semibold">
                  Prof. Dharmendra Singh<br />
                  Director, IIIT Vadodara-International Campus Diu
                </p>
              </div>
            </div>
          </div>
          
          {/* Additional Director's Information */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-[#800000] mb-4">Profile</h2>
            
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="mb-4">
                Prof. Dharmendra Singh is a distinguished academician with extensive experience in the field of Information Technology and Computer Science. He has made significant contributions to research in his domain and has published numerous papers in reputed international journals.
              </p>
              
              <h3 className="text-xl font-medium text-[#800000] mb-2 mt-6">Education</h3>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Ph.D. in Computer Science</li>
                <li>M.Tech in Information Technology</li>
                <li>B.Tech in Computer Science and Engineering</li>
              </ul>
              
              <h3 className="text-xl font-medium text-[#800000] mb-2 mt-6">Research Interests</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Artificial Intelligence and Machine Learning</li>
                <li>Computer Vision and Image Processing</li>
                <li>Data Science and Big Data Analytics</li>
                <li>Cloud Computing and Distributed Systems</li>
                <li>Information Security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Director; 