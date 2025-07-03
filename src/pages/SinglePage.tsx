
import { useParams } from 'react-router-dom';
import useStore from '../store/FetchingData';

const SinglePage = () => {
    const { id } = useParams();
    const isTrending = useStore((state) => state.isTrending);
    const isPopular = useStore((state) => state.isPopular);
    const loading = useStore((state) => state.loading);

    if (loading) {
        return <p className='text-center mt-10 text-lg'>Loading...</p>
    }

    // if (!isPopular || !isPopular.length) {
    //     return <p className='text-center mt-10 text-lg'>No data Available</p>
    // }

    // if (!isTrending || !isTrending.length) {
    //     return <p className='text-center mt-10 text-lg'>No data Available</p>
    // }

    const allShows = [...(isPopular || []), ...(isTrending || [])];
    const show = allShows.find(item => item.id.toString() === id);

    if (!show) {
        return <p className='text-center mt-10 text-lg'>Show not found</p>
    }
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                {/* Back button (optional) */}
                <button
                    onClick={() => window.history.back()}
                    className="mb-6 flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back
                </button>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="md:flex">
                        {/* Poster Image */}
                        <div className="md:w-1/3">
                            <img
                                className="w-full h-full object-cover"
                                src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                                alt={show.name || show.title}
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 md:w-2/3">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                {show.name || show.title}
                            </h1>

                            <div className="flex items-center space-x-4 mb-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                    {show.vote_average}/10
                                </span>
                                <span className="text-sm text-gray-500">
                                    {show.first_air_date}
                                </span>
                            </div>

                            <p className="text-gray-700 mb-6">
                                {show.overview}
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Popularity</h3>
                                    <p className="text-lg font-semibold">{show.popularity}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Vote Count</h3>
                                    <p className="text-lg font-semibold">{show.vote_count}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage