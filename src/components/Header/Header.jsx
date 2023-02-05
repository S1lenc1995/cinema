import { ReactComponent as Favourites } from "./icons/favorites.svg";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {selectorAppFavoritesCount} from '../../selectors'
import {Link} from 'react-router-dom';

import './Header.scss'

const Header = () => {
    const count = useSelector(selectorAppFavoritesCount)


    return (
        <header className="header">
            <div className="nav-bar">
                <h1 className='cinema'>Cinema</h1>
                <div className="favorite-block">
                   <div className="count">{count}</div> 
                    <Link to='/cinema/favorites'><Favourites className='heart' /></Link>
                </div>
            </div>
        </header>
    )
}
Header.propTypes = {
	count: PropTypes.number
};

export default Header