import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './router';
import './../styles/reset.css';

const Root = () => {

	return (
		<RouterConfig />
	);
};
ReactDOM.render(<Root />, document.getElementById('root'));