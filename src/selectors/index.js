export const selectorCinemaSlider = state => state.cinema.sliderArr;
export const selectorCinemaPage = state => state.cinema.pageObj;
export const selectorCinemaLoading = state => state.cinema.loading;
export const selectorCinemaLModal = state => state.cinema.modal;

export const selectorTvSlider = state => state.tv.sliderArr;
export const selectorTvPage = state => state.tv.pageObj;
export const selectorTvLoading = state => state.tv.loading; 

export const selectorAppModal = state => state.app.modal;
export const selectorAppFavorites = state => state.app.favorites;
export const selectorAppFavoritesCount = state => state.app.favorites.length;
export const selectorAppCurrentFilm = state => state.app.currentFilm;

export const selectorState = state => state;