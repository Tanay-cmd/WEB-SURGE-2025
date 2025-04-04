"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, HelpCircle, Book, FileText, Code, Award, Info, Mail, MessageSquare } from "lucide-react"

// FAQ data
const faqData = [
  {
    question: "What is Codeforces?",
    answer:
      "Codeforces is a website that hosts competitive programming contests. It is maintained by a group of competitive programmers from ITMO University led by Mikhail Mirzayanov. The platform is used by programmers globally to improve their algorithmic skills and compete in regular contests.",
  },
  {
    question: "How do I participate in contests?",
    answer:
      "To participate in contests, you need to register on Codeforces. Once registered, you can join any upcoming contest from the 'Contests' page. During the contest, you'll solve problems and submit your solutions within the specified time limit.",
  },
  {
    question: "How is my rating calculated?",
    answer:
      "Your rating is calculated based on your performance in rated contests. The exact formula is complex and considers factors like your current rating, the difficulty of problems you solved, and your performance relative to other participants. Generally, solving more difficult problems and outperforming higher-rated participants will increase your rating more significantly.",
  },
  {
    question: "What do the different colors mean?",
    answer:
      "The colors represent different rating ranges: Gray (< 1200) for Newbies, Green (1200-1399) for Pupils, Cyan (1400-1599) for Specialists, Blue (1600-1899) for Experts, Purple (1900-2099) for Candidate Masters, Orange (2100-2399) for Masters, Red (≥ 2400) for Grandmasters and International Grandmasters, and Legendary Grandmaster for the highest-rated participants.",
  },
  {
    question: "How can I improve my problem-solving skills?",
    answer:
      "Practice regularly by solving problems from the problemset. Start with easier problems and gradually move to more difficult ones. Analyze others' solutions after contests to learn new techniques. Participate in virtual contests to simulate real contest environments. Join discussion forums and read tutorials to understand different approaches to problems.",
  },
  {
    question: "What programming languages are supported?",
    answer:
      "Codeforces supports a wide range of programming languages including C++, Java, Python, C#, Go, Ruby, Rust, and more. However, C++ is the most commonly used language due to its execution speed and the availability of the Standard Template Library (STL).",
  },
  {
    question: "What are the rules during contests?",
    answer:
      "During contests, you must solve problems independently without any external help. Discussing problems or solutions with others during the contest is prohibited. You can use pre-written code (templates) that you've created before the contest. Multiple accounts or any form of cheating will result in penalties.",
  },
  {
    question: "How do I report a bug in a problem?",
    answer:
      "If you find a bug in a problem, you can report it by leaving a comment on the problem page after the contest ends. During a contest, you can use the 'Ask Question' feature to contact the contest administrators.",
  },
]

// Rules data
const rulesData = [
  {
    title: "Contest Participation",
    rules: [
      "Register for contests before they begin",
      "Solve problems independently without external help",
      "Submit solutions within the contest time limit",
      "Do not discuss problems or solutions during the contest",
      "One person can use only one account",
    ],
  },
  {
    title: "Submission Guidelines",
    rules: [
      "Submit code in any supported programming language",
      "Ensure your solution meets the time and memory constraints",
      "You can make multiple submissions for the same problem",
      "Only your highest-scoring submission for each problem counts",
      "Plagiarism will result in rating penalties",
    ],
  },
  {
    title: "Rating System",
    rules: [
      "Participate in rated contests to earn a rating",
      "New users start with a provisional rating",
      "Rating changes are calculated after each contest",
      "Higher ratings correspond to different colored usernames",
      "Rating changes depend on your performance relative to expectations",
    ],
  },
]

// Resources data
const resourcesData = [
  {
    title: "Competitive Programming Handbook",
    description: "A comprehensive guide to competitive programming algorithms and techniques",
    link: "#",
  },
  {
    title: "Algorithms for Competitive Programming",
    description: "Collection of algorithms and data structures commonly used in contests",
    link: "#",
  },
  {
    title: "CP-Algorithms",
    description: "Translations of popular articles from the Russian competitive programming website e-maxx.ru",
    link: "#",
  },
  {
    title: "USACO Guide",
    description: "A free collection of curated, high-quality competitive programming resources",
    link: "#",
  },
  {
    title: "Codeforces EDU",
    description: "Educational section with interactive problems and tutorials",
    link: "#",
  },
]

// Accordion component
const Accordion = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border border-white/10 rounded-lg overflow-hidden mb-4"
    >
      <motion.div
        className="flex items-center justify-between p-4 cursor-pointer bg-[rgba(18,18,18,0.8)]"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      >
        <div className="flex items-center space-x-2">
          {icon}
          <h3 className="text-xl font-semibold text-[#4ff0b7]">{title}</h3>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-[rgba(18,18,18,0.6)]">{children}</div>
      </motion.div>
    </motion.div>
  )
}

// FAQ Item component
const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className="border-b border-white/10 last:border-b-0"
    >
      <motion.div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      >
        <h4 className="text-lg font-medium text-gray-200">{question}</h4>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="p-4 text-gray-400">{answer}</p>
      </motion.div>
    </motion.div>
  )
}

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black bg-[linear-gradient(rgba(0,255,0,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(0,255,0,0.03)_2px,transparent_2px)] bg-[size:50px_50px] text-gray-300 pb-20">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-2"
        >
          <motion.h1
            className="text-4xl font-bold text-[#4ff0b7]"
            animate={{
              textShadow: [
                "0 0 5px rgba(79, 240, 183, 0.5)",
                "0 0 20px rgba(79, 240, 183, 0.8)",
                "0 0 5px rgba(79, 240, 183, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            Help Center
          </motion.h1>
          <p className="text-gray-400">Find answers to common questions and learn how to use Codeforces</p>
        </motion.div>

        {/* FAQ Section */}
        <Accordion title="Frequently Asked Questions" icon={<HelpCircle className="w-5 h-5 text-[#4ff0b7]" />}>
          <div className="space-y-2">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </Accordion>

        {/* Rules Section */}
        <Accordion title="Contest Rules" icon={<Book className="w-5 h-5 text-[#4ff0b7]" />}>
          <div className="space-y-6">
            {rulesData.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">{section.title}</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  {section.rules.map((rule, ruleIndex) => (
                    <motion.li
                      key={ruleIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + ruleIndex * 0.05, duration: 0.3 }}
                    >
                      {rule}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Accordion>

        {/* Resources Section */}
        <Accordion title="Learning Resources" icon={<FileText className="w-5 h-5 text-[#4ff0b7]" />}>
          <div className="grid gap-4">
            {resourcesData.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.link}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="block p-4 border border-white/10 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                <p className="text-gray-400 mt-1">{resource.description}</p>
              </motion.a>
            ))}
          </div>
        </Accordion>

        {/* Getting Started Section */}
        <Accordion title="Getting Started" icon={<Code className="w-5 h-5 text-[#4ff0b7]" />}>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">Create an Account</h3>
              <p className="text-gray-400">
                Start by creating a Codeforces account. Click on the "Register" button in the top right corner of the
                homepage and fill out the registration form.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">Solve Practice Problems</h3>
              <p className="text-gray-400">
                Before participating in contests, practice by solving problems from the problemset. Start with problems
                rated 800-1000 and gradually move to more difficult ones.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">Join a Contest</h3>
              <p className="text-gray-400">
                Register for an upcoming contest from the "Contests" page. Make sure to register before the contest
                starts. During the contest, read the problems carefully and submit your solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">Learn from Others</h3>
              <p className="text-gray-400">
                After contests, review the solutions of higher-rated participants to learn new techniques and
                approaches. Participate in discussions and read editorials to understand problem-solving strategies.
              </p>
            </motion.div>
          </div>
        </Accordion>

        {/* Rating System Section */}
        <Accordion title="Rating System" icon={<Award className="w-5 h-5 text-[#4ff0b7]" />}>
          <div className="space-y-4">
            <p className="text-gray-400">
              The Codeforces rating system is designed to evaluate participants' skills based on their performance in
              contests. Here's how it works:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="p-4 border border-white/10 rounded-lg"
              >
                <h4 className="font-semibold text-white mb-2">Newbie</h4>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-500 rounded-full mr-2"></div>
                  <span className="text-gray-400">Rating: &lt; 1200</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="p-4 border border-white/10 rounded-lg"
              >
                <h4 className="font-semibold text-white mb-2">Pupil</h4>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-400">Rating: 1200 - 1399</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="p-4 border border-white/10 rounded-lg"
              >
                <h4 className="font-semibold text-white mb-2">Specialist</h4>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-cyan-500 rounded-full mr-2"></div>
                  <span className="text-gray-400">Rating: 1400 - 1599</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="p-4 border border-white/10 rounded-lg"
              >
                <h4 className="font-semibold text-white mb-2">Expert</h4>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-400">Rating: 1600 - 1899</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="p-4 border border-white/10 rounded-lg"
              >
                <h4 className="font-semibold text-white mb-2">Candidate Master</h4>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-400">Rating: 1900 - 2099</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="p-4 border border-white/10 rounded-lg"
              >
                <h4 className="font-semibold text-white mb-2">Master</h4>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-gray-400">Rating: 2100 - 2399</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="p-4 border border-white/10 rounded-lg"
              >
                <h4 className="font-semibold text-white mb-2">Grandmaster</h4>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-gray-400">Rating: 2400 - 2599</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.3 }}
                className="p-4 border border-white/10 rounded-lg"
              >
                <h4 className="font-semibold text-white mb-2">International Grandmaster</h4>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
                  <span className="text-gray-400">Rating: 2600 - 2999</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="p-4 border border-white/10 rounded-lg md:col-span-2"
              >
                <h4 className="font-semibold text-white mb-2">Legendary Grandmaster</h4>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-700 rounded-full mr-2"></div>
                  <span className="text-gray-400">Rating: ≥ 3000</span>
                </div>
              </motion.div>
            </div>
          </div>
        </Accordion>

        {/* Contact Section */}
        <Accordion title="Contact Support" icon={<Info className="w-5 h-5 text-[#4ff0b7]" />}>
          <div className="space-y-4">
            <p className="text-gray-400">
              If you need further assistance, you can contact the Codeforces support team through the following
              channels:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="p-4 border border-white/10 rounded-lg flex items-center space-x-3"
              >
                <Mail className="w-5 h-5 text-[#4ff0b7]" />
                <div>
                  <h4 className="font-semibold text-white">Email Support</h4>
                  <p className="text-gray-400">support@codeforces.com</p>
                </div>
              </motion.a>

              <motion.a
                href="#"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="p-4 border border-white/10 rounded-lg flex items-center space-x-3"
              >
                <MessageSquare className="w-5 h-5 text-[#4ff0b7]" />
                <div>
                  <h4 className="font-semibold text-white">Community Forum</h4>
                  <p className="text-gray-400">Post your questions in the forum</p>
                </div>
              </motion.a>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  )
}

