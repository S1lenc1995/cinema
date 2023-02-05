import {useSelector, useDispatch} from "react-redux"
import { useEffect, useState } from "react"
import {Swiper, SwiperSlide} from "swiper/react"

import { IMG_URL } from "../../../../configs/API"
import {actionFetchSlider} from "../../../../reducers"
import { selectorCinemaLoading, selectorCinemaSlider} from "../../../../selectors"

import 'swiper/css'

const SliderCinema = ({handlerCurrentFilm, handlerOpenModal})=>{
    const dispatch = useDispatch()
    const movie = useSelector(selectorCinemaSlider)
    const loading = useSelector(selectorCinemaLoading)

    useEffect(()=>{
        dispatch(actionFetchSlider())
    }, [])

    const slides = movie.length && movie.map((item, index)=>(
        <SwiperSlide className = "film__item" key={index} onClick={()=>{
            handlerCurrentFilm(item)
            handlerOpenModal()
        }}>
            <div className="film-poster">
                <img src={`${IMG_URL}/${item.poster_path}`} alt={item.original_title}/>
                <div className="film-poster-back">
                    <h1 className="film-poster__title">{item.title}</h1>
                    <p className="film-poster__subtitle"><i>{item.original_title}</i></p>
                    <p className="film-poster__desc">{item.overview}</p>
                </div>
            </div>
        </SwiperSlide>
    ))
    return (
        <>
            <div className="films__title">Popular in cinema</div>
            {loading ? <div>loading</div> : <div className="films__slider">
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
            </div>}
        </>
    )
}

export default SliderCinema;


