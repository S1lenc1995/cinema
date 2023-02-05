import Header from './components/Header'
import Footer from './components/Footer';
import RootRouters from "./routes";

import './App.scss';

const App = () => {

	return (
		<div className="page__wrapper">
			<Header />
			<main className="main">
				<RootRouters />
			</main>
			<Footer/>
		</div>
	)

}

export default App;