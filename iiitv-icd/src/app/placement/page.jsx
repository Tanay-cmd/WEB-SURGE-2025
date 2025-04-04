"use client";

import React from 'react';
import Link from 'next/link';
import { MaskContainer } from '@/components/ui/svg-mask-effect';

export default function Placement() {
  return (
    <div className="wrapper">
      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="bg-red-200 shadow-lg rounded-lg overflow-hidden">
          

          {/* Content Section */}
          <div className=" px-10">
            <MaskContainer
              revealText={
                <h1 className="text-4xl font-bold text-[#090909] ">
                  Placement <span className="text-blue-600">Loading</span>...
                </h1>
              }
            >
              <h1 className="text-4xl font-bold text-white ">
                Placement <span className="text-blue-600" >Searching</span>
              </h1>
            </MaskContainer>
            <div className="prose max-w-none">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
