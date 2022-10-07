import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement);

const App = () => { return React.createElement("div", {}, React.createElement("h1", {}, "Hello")) };
const Logo = () => { return React.createElement("a", { href: "#", className: "logo" }, "Logo") };
const Container = () => {
  return React.createElement(
    "div",
    { className: "container" },
    [React.createElement("p", {}, "Hello from container")])
};
ReactDOM.render(
  [React.createElement(App), React.createElement(Logo), React.createElement(Container)],
  document.getElementById("root")
);


reportWebVitals();
