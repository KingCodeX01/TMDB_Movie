import React from 'react'
import { Link } from 'react-router-dom';
type CardProps = {
    id: number,
    image: string,
    title?: string,
    name: string,
    date: string;

}

export const CardOne: React.FC<CardProps> = ({ id, image, title, name, date }) => {

    return (

        <Link to={`/SinglePage/${id}`}  >
            <div className="min-w-[150px] bg-white shadow rounded p-2 text-center cursor-pointer"

            >
                <img src={image} alt="movie" className="w-[150px] h-[225px] object-cover rounded" />
                <h1 className="mt-2 text-sm font-semibold">{title || name}</h1>
                <p className="text-xs text-gray-600">{date}</p>
            </div >
        </Link>


    );
};

