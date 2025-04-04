"use client";

import React from 'react';
import Image from 'next/image';
import ExpandableCardDemo from '@/components/expandable-card-demo-standard';

const officers = [
  {
    title: "Col Ravi Chugh",
    description: "Registrar of IIIT Vadodara & Nodal Officer of IIITV-ICD",
    src: "http://iiitvadodara.ac.in/img/RCA001.jpg",
    ctaText: "Contact",
    ctaLink: "mailto:nodal_officer@diu.iiitvadodara.ac.in",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="font-semibold text-[#800000]">Registrar of IIIT Vadodara & Nodal Officer of IIITV-ICD</p>
          <div className="space-y-2">
            <p><span className="font-bold">Contact:</span> <a href="mailto:nodal_officer@diu.iiitvadodara.ac.in" className="text-blue-600 hover:underline">nodal_officer@diu.iiitvadodara.ac.in</a></p>
          </div>
        </div>
      );
    }
  },
  {
    title: "Mr. Jigar Shah",
    description: "Assistant Registrar",
    src: "http://iiitvadodara.ac.in/img/jigar_shah.jpg",
    ctaText: "Contact",
    ctaLink: "mailto:jigar_shah@iiitvadodara.ac.in",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="font-semibold text-[#800000]">Assistant Registrar</p>
          <div className="space-y-2">
            <p><span className="font-bold">Contact:</span> <a href="mailto:jigar_shah@iiitvadodara.ac.in" className="text-blue-600 hover:underline">jigar_shah@iiitvadodara.ac.in</a></p>
          </div>
        </div>
      );
    }
  }
];

export default function Officer() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-[#800000] mb-8">Officers</h1>
            <ExpandableCardDemo officers={officers} />
          </div>
        </div>
      </div>
    </div>
  );
}
