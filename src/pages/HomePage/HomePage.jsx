import {useSelector, useDispatch} from "react-redux";
import Movies from '../../components/Movies';
import SliderTV from "../../components/Movies/components/SliderTV/SliderTV";
import SliderCinema from '../../components/Movies/components/SliderCinema';
import Modal from '../../components/Modal';
import { actionModal, actionCurrentFilm, actionFavorites } from '../../reducers';
import { selectorAppModal, selectorAppFavorites, selectorAppCurrentFilm } from '../../selectors';
import { useState } from 'react';

const HomePage = () => {
    const dispatch = useDispatch();
    const isModal = useSelector(selectorAppModal);
    const favorites = useSelector(selectorAppFavorites);
	const currentFilm = useSelector(selectorAppCurrentFilm);
    console.log(currentFilm)

	const handlerToggleModal = () => {
		dispatch(actionModal(!isModal));
	}

	const handlerCurrentFilm = (currentFilm) => {
		dispatch(actionCurrentFilm(currentFilm))
	}

	const handlerFavorites = (currentFilm) => {
		dispatch(actionFavorites(currentFilm))
		handlerToggleModal()
	}

    const url = currentFilm.original_name ? `tv/${currentFilm.id}` : `cinema/${currentFilm.id}`;
    const title = currentFilm.name ? currentFilm.name : currentFilm.title;

    return (
        <>
            <Movies>
                <SliderTV handlerCurrentFilm={handlerCurrentFilm} handlerOpenModal={handlerToggleModal}/>
                <SliderCinema handlerCurrentFilm={handlerCurrentFilm} handlerOpenModal={handlerToggleModal}/>
            </Movies>

            {isModal && <Modal 
                closeModal={handlerToggleModal} 
                url={url} 
                title={title} 
                handlerModal={() => handlerFavorites(currentFilm)} 
                asdasds={<div onClick={() => handlerFavorites(currentFilm)}>btn</div>}
            />}

        </>

    )
}

export default HomePage;