"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export const FAQExpandableCard = ({ question, answer, isOpen, onToggle }) => {
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        onToggle(false);
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onToggle]);

  useOutsideClick(ref, () => onToggle(false));

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4 overflow-y-auto">
            <motion.button
              key={`button-${question}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => onToggle(false)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${question}-${id}`}
              ref={ref}
              className="w-full max-w-[800px] my-8 flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="p-6 flex flex-col">
                <motion.h3
                  layoutId={`title-${question}-${id}`}
                  className="font-bold text-2xl text-neutral-700 dark:text-neutral-200 mb-4">
                  {question}
                </motion.h3>
                <div className="overflow-y-auto max-h-[60vh] pr-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-sm md:text-base lg:text-lg dark:text-neutral-400 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                    {answer}
                  </motion.div>
                </div>
                <div className="mt-6 flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => onToggle(false)}
                    className="px-6 py-2 text-sm rounded-full font-bold bg-[#800000] text-white hover:bg-[#600000] transition-colors">
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <motion.div
        layoutId={`card-${question}-${id}`}
        onClick={() => onToggle(true)}
        className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-gray-200 dark:border-gray-700">
        <div className="flex gap-4 flex-col md:flex-row w-full">
          <div className="w-full">
            <motion.h3
              layoutId={`title-${question}-${id}`}
              className="font-medium text-lg text-neutral-800 dark:text-neutral-200 text-center md:text-left">
              {question}
            </motion.h3>
          </div>
          <motion.button
            layoutId={`button-${question}-${id}`}
            className="px-4 py-2 text-sm rounded-full font-bold bg-[#800000] hover:bg-gray-100 text-white hover:text-black mt-4 md:mt-0">
            →
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
}; 