import React from 'react';
import { IndexRoute ,Router, Route, hashHistory } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import Projects from './containers/Projects'
import AboutMe from './containers/AboutMe'
import ContactMe from './containers/ContactMe'

export default (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} /> 
			<Route path="/projects" component={Projects} />
			<Route path="/aboutMe" component={AboutMe} />
			<Route path="/contactMe" component={ContactMe} />			
		</Route>
		
	</Router>
	);