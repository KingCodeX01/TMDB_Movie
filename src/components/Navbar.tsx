import { useState, useRef } from 'react';

function Navbar() {
    // const [showSearch, setShowSearch] = useState(false);
    const [openMenu, setOpenMenu] = useState(null); // "movies", "tv", etc.
    const timeoutRef = useRef(null);

    const handleMouseEnter = (menu) => {
        clearTimeout(timeoutRef.current);
        setOpenMenu(menu);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpenMenu(null);
        }, 300); // 300ms delay
    };

    return (
        <>
            <div className="w-full h-auto">
                {/* Navbar */}
                <div className="h-16 w-full bg-[#032541] flex">
                    <div className="main-container flex items-center justify-between w-full px-10">
                        {/* Left: Logo & Menu */}
                        <div className="flex items-center gap-6">
                            <img src="./images/TMDB.png" alt="TMDB-logo" width={154} height={20} />

                            <ul className="flex items-center gap-6 text-white">
                                {/* Movies Dropdown - Hover Controlled */}
                                <li
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter('movies')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a href="#">Movies</a>
                                    {openMenu === 'movies' && (
                                        <div className="absolute bg-white rounded w-40 top-8 left-0 p-3 shadow-lg z-10">
                                            <ul className="flex flex-col gap-2 text-black text-sm font-semibold">
                                                <li><a href="#">Popular</a></li>
                                                <li><a href="#">Now Playing</a></li>
                                                <li><a href="#">Upcoming</a></li>
                                                <li><a href="#">Top Rated</a></li>
                                            </ul>
                                        </div>
                                    )}
                                </li>

                                {/* TV Shows Dropdown - Static for now */}
                                <li className="relative"
                                    onMouseEnter={() => handleMouseEnter('TV Shows')}
                                    onMouseLeave={handleMouseLeave}>
                                    <a href="#">TV Shows</a>
                                    {openMenu === 'TV Shows' && (
                                        <div className="absolute bg-white rounded w-40 top-8 left-0 p-3 shadow-lg z-10">
                                            <ul className="flex flex-col gap-2 text-black text-sm font-semibold">
                                                <li><a href="#">Popular</a></li>
                                                <li><a href="#">Airing Today</a></li>
                                                <li><a href="#">On TV</a></li>
                                                <li><a href="#">Top Rated</a></li>
                                            </ul>
                                        </div>
                                    )}
                                </li>

                                {/* People Dropdown - Static for now */}
                                <li className="relative"
                                    onMouseEnter={() => handleMouseEnter('People')}
                                    onMouseLeave={handleMouseLeave}>
                                    <a href="#">People</a>
                                    {openMenu === 'People' && (
                                        <div className="absolute bg-white rounded w-40 top-8 left-0 p-3 shadow-lg z-10">
                                            <ul className="flex flex-col gap-2 text-black text-sm font-semibold">
                                                <li><a href="#">Popular People</a></li>
                                            </ul>
                                        </div>
                                    )}
                                </li>

                                {/* More Dropdown - Static for now */}
                                <li className="relative"
                                    onMouseEnter={() => handleMouseEnter('More')}
                                    onMouseLeave={handleMouseLeave}>
                                    <a href="#">More</a>
                                    {openMenu === 'More' && (
                                        <div className="absolute bg-white rounded w-52 top-8 left-0 p-3 shadow-lg z-10">
                                            <ul className="flex flex-col gap-2 text-black text-sm font-semibold">
                                                <li><a href="#">Discussions</a></li>
                                                <li><a href="#">Leaderboard</a></li>
                                                <li><a href="#">Support</a></li>
                                                <li><a href="#">API Documentation</a></li>
                                                <li><a href="#">API for Business</a></li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>

                        {/* Right Side: Actions */}
                        <div className="text-white">
                            <ul className="flex items-center gap-6">
                                <li className='max-md:hidden'><i className="fa-solid fa-plus text-2xl"></i></li>
                                <li className='max-md:hidden'><button className="border border-white p-1 rounded">EN</button></li>
                                <li className='max-md:hidden'><a href="#" className="font-semibold text-lg">Login</a></li>
                                <li className='max-md:hidden'><a href="#" className="font-semibold text-lg">Join TMDB</a></li>
                                <li className=''><label htmlFor="SearchBar"><i className="fa-solid fa-magnifying-glass text-[#2c67f2] text-2xl"
                                // onClick={() => setShowSearch(prev => !prev)}
                                ></i>
                                </label></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                {/* {showSearch && (
                    <div className="main-container px-10 flex items-center  justify-center mt-4">
                        <i className="fa-solid fa-magnifying-glass text-sm text-black"></i>
                        <input
                            type="text"
                            className="w-full h-8 outline-none italic placeholder-gray-400 text-sm rounded px-4"
                            placeholder="Search for a movie, tv show, person..."
                        />
                    </div>

                )} */}
                <div className="main-container px-10 flex items-center  justify-center mt-4">
                    <i className="fa-solid fa-magnifying-glass text-sm text-black"></i>
                    <input
                        id="SearchBar"
                        type="text"
                        className="w-full h-8 outline-none italic placeholder-gray-400 text-sm rounded px-4"
                        placeholder="Search for a movie, tv show, person..."
                    />
                </div>
            </div>
        </>
    );
}

export default Navbar;
