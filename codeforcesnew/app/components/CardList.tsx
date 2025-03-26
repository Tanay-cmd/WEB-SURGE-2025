"use client"

import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion"
import { useRef } from "react"

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

const data = [
    {
        id: 1,
        title: "ICPC World Finals 2025",
        description: "The most prestigious competitive programming event in the world. Teams from top universities compete for the title of World Champions.",
        image: "/photos/cityscape/1.jpg",
        status: "upcoming",
        statusText: "Live",
        location: "London, UK",
        sponsors: ["Google", "JetBrains", "AWS"],
        type: "World Championship"
    },
    {
        id: 2,
        title: "Codeforces Round #949 (Div. 2)",
        description: "Medium difficulty contest featuring algorithmic challenges and data structure problems. Perfect for improving your competitive programming skills!",
        image: "/photos/cityscape/2.jpg",
        status: "upcoming",
        statusText: "March 20, 2024",
        location: "Mumbai, India",
        sponsors: ["JetBrains", "Telegram"],
        type: "Codeforces Round"
    },
    {
        id: 3,
        title: "Facebook Hacker Cup 2024",
        description: "Meta's annual programming competition. Tackle challenging problems and compete with programmers worldwide.",
        image: "/photos/cityscape/3.jpg",
        status: "upcoming",
        statusText: "March 25, 2024",
        location: "Paris, France",
        sponsors: ["Meta", "Instagram", "WhatsApp"],
        type: "Major Competition"
    },
    {
        id: 4,
        title: "Codeforces Round #950 (Div. 1)",
        description: "Advanced level contest featuring complex algorithmic problems. Only for the most experienced competitive programmers!",
        image: "/photos/cityscape/4.jpg",
        status: "upcoming",
        statusText: "March 30, 2024",
        location: "Moscow, Russia",
        sponsors: ["JetBrains", "Telegram"],
        type: "Codeforces Round"
    },
    {
        id: 5,
        title: "Codeforces Round #951 (Div. 2)",
        description: "Medium difficulty contest with algorithmic challenges and data structure problems. Test your problem-solving skills!",
        image: "/photos/cityscape/5.jpg",
        status: "upcoming",
        statusText: "April 5, 2024",
        location: "New York, USA",
        sponsors: ["JetBrains", "Telegram"],
        type: "Codeforces Round"
    }
];

function Image({ id }: { id: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    // Calculate opacity based on scroll position
    const opacity = useTransform(scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 1, 1, 0]
    );

    // Get the event data
    const event = data.find(item => item.id === id)

    return (
        <motion.section className="img-container">
            <div className="content-wrapper">
                <motion.div className="text-content" style={{ opacity }}>
                    <h1 className="text-4xl font-bold mb-4">{event?.title}</h1>
                    <p className="text-lg mb-4">
                        {event?.description}
                    </p>
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-[#4ff0b7]">📍</span>
                            <span>{event?.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#4ff0b7]">⏰</span>
                            <span>{event?.statusText}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#4ff0b7]">🎯</span>
                            <span>{event?.type}</span>
                        </div>
                    </div>
                    <div className="flex gap-2 mb-4">
                        {event?.sponsors.map((sponsor, index) => (
                            <span key={index} className="bg-[#4ff0b7]/20 text-[#4ff0b7] px-3 py-1 rounded-full text-sm">
                                {sponsor}
                            </span>
                        ))}
                    </div>
                    <button className="bg-[#4ff0b7] hover:bg-[#4ff0b7]/80 text-black px-6 py-2 rounded-lg font-semibold transition-colors">
                        Register Now
                    </button>
                </motion.div>
                <motion.div className="image-frame" ref={ref} style={{ opacity }}>
                    <img
                        src={event?.image}
                        alt={`${event?.location} cityscape`}
                    />
                </motion.div>
            </div>
            <motion.h2
                className={`font-lg ${event?.status === 'live' ? 'text-red-500' : 'text-[#4ff0b7]'}`}
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y, opacity }}
            >{event?.statusText}</motion.h2>
        </motion.section>
    )
}

export default function Parallax() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div id="example">
            {data.map((image) => (
                <Image key={image.id} id={image.id} />
            ))}
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
    return (
        <style>{`
        .img-container {
            height: 60vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            margin-bottom: 0;
        }

        .content-wrapper {
            display: flex;
            align-items: center;
            gap: 4rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .text-content {
            flex: 1;
            color: white;
            padding-right: 2rem;
        }

        .image-frame {
            width: 400px;
            height: 400px;
            background: #f5f5f5;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .image-frame img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media (max-width: 768px) {
            .content-wrapper {
                flex-direction: column;
                gap: 2rem;
            }

            .text-content {
                text-align: center;
                padding-right: 0;
                padding-bottom: 2rem;
            }

            .image-frame {
                width: 300px;
                height: 300px;
            }
        }

        .img-container h2 {
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: -1px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 12px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #4ff0b7;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
    )
}


