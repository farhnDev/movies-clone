import { useEffect, useState, useRef } from "react"
import GlobalApi from "../Services/GlobalApi";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
const windowScreen = window.innerWidth;


export default function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef('');

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(rest => {
            console.log(rest.data.results)
            setMovieList(rest.data.results);
        })
    }
    const sliderRight = (element) => {
        element.scrollLeft += windowScreen-110;
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= windowScreen-110;
    }
    return (
        <div className="flex justify-between">
            <MdArrowBackIos className="hidden md:block absolute text-white mx-8 mt-[150px] cursor-pointer text-[30px]" onClick={() => { sliderLeft(elementRef.current) }} />
            <MdArrowForwardIos  className="hidden md:block absolute text-white mx-8 mt-[150px] cursor-pointer right-0 text-[30px]" onClick={() => { sliderRight(elementRef.current) }} />
            <div className={'flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth'} ref={elementRef}>
                {movieList.map((item) => (
                    <img key={item.id} src={IMAGE_BASE_URL + item.backdrop_path} alt=""
                        className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-lg md:hover:border-[4px] border-gray-300 transition-all duration-100 ease-in-out' />
                ))}
            </div>
        </div>
    )
}