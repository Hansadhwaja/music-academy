'use client'
import Link from 'next/link'
import React from 'react'
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
    return (
        <div
            className='h-screen md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'
        >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="yellow"
            />
            <div className='p-4 relative z-10 w-full text-center'>
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Master the art of music</h1>
                <p className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>
                    Dive into our comprehensive music courses and
                    tranform your musical journey today. Whether you&apos;re
                    abeginner or looking to refine your skills,join us
                    to unlock your true potential.
                </p>
            </div>
            <div className='mt-4'>
                <Link href={'/courses'}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        Explore Courses
                    </Button>
                </Link>
            </div>

        </div>

    )
}

export default HeroSection