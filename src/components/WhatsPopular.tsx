import React, { useEffect } from 'react'
import { Card } from './Card';
import useStore from '../store/FetchingData';

export const WhatsPopular = () => {

    const isPopular = useStore((state) => state.isPopular);
    const loading = useStore((state) => state.loading);
    const fetchPopular = useStore((state) => state.fetchPopular);

    useEffect(() => {
        if (!isPopular) {
            fetchPopular();
        }
    }, [isPopular, fetchPopular]);

    return (
        <div className='bg-[#fff] h-auto mt-10 main-container px-8'>
            <h1 className='mt-10 text-3xl font-bold text-black'>Whats Popular</h1>
            <div className="flex overflow-x-auto space-x-4 hide-scrollbar py-5 h-[355px]">
                {loading || !isPopular?.length ? (
                    <p>Loading...</p>
                ) : (
                    isPopular.map((item: any) => (
                        <Card
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
