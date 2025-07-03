import { create } from 'zustand';
// import { Movie } from '../type/';

const baseURL = import.meta.env.VITE_BASE_URL;

const useStore = create((set) => ({
    isTrending: null,
    isPopular: null,
    loading: false,

    fetchPopular: async () => {
            set({loading : true});

            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: import.meta.env.VITE_BEARER_KEY
                }
            };

            try {
                const res = await fetch(`${baseURL}/trending/tv/day?language=en-US`, options);
                const jsonData = await res.json();
                console.log(jsonData, 'fully fetched TV Series');
                set ({isPopular : jsonData.results});
            } catch (err) {
                console.error("Failed to fetch TV:", err);
            } finally {
                set({loading: false});
            }
    },

    
    fetchMovies: async () => {
        set({loading: true});
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: import.meta.env.VITE_BEARER_KEY
            }
        }

        try {
            const res = await fetch(`${baseURL}trending/movie/day?language=en-US`, options);
            const jsonData = await res.json();
            console.log(jsonData, 'fully fetched Movies');
            set({ isTrending: jsonData.results});
        } catch (err) {
            console.error("Failed to fetch movies", err);
        } finally {
            set({loading:false});
        }
    },
}));

export default useStore;