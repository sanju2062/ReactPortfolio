import {useState} from 'react';
import './App.css';
import Nav from './components/Nav'
import Menu from './components/hamburger/Menu';
import Burger from './components/hamburger/Burger';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
// import Services from './components/Services/Services';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {

	const [open,setOpen] = useState(false);

	return (
		<BrowserRouter>
		<div className="App">
			<Nav open={open}/>
			<div>
				<Burger open={open} setOpen={setOpen}/>
				<Menu open={open} setOpen={setOpen}/>
			</div>
			
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
				<Route path="/contact" exact component={Contact} />
				{/* <Route path="/services" exact component={Services} /> */}
			
		</div>
		</BrowserRouter>
	);
}

export default App;
