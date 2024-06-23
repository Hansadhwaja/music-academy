
'use client'
import React from 'react'
import { LampDemo } from './ui/lamp'
import courseData from '@/data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient';
import Link from 'next/link';
import { Button } from './ui/moving-border';


interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,

}

const FeaturedSection = () => {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

    return (
        <div>
            <div>
                <LampDemo />
            </div>

            <p className='text-center text-3xl font-semibold'>Learn With the Best</p>
            <div className='mt-3 flex flex-wrap gap-3 p-4 justify-center'>
                {featuredCourses.map((course: Course) => (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                            className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                    Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>

            <div className='mt-4 p-3 text-center'>
                <Link href={'/courses'}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        View All Courses
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedSection