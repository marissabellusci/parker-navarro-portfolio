import React from "react";
import { render } from 'react-dom';
import App from "./components/App";
import sampleText from "./sample-text";
import './css/style.css';
import ControlPanel from './components/ControlPanel';

render(<App />, document.querySelector('#main'));

