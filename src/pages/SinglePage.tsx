
import { useParams } from 'react-router-dom';
import useStore from '../store/FetchingData';

const SinglePage = () => {
    const { id } = useParams();
    const isPopular = useStore((state) => state.isPopular);
    const loading = useStore((state) => state.loading);

    if (loading) {
        return <p className='text-center mt-10 text-lg'>Loading...</p>
    }

    if (!isPopular || !isPopular.length) {
        return <p className='text-center mt-10 text-lg'>No data Available</p>
    }

    const show = isPopular.find(item => item.id.toString() === id);

    if (!show) {
        return <p className='text-center mt-10 text-lg'>Show not found</p>
    }
    return (
        <div>
            <div className="p-8 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-black">{show.name || show.title}</h1>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                    alt={show.name}
                    className="rounded-xl shadow-md mb-6"
                />
                <p className="text-gray-800 text-lg"><strong>First Air Date:</strong> {show.first_air_date}</p>
                <p className="text-gray-800 text-lg mt-4"><strong>Overview:</strong></p>
                <p className="text-gray-700">{show.overview}</p>
                <p className="text-gray-800 text-lg mt-4"><strong>Popularity:</strong> {show.popularity}</p>
                <p className="text-gray-800 text-lg"><strong>Vote Average:</strong> {show.vote_average}</p>
                <p className="text-gray-800 text-lg"><strong>Vote Count:</strong> {show.vote_count}</p>
            </div>
        </div>
    )
}

export default SinglePage