import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Swiper, SwiperSlide} from 'swiper/react';

import { IMG_URL } from '../../../../configs/API';
import {selectorTvSlider, selectorTvLoading} from "../../../../selectors";
import {actionFetchTvSlider} from "../../../../reducers";

import 'swiper/css';

const SliderTV = ({handlerCurrentFilm, handlerOpenModal}) => {
    

    const tv = useSelector(selectorTvSlider);
    const loading = useSelector(selectorTvLoading);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
       dispatch(actionFetchTvSlider())
    }, [])

    const slides = tv.length && tv.map((item, index) => (
        <SwiperSlide className="film__item" key={index} onClick={() => {
            handlerCurrentFilm(item)
            handlerOpenModal()
        }}>
            <div className="film-poster">
                <img src={`${IMG_URL}/${item.poster_path}`} alt={item.original_name}/>
                <div className="film-poster-back">
                    <h1 className="film-poster__title">{item.name}</h1>
                    <p className="film-poster__subtitle"><i>{item.original_name}</i></p>
                    <p className="film-poster__desc">{item.overview}</p>
                </div>
            </div>
        </SwiperSlide>
    ))
    return (
        <>
            <div className="films__title">Popular in TV</div>
            {loading ? <div>loading</div> : (<div className="films__slider">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={16}
                    className="films__wrapper"
                    navigation={true}
                    grabCursor={false}
                    draggable={false}
                    preventClicksPropagation={true}
                    preventClicks={true}
                    scrollbar={{draggable: false, hide: true}}
                    slideToClickedSlide={false}
                    pagination={{clickable: true}}
                >
                    { slides }
                </Swiper>
            </div>)}
        </>
    )
}
export default SliderTV;