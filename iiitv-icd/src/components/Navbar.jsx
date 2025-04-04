"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/eldoraui/plusgrid';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <Disclosure as="header" className="w-full">
      {/* Top bar */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-2 px-4 flex justify-between items-center">
          <div className="pl-8">
            <Link href="https://iiitvadodara.ac.in/index.php" target="_blank" className="text-sm font-semibold text-yellow-600 hover:text-yellow-700">
              Gandhinagar Campus
            </Link>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              <i className="fa fa-map-marker" aria-hidden="true"></i> Location
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              <i className="fa fa-phone" aria-hidden="true"></i> Contact
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              <i className="fa fa-envelope" aria-hidden="true"></i> Email
            </a>
          </div>
        </div>
      </div>

      {/* Logo and name */}
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between items-center">
          <div className="relative flex gap-6 pl-8">
            <PlusGridItem className="py-3">
              <Link href="/">
                <div className="flex items-center">
                  <div className="w-20 h-20 relative mr-4">
                    <Image 
                      src="http://diu.iiitvadodara.ac.in/img/Logo5.png" 
                      alt="IIIT Vadodara Logo" 
                      width={80} 
                      height={80}
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-[#800000]">IIIT Vadodara-International Campus Diu</h1>
                    <p className="text-sm text-gray-600">(Satellite campus of IIIT Vadodara)</p>
                  </div>
                </div>
              </Link>
            </PlusGridItem>
          </div>
          <DisclosureButton
            className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden"
            aria-label="Open main menu"
          >
            <Bars2Icon className="size-6" />
          </DisclosureButton>
        </PlusGridRow>
      </PlusGrid>

      {/* Main navigation using Radix UI NavigationMenu */}
      <div className="bg-[#800000] text-white relative z-40">
        <div className="container mx-auto px-4">
          <div className="nav-container relative">
            <NavigationMenu className="mx-auto max-w-none w-full justify-center" viewport={false}>
              <NavigationMenuList className="flex gap-0 text-white justify-center">
                {/* Institute dropdown */}
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="font-medium text-white bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] rounded-none h-auto py-3 px-4 data-[state=open]:bg-[#5d0000]">
                    Institute
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md border-0 origin-top-center absolute left-1/2 -translate-x-1/2 z-50">
                    <ul className="grid w-[200px] gap-0">
                      <li>
                        <Link href="/about" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            About
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/director" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Director
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="http://iiitvadodara.ac.in/bog.php" target="_blank" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Board of Governors
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://iiitvadodara.ac.in/senate.php" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Senate
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://iiitvadodara.ac.in/finance_committee.php" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Finanace Committee
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/rti" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            RTI
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="http://diu.iiitvadodara.ac.in/pdf/MOU.pdf" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            MOU
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://iiitvadodara.ac.in/rr_policy.php" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Policies
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Academics dropdown */}
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="font-medium text-white bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] rounded-none h-auto py-3 px-4 data-[state=open]:bg-[#5d0000]">
                    Academics
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md border-0 origin-top-center absolute left-1/2 -translate-x-1/2 z-50">
                    <ul className="grid w-[220px] gap-0">
                      <li>
                        <Link href="/btech" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            B.Tech
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Post Graduate (MCA)
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            BSc(online)
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Ordinance
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                              B.Tech. Curriculum(2018) 
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                             Holiday list 2025  
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                              Acadmic Calender 
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                          Time Table
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Admission dropdown */}
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="font-medium text-white bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] rounded-none h-auto py-3 px-4 data-[state=open]:bg-[#5d0000]">
                    Admission
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md border-0 origin-top-center absolute left-1/2 -translate-x-1/2 z-50">
                    <ul className="grid w-[200px] gap-0">
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Btech
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            SII 2024
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            NRI Admissions 2024 b.tech. (CSE)
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            M.Tech. 
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                          MCA
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            PhD
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            BSc (online)
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* People dropdown */}
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger className="font-medium text-white bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] rounded-none h-auto py-3 px-4 data-[state=open]:bg-[#5d0000]">
                    People
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-md rounded-b-md border-0 origin-top-center absolute left-1/2 -translate-x-1/2 z-50">
                    <ul className="grid w-[200px] gap-0">
                      <li>
                        <Link href="/faculty" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Faculty
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/staff" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Staff
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/officer" legacyBehavior passHref>
                          <NavigationMenuLink className="block px-4 py-2 text-[#800000] hover:bg-gray-100">
                            Officer
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Regular menu items */}
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "block px-4 py-3 font-medium bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] text-white"
                    )}>
                      Career
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/hostel" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "block px-4 py-3 font-medium bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] text-white"
                    )}>
                      Hostel
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/tender" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "block px-4 py-3 font-medium bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] text-white"
                    )}>
                      Tender
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/committee" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "block px-4 py-3 font-medium bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] text-white"
                    )}>
                      Committee
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/faq" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "block px-4 py-3 font-medium bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] text-white"
                    )}>
                      FAQ
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              
                <NavigationMenuItem>
                  <Link href="/placement" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "block px-4 py-3 font-medium bg-[#800000] hover:bg-[#5d0000] focus:bg-[#5d0000] text-white"
                    )}>
                      Placements
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
              </NavigationMenuList>
             
              
              
            </NavigationMenu>
          </div>

          <style jsx global>{`
            /* Override Radix UI's default positioning */
            .nav-container [data-state="open"] > [data-radix-popper-content-wrapper] {
              transform: translate3d(0, 0, 0) !important;
              left: 50% !important;
              transform: translateX(-50%) !important;
              top: 100% !important;
              margin-top: 0 !important;
            }
          `}</style>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <DisclosurePanel className="lg:hidden">
        <div className="flex flex-col gap-6 py-4">
          {/* Add mobile navigation items here */}
        </div>
        <div className="absolute left-1/2 w-screen -translate-x-1/2">
          <div className="absolute inset-x-0 top-0 border-t border-black/5 dark:border-white/5" />
          <div className="absolute inset-x-0 top-2 border-t border-black/5 dark:border-white/5" />
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar; 