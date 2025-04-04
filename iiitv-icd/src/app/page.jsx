"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from '@/components/Carousel';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { HoverEffect } from '@/components/ui/card-hover-effect';

// Carousel images data
const carouselImages = [
  "http://diu.iiitvadodara.ac.in/img/isepsem.jpg",
  "http://diu.iiitvadodara.ac.in/img/isep.jpg",
  "http://diu.iiitvadodara.ac.in/img/mou0&0.jpg",
  "http://diu.iiitvadodara.ac.in/img/76th_Repbulic_Day.jpg",
  "http://diu.iiitvadodara.ac.in/img/whtmou.jpg",
  "http://diu.iiitvadodara.ac.in/img/20250111_094613.jpg",
  "http://diu.iiitvadodara.ac.in/img/6thconvo.jpg",
  "http://diu.iiitvadodara.ac.in/img/aeoiyt.jpg",
  "http://diu.iiitvadodara.ac.in/img/rscbhvngr.jpg",
  "http://diu.iiitvadodara.ac.in/img/MoURdk.jpeg",
  "http://diu.iiitvadodara.ac.in/img/MoU.jpg",
  "http://diu.iiitvadodara.ac.in/img/1727076944185.png",
  "http://diu.iiitvadodara.ac.in/img/p1.png",
  "http://diu.iiitvadodara.ac.in/img/p2.png"
];

// Updated announcements data with description
const announcements = [
  {
    id: 1,
    title: "Faculty Recruitment",
    description: "ADVERTISMENT NUMBER: IIITV/ESTT/RECT/FACULTY/24-25/01 DATED 09 DEC 2024: Update",
    link: "https://drive.google.com/file/d/1tTjZ5bQhHuOmBjxM8iaoVXNt3SqlI7Mt/view",
    isNew: true,
    color: "blue"
  },
  {
    id: 2,
    title: "Corrigendum - I",
    description: "Institute's EOI enquiry for 'Empanelment of vendors to provide student hostel accommodation' for Diu Campus(22.March.2025)",
    link: "http://diu.iiitvadodara.ac.in/pdf/IIITV - ICD _Hostel EOI_Corrigendum_I_22325.pdf",
    isNew: true,
    color: "red"
  },
  {
    id: 3,
    title: "Admissions Open",
    description: "MTech and PhD programs are now accepting applications",
    link: "#",
    isNew: true,
    color: "blue",
    links: [
      { text: "MTech", url: "https://iiitvadodara.ac.in/mtech_admissions.php" },
      { text: "PhD", url: "https://iiitvadodara.ac.in/phd_admissions.php" }
    ]
  },
  {
    id: 4,
    title: "New Programs",
    description: "BTech-AI, BTech-ECE, MCA, BSc online programs launched",
    link: "mca.php",
    isNew: true,
    color: "red"
  },
  {
    id: 5,
    title: "Faculty Positions",
    description: "Advertisement for Faculty Positions (Dec 2024)",
    link: "https://iiitvadodara.ac.in/faculty_positions.php",
    color: "blue"
  },
  {
    id: 6,
    title: "Anti Ragging Form",
    description: "Anti Ragging Form for 2023-24 admission",
    link: "https://antiragging.in/affidavit_affiliated_form.php",
    color: "red"
  },
  {
    id: 7,
    title: "Visiting Faculty",
    description: "Advertisement for Empanelment of Visiting Faculty for Academic Year 2023-24",
    link: "http://diu.iiitvadodara.ac.in/FacultyRecu.php",
    color: "blue"
  }
];

// Events data
const events = [
  {
    date: "06 Feb 2025",
    title: "Centre of Excellence and PHN LAB Inauguration",
    link: "http://diu.iiitvadodara.ac.in/img/phn.JPG"
  },
  {
    date: "05 Feb 2025",
    title: "Expert Talk on India's Space Exploration Programme Chandrayan-3 and Beyond",
    link: "http://diu.iiitvadodara.ac.in/img/isep.jpg"
  },
  {
    date: "05 Feb 2025",
    title: "Mou signing ceremony between SAC ISRO and IIITV",
    link: "http://diu.iiitvadodara.ac.in/img/isepsem.jpg"
  },
  {
    date: "22 Sept 2024",
    title: "Hon'ble Vice President of India Visit at Diu and Education Hub Diu",
    link: "http://diu.iiitvadodara.ac.in/img/1727076944185.png"
  },
  {
    date: "24 Aug 2024",
    title: "8th Prof. Vijaya Agarwala Memorial National Workshop on Microwave Absorbing Materials (VAMMAM - 2024) Thrust Area \"Role of AI for Stealth",
    link: "https://drive.google.com/file/d/1-qFrGa5r7EPSYnVlScVdEXENspo8Nxum/view"
  }
];

// News data
const news = [
  {
    text: "6th Convocation of IIIT Vadodara 17.Dec.2024",
    link: "https://sites.google.com/iiitvadodara.ac.in/copyofiiitv2web/home?authuser=0"
  },
  {
    text: "The Sports Festival of IIITV-ICD \"OLYMPUS\" 08.Nov.2024",
    link: "http://diu.iiitvadodara.ac.in/img/s22024.png"
  },
  {
    text: "Ph.D. Admissions(Full-Time / Part-Time) 24.Oct.2024",
    link: "https://pgadmissions.iiitvadodara.ac.in/"
  },
  {
    text: "IIIT Vadodara International Campus at Diu. 09.Oct.2020",
    link: "http://diu.iiitvadodara.ac.in/img/INDEX_DIU1.jpeg"
  }
];

export default function Home() {
  return (
    <div className="wrapper">
      {/* Image Carousel */}
      <div className="w-full bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="my-4">
            <Carousel 
              images={carouselImages} 
              autoplay={true} 
              autoplayDelay={2500} 
              options={{ loop: true }}
            />
          </div>
        </div>
      </div>

      {/* Updated Announcements Section with HoverEffect */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#800000] to-[#5d0000] text-white p-6">
              <h2 className="text-2xl font-bold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-1.872-8.098A18.182 18.182 0 0111 5.882z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                Announcements
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className={`p-4 rounded-lg transition-all duration-300 hover:shadow-md ${
                      announcement.isNew ? 'bg-gray-50 border-l-4 border-[#800000]' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{announcement.title}</h3>
                        <p className="text-gray-600">{announcement.description}</p>
                      </div>
                      {announcement.isNew && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#800000] text-white">
                          New
                        </span>
                      )}
                    </div>
                    {announcement.link && (
                      <a
                        href={announcement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center text-[#800000] hover:text-[#5d0000] font-medium"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Widgets Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Events section remains the same */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-[#800000] text-white p-3">
              <h2 className="text-xl font-semibold">Events</h2>
            </div>
            <div className="p-4">
              <Timeline
                sx={{
                  [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                  },
                  '& .MuiTimelineItem-root': {
                    minHeight: '80px',
                  },
                  '& .MuiTimelineContent-root': {
                    py: 2,
                  },
                }}
              >
                {events.map((event, index) => (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent color="textSecondary" className="text-sm">
                      {event.date}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                      {index < events.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Link 
                        href={event.link} 
                        className="text-gray-800 hover:text-[#800000] hover:underline block"
                      >
                        {event.title}
                      </Link>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          </div>

          {/* News section remains the same */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-[#800000] text-white p-3">
              <h2 className="text-xl font-semibold">News</h2>
            </div>
            <div className="p-4">
              <ul className="divide-y divide-gray-200">
                {news.map((item, index) => (
                  <li key={index} className="py-3">
                    <Link 
                      href={item.link} 
                      className="text-gray-800 hover:text-[#800000] hover:underline block"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Website Counter */}
      <div className="text-center text-gray-500 text-sm mt-4 mb-8">
        <span>Visitors: </span>
        <span className="inline-block border border-gray-300 px-1">00000</span>
      </div>

      {/* Shadow Line Separator */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-md"></div>
    </div>
  );
}
