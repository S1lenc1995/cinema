import {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useParams, Link, useNavigate} from "react-router-dom";

import {IMG_URL} from "../../configs/API";
import {selectorTvPage, selectorTvLoading} from "../../selectors";
import {actionFetchTvPage} from "../../reducers";

import {ReactComponent as RightArrow} from "./images/right-arrow.svg";

import "./TVPage.scss";

const TVPage = () => {
	const {id} = useParams();
	const navigation = useNavigate();
	const goBack = () => navigation(-1);

	const data = useSelector(selectorTvPage);
	const loading = useSelector(selectorTvLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actionFetchTvPage(id))
	},[id])

	const {
		backdrop_path,
		poster_path,
		name,
		original_name,
		genres,
		episode_run_time,
		overview,
		created_by,
		seasons,
		last_episode_to_air,
		next_episode_to_air
	} = data;
	const backgroundString = backdrop_path !== null ? `url(${IMG_URL}${backdrop_path})` : 'white'

	return (
		<>
			<header className="page-movie-header">
				<div className="header-bg" style={{backgroundImage: backgroundString}}/>
				<div className="container">
					<div className="header-wrapper">
						<Link to="/cinema" className="btn-back"><RightArrow/></Link>
						<div className="header-poster">
						 <img src={`${IMG_URL}${poster_path}`} alt={name}/>
						</div>
						<div className="header-content">
							<p className="movie-name">{name}</p>
							<p className="movie-subname"><i>{original_name}</i></p>
							<p className="movie-info">
						<span className="genres">
							 {
								 data.genres && genres.map(item => <span>{item.name}</span>)
							 }
						</span>
								<span className="runtime">{episode_run_time}</span>
							</p>
							<p className="movie-overview">
								{overview}
							</p>
							<p className="movie-created">
								{
									data.created_by && created_by.map(item => <span>{item.name} <br/> Creator</span>)
								}
							</p>
						</div>
					</div>
				</div>
			</header>
			<div className="page-movie-content">
				<div className="container">
					{ 	data.seasons && (<p className="content-title">Seasons</p>)}
					<div className="cards-seasons">
						{
							data.seasons && seasons.map(({poster_path, name, air_date, episode_count},index) => {
								console.log(seasons)
								console.log(last_episode_to_air)
								return (
									<div className="card" key={index}>
										<div className="card-post">{poster_path && <img src={`${IMG_URL}${poster_path}`} alt={name}/>}</div>
										<div className="card-content">
											<div className="card-name">{name}</div>
											<div className="card-info">
												<span className="card-date">{air_date}</span> | <span
												className="card-episode">{episode_count} episodes</span>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					<p className="content-title">Episodes</p>
					<div className="cards-episodes">
						{data.last_episode_to_air && (
							<div className="episode-item episodes-last">
								<div className="episode-wrapper">
									<div className="episodes-post">
										{ last_episode_to_air.still_path && <img src={`${IMG_URL}${last_episode_to_air.still_path}`}
										     alt={last_episode_to_air.name}/> }
									</div>
									<div className="episodes-content">
										<p className="episodes-name">Episodes
											name: {last_episode_to_air.name}</p>
										<p className="episodes-date"><i>Episodes
											date: {last_episode_to_air.air_date}</i></p>
										<p className="episodes-info">Season: {last_episode_to_air.season_number} Episode: {last_episode_to_air.episode_number} Runtime: {last_episode_to_air.runtime}</p>
										<p className="episodes-overview">{last_episode_to_air.overview}</p>
									</div>
								</div>
							</div>
						)}
						{data.next_episode_to_air && (
							<div className="episode-item episodes-next">
								<div className="episode-wrapper">
									<div className="episodes-post">
										{ next_episode_to_air.still_path && <img src={`${IMG_URL}${next_episode_to_air.still_path}`}
										     alt={next_episode_to_air.name}/>}
									</div>
									<div className="episodes-content">
										<p className="episodes-name">Episodes
											name: {next_episode_to_air.name}</p>
										<p className="episodes-date"><i>Episodes
											date: {next_episode_to_air.air_date}</i></p>
										<p className="episodes-info">Season: {next_episode_to_air.season_number} Episode: {next_episode_to_air.episode_number} Runtime: {next_episode_to_air.runtime}</p>
										<p className="episodes-overview">{next_episode_to_air.overview}</p>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default TVPage;