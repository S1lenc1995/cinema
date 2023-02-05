import {useSelector, useDispatch} from "react-redux"
import { useEffect, useState } from "react"
import {Swiper, SwiperSlide} from "swiper/react"

import { IMG_URL } from "../../configs/API"
import {actionFetchSlider} from "../../reducers"
import { selectorCinemaLoading, selectorAppFavorites} from "../../selectors"

import {ReactComponent as RightArrow} from "./images/right-arrow.svg";
import {Link} from "react-router-dom";

 import {ReactComponent as CloseModal} from './images/modal-close.svg';

 import {  actionDeleteFavorites,  actionFavorites} from "../../reducers/app.reducer"

import 'swiper/css'
import './FavoritsPage.scss'

const Favirites = ({handlerCurrentFilm, handlerOpenModal})=>{
    const dispatch = useDispatch()
    const favorites = useSelector(selectorAppFavorites)
    const loading = useSelector(selectorCinemaLoading)

    useEffect(()=>{
        dispatch(actionFetchSlider())
    }, [])

    const deleteFilm = (index) =>{
        let newFavorites = favorites.filter((el)=> el.id !== index)
        dispatch( actionDeleteFavorites(newFavorites))
    } 

    const slides = favorites.length && favorites.map((item, index)=>(
        <SwiperSlide   className = "film__item" key={index} id={index}  >
             <span  className="delete-item"  onClick={()=>deleteFilm(item.id)} >
                <svg viewBox="0 0 16 16" width="16" height="16">
    <path
        d="m9.3 8 6.1-6.1c.4-.4.4-.9 0-1.3s-.9-.4-1.3 0L8 6.7 1.9.6C1.6.3 1 .3.6.6c-.3.4-.3 1 0 1.3L6.7 8 .6 14.1c-.4.4-.3.9 0 1.3l.1.1c.4.3.9.2 1.2-.1L8 9.3l6.1 6.1c.4.4.9.4 1.3 0s.4-.9 0-1.3L9.3 8z"/>
</svg>
                </span>
            <div  className="film-poster">
                <img src={`${IMG_URL}/${item.poster_path}`} alt={item.original_title}/>
               
               

         <div className="film-poster-back">
                  
               
                 

                    {item.title && <h1 className="film-poster__title">{item.title}</h1> }
                    {item.name && <h1 className="film-poster__title">{item.name}</h1> }
                    {item.original_title && <p className="film-poster__subtitle"><i>{item.original_title}</i></p>}
                    {item.original_name && <p className="film-poster__subtitle"><i>{item.original_name}</i></p>}
                    <p className="film-poster__desc">{item.overview}</p>
                </div> 
            </div>
        </SwiperSlide>
    ))
    return (
        <>
            <div className="films__title">Your favorites film</div>
            <Link to="/cinema"  className="btn-back" ><RightArrow/></Link>
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

export default Favirites;