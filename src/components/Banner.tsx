import React from 'react';

export const Banner = () => {
    return (
        <div
            className='relative h-[300px] w-full bg-cover bg-center'
            style={{
                backgroundImage:
                    'url("https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/puMI67KEDPCetj23ZSIhsViyMZy.jpg")',
            }}
        >
            {/* Overlay */}
            <div className='absolute inset-0 bg-blue-800 bg-opacity-40'></div>

            {/* Content - Now layered above the overlay */}
            <div className='relative z-10 main-container px-10 text-white flex flex-col items-start justify-center gap-4 h-full'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl font-bold'>Welcome</h1>
                    <p className='text-lg font-semibold'>
                        Millions of movies, TV Shows and people to discover. Explore now.
                    </p>
                </div>
                <div className='w-full relative flex items-center justify-between'>
                    <input
                        type='text'
                        placeholder='Search for movies, tv shows, people...'
                        className='placeholder:text-gray-500 text-black outline-none p-4 rounded-3xl bg-white w-full'
                    />
                    <button className='bg-[#2c67f2] absolute right-0 bottom-px z-30 flex items-center justify-center p-4 rounded-3xl'>Search</button>
                </div>
            </div>
        </div>
    );
};
