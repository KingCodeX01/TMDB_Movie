import React from 'react'

export const Footer = () => {
    return (
        <div className='bg-[#032541] text-white flex items-start justify-center flex-wrap gap-8 p-16 w-full'>
            <div className='flex flex-col gap-4 items-end'>
                <div><img src='./images/Footer.png' alt='TMDB-logo' width={130} height={93.71}></img></div>
                <a href='#' className='bg-white flex items-center justify-center font-bold text-sky-600 p-4 rounded'>
                    JOIN THE COMMUNITY
                </a>
            </div>
            <div>
                <h1 className='text-lg font-bold'>THE BASICS</h1>
                <ul>
                    <li><a href='#'>About TMDB</a></li>
                    <li><a href='#'>Contact Us</a></li>
                    <li><a href='#'>Support Forums</a></li>
                    <li><a href='#'>API Documentation</a></li>
                    <li><a href='#'>System Status</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-lg font-bold'>GET INVOLVED</h1>
                <ul>
                    <li><a href='#'>Contribution Bible</a></li>
                    <li><a href='#'>Add New Movie</a></li>
                    <li><a href='#'>Add New TV Show</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-lg font-bold'>COMMUNITY</h1>
                <ul>
                    <li><a href='#'>Guidelines</a></li>
                    <li><a href='#'>Discussions</a></li>
                    <li><a href='#'>Leaderboard</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-lg font-bold'>LEGAL</h1>
                <ul>
                    <li><a href='#'>Terms of Use</a></li>
                    <li><a href='#'>API Terms of Use</a></li>
                    <li><a href='#'>Privacy Policy</a></li>
                    <li><a href='#'>DMCA Policy</a></li>
                </ul>
            </div>
        </div>
    )
}
