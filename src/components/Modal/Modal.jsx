import {useRef, useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import './Modal.scss';
import PropTypes from 'prop-types'; 
import {ReactComponent as CloseModal} from './icons/modal-close.svg';


const Modal = ({handlerModal, closeModal, title, handleInfoModal, url}) => {

	const wrapperRef = useRef();

	useEffect(() =>{
		document.addEventListener("mousedown", handleClickOutside);

		return(() => {
			document.removeEventListener("mousedown", handleClickOutside);
		})
	})
	
	const handleClickOutside = (event) => {
		if (wrapperRef && ! wrapperRef.current.contains(event.target)) { 
			closeModal();
		}
	}



	return (
		<div className="modal-wrapper">
			<div className="modal" ref={wrapperRef}>
				<div className="modal-box">
					<button type="button" className="modal-close" onClick={closeModal}>
						<CloseModal />
					</button>
					<div className="modal-header">
						<h4>Popular film</h4>
					</div>
					<div className="modal-content">
						You chose {title}
					</div>
					<div className="modal-footer">
						<div className="button-wrapper">
							<button className="btn" type="button" onClick={handlerModal}>Add to Favorite</button>
							<Link to={url} className="btn" onClick={closeModal}>Info</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)

}
Modal.propTypes = {
    temperature: PropTypes.number,
    closeModal: PropTypes.func,
	title: PropTypes.string,
}

export default Modal;