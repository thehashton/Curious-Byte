import React from "react";
import {render} from 'react-dom';
import App from "./App";
import './index.scss';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";

render(
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);