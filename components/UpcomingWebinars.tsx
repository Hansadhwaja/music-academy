'use client'
import Link from 'next/link';
import { HoverEffect } from './ui/card-hover-effect';
import { Button } from './ui/moving-border';

const UpcomingWebinars = () => {

    const featuredWebinars = [
        {
            title: 'Understanding Music Theory',
            description:
                'Dive deep into the fundamentals of music theory and enhance your musical skills.',
            slug: 'understanding-music-theory',
            isFeatured: true,
        },
        {
            title: 'The Art of Songwriting',
            description:
                'Learn the craft of songwriting from experienced musicians and songwriters.',
            slug: 'the-art-of-songwriting',
            isFeatured: true,
        },
        {
            title: 'Mastering Your Instrument',
            description:
                'Advanced techniques to master your musical instrument of choice.',
            slug: 'mastering-your-instrument',
            isFeatured: true,
        },
        {
            title: 'Music Production Essentials',
            description:
                'Get started with music production with this comprehensive overview.',
            slug: 'music-production-essentials',
            isFeatured: true,
        },
        // Added two more webinars
        {
            title: 'Live Performance Techniques',
            description:
                'Enhance your live performance skills with expert tips and strategies.',
            slug: 'live-performance-techniques',
            isFeatured: true,
        },
        {
            title: 'Digital Music Marketing',
            description:
                'Learn how to promote your music effectively in the digital age.',
            slug: 'digital-music-marketing',
            isFeatured: true,
        },
    ];

    return (
        <>
            <div className='text-center'>
                <h1 className='text-xl font-semibold text-amber-200'>FEATURED WEBINARS</h1>
                <p className='mt-10 text-3xl font-bold'>Enhance Your Musical Journey</p>
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={featuredWebinars.map(webinar => (
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: webinar.slug
                    }
                ))} />
            </div>
            <div className='mt-4 text-center p-4'>
                <Link href={'/'}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        View All Webinars
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default UpcomingWebinars