import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Structure from './structure';

import './../../styling/index.scss';


ReactDOM.render(
  <Router>
    <Structure />
  </Router>,
  app
);