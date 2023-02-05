import {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useParams, Link, useNavigate} from "react-router-dom";

import {IMG_URL} from "../../configs/API";
import {selectorCinemaPage, selectorCinemaLoading} from "../../selectors";
import {actionFetchPage} from "../../reducers";

import {ReactComponent as RightArrow} from "./images/right-arrow.svg";

import "./CinemaPage.scss";

const CinemaPage = () => {
	const {id} = useParams();
	const navigation = useNavigate();
	const goBack = () => navigation(-1);

	const data = useSelector(selectorCinemaPage);
	const loading = useSelector(selectorCinemaLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actionFetchPage(id))
	},[id])

	const {
		backdrop_path,
		poster_path,
		original_title,
		title,
		genres,
		runtime,
		overview,
		release_date
	} = data;


	return (
		<header className="page-movie-header">
			<div className="header-bg" style={{backgroundImage: `url(${IMG_URL}${backdrop_path})`}}/>
			<div className="container">
				<div className="header-wrapper">
					<Link to="/cinema" className="btn-back"><RightArrow/></Link>
					<div className="header-poster">
						<img src={`${IMG_URL}${poster_path}`} alt={title}/>
					</div>
					<div className="header-content">
						<p className="movie-name">{title}</p>
						<p className="movie-subname"><i>{original_title}</i></p>
						<p className="movie-info">
						<span className="genres">
                            {
	                            data.genres && genres.map(item => <span>{item.name}</span>)
                            }
						</span>
							<span className="runtime">{runtime}</span>
						</p>
						<p className="movie-overview">
							{overview}
						</p>
						<p className="movie-created">
							<span>Release Date: {release_date}</span>
						</p>
					</div>
				</div>
			</div>
		</header>
	)
}

export default CinemaPage;