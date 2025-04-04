"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const hostelImages = [
  "/img/hostel_n1.jpeg",
  "/img/hostel_n4.jpeg",
  "/img/hostel_n9.jpg",
  "/img/hostel_n8.jpg",
  "/img/hostel_n7.jpg",
  "/img/hostel_n10.jpg",
  "/img/hostel_n11.jpg",
  "/img/hostel_n12.jpg",
  "/img/host11.jpeg",
  "/img/host12.jpeg",
  "/img/host13.jpeg",
  "/img/host14.jpeg",
];

const hostelAmenities = [
  {
    icon: "🛏️",
    title: "Hostel Room",
    description: "Semi-furnished. Each student is provided with a Cot, Cupboard, Study-Table and Chair"
  },
  {
    icon: "💧",
    title: "R-O Plant with Water Cooler",
    description: "Clean and purified drinking water available for students"
  },
  {
    icon: "📶",
    title: "Internet/Wi-Fi",
    description: "High-speed internet connection throughout the hostel"
  },
  {
    icon: "📺",
    title: "Television with DTH Connection",
    description: "Entertainment facilities in common areas"
  },
  {
    icon: "🍽️",
    title: "Dining Hall",
    description: "Spacious dining area with quality food services"
  },
  {
    icon: "💪",
    title: "Gymnasium",
    description: "Separate facilities for Boys & Girls on different floors"
  },
  {
    icon: "🏓",
    title: "Sports",
    description: "Indoor games like Table-Tennis, Carom Board, Chess"
  },
  {
    icon: "🎸",
    title: "Musical Instruments",
    description: "Drum, Congo, Electric Guitar, Flute, Synthesizers, Tabla, Violin and Harmonium"
  },
  {
    icon: "🔒",
    title: "Security",
    description: "Round the clock security services"
  },
  {
    icon: "🧹",
    title: "Housekeeping",
    description: "Regular cleaning and maintenance"
  }
];

const Hostel = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  // Effect to trigger the text animation after component mounts
  useEffect(() => {
    // Short delay before starting the animation for better user experience
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const openModal = (index) => {
    setSelectedImage(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % hostelImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + hostelImages.length) % hostelImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Text Animation */}
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/80 to-[#800000]/60 z-10"></div>
        <Image 
          src={`http://diu.iiitvadodara.ac.in${hostelImages[0]}`}
          alt="Hostel Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
            <h1 
              className={`text-4xl md:text-5xl font-bold text-white mb-4 transform transition-all duration-1000 ease-out ${
                textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Hostel Facilities
            </h1>
            <p 
              className={`text-lg md:text-xl text-white/90 max-w-2xl mx-auto transform transition-all duration-1000 ease-out delay-300 ${
                textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              A comfortable living environment conducive to academic pursuits and balanced lifestyle
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            IIIT Vadodara-International Campus Diu provides excellent hostel facilities for both boys and girls. 
            The campus hostels are designed to offer a comfortable living environment that is conducive to academic 
            pursuits while ensuring a balanced lifestyle for students.
          </p>
        </div>
        
        {/* Image Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#800000] mb-8 text-center">
            <span className="inline-block border-b-4 border-[#800000] pb-2">Hostel Gallery</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {hostelImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative h-64 overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                onClick={() => openModal(index)}
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
                <Image 
                  src={`http://diu.iiitvadodara.ac.in${image}`}
                  alt={`Hostel Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <p className="text-white text-sm font-medium">Click to view</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Hostel Amenities */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#800000] mb-8 text-center">
            <span className="inline-block border-b-4 border-[#800000] pb-2">Hostel Amenities</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostelAmenities.map((amenity, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#800000]"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{amenity.icon}</span>
                  <h3 className="text-xl font-semibold text-[#800000]">{amenity.title}</h3>
                </div>
                <p className="text-gray-700">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Hostel Rules and Guidelines */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#800000] mb-8 text-center">
            <span className="inline-block border-b-4 border-[#800000] pb-2">Rules and Guidelines</span>
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-700 mb-6 text-lg">
              All students residing in the hostels are expected to follow the rules and regulations to ensure a harmonious and disciplined environment. Some of the general guidelines include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#800000]">
                <p className="font-medium text-gray-800">Discipline & Decorum</p>
                <p className="text-gray-700 text-sm mt-1">Students must maintain discipline and decorum in the hostel premises</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#800000]">
                <p className="font-medium text-gray-800">Anti-Ragging</p>
                <p className="text-gray-700 text-sm mt-1">Ragging in any form is strictly prohibited</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#800000]">
                <p className="font-medium text-gray-800">Timing Compliance</p>
                <p className="text-gray-700 text-sm mt-1">Students must adhere to the hostel timings</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#800000]">
                <p className="font-medium text-gray-800">Visitor Policy</p>
                <p className="text-gray-700 text-sm mt-1">Visitors are allowed only in designated areas during specified hours</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#800000]">
                <p className="font-medium text-gray-800">Property Responsibility</p>
                <p className="text-gray-700 text-sm mt-1">Students are responsible for the safety of their belongings</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#800000]">
                <p className="font-medium text-gray-800">Property Damage</p>
                <p className="text-gray-700 text-sm mt-1">Damage to hostel property will result in appropriate fines</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#800000]">
                <p className="font-medium text-gray-800">Electrical Appliances</p>
                <p className="text-gray-700 text-sm mt-1">Use of electrical appliances requires prior permission</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#800000]">
                <p className="font-medium text-gray-800">Cleanliness</p>
                <p className="text-gray-700 text-sm mt-1">Students should maintain cleanliness in their rooms and common areas</p>
              </div>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                For detailed hostel rules and regulations, please refer to the Hostel Manual available at the hostel office.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-white bg-[#800000] rounded-full p-2 hover:bg-red-700 transition-colors z-50"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Previous button */}
            <button 
              className="absolute left-4 transform -translate-y-1/2 top-1/2 text-white bg-[#800000]/80 rounded-full p-2 hover:bg-[#800000] transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Next button */}
            <button 
              className="absolute right-4 transform -translate-y-1/2 top-1/2 text-white bg-[#800000]/80 rounded-full p-2 hover:bg-[#800000] transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image */}
            <div className="relative w-full h-[80vh] overflow-hidden rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
              <Image 
                src={`http://diu.iiitvadodara.ac.in${hostelImages[selectedImage]}`}
                alt={`Hostel Image ${selectedImage + 1}`}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent py-4 px-6">
                <p className="text-white text-lg">Photo {selectedImage + 1} of {hostelImages.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
     
    </div>
  );
};

export default Hostel;