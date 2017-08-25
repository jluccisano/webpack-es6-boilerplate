import React from 'react';
import {render} from 'react-dom';
import sayHello from './hello';

const element = <h1>{sayHello()}</h1>;
render(
	element,
	document.getElementById('root')
);