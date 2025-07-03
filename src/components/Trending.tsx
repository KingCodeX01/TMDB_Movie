import { useEffect } from 'react'
import { CardOne } from './CardOne'
import useStore from '../store/FetchingData'


// const BearerToken = import.meta.env.VITE_
const Trending = () => {
    const isTrending = useStore((state) => state.isTrending);
    const loading = useStore((state) => state.loading);
    const fetchMovies = useStore((state) => state.fetchMovies);

    useEffect(() => {
        if (!isTrending) {
            fetchMovies();
        }
    }, [isTrending, fetchMovies]);

    return (
        <div className='bg-[#fff] h-auto mt-10 main-container px-8'>
            <h1 className='mt-10 text-3xl font-bold text-black'>Trending</h1>
            <div className="flex overflow-x-auto space-x-4 hide-scrollbar py-5 h-[355px]">
                {loading || !isTrending?.length ? (
                    <p>Loading...</p>
                ) : (
                    isTrending.map((item: any) => (
                        <CardOne
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            date={item.first_air_date}
                            image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        />
                    ))
                )}
            </div>
        </div>

    )
}

export default Trending


