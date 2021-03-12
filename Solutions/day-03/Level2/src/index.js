import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import html from './images/html.PNG';
import css from './images/css.PNG';
import javascript from './images/javascript.JPG';
import react from './images/react.PNG';

const header = (
<header>
    <h1>Frontend Technologies</h1>
  </header>
)

const main = (
  <div className = "main">
    <img src = {html} alt = "HTML Logo" />
    <img src = {css} alt = "CSS Logo" />
    <img src = {javascript} alt = "JavaScript logo" />
    <img src = {react} alt = "React Logo" />
  </div>
)

const header2 = (
  <header>
    <h1>SUBSCRIBE</h1>
  </header>
)

const main2 = (
  <main>
    <p>Sign up with your email address to recieve news and updates</p>

    <form>
      <div className = "form-input">
        <input type = "text" placeholder = "First Name" />
        <input type = "text" placeholder = "Last Name" />
        <input type = "email" placeholder = "Email" />
      </div>

      <button type = "submit">subscribe</button>
    </form>
  </main>
)

const app = (
  <div className = "app">
    {header}
    {main}
  </div>
)

const app2 = (
  <div className = "app2">
    {header2}
    {main2}
  </div>
)



const rootElement = document.getElementById('root');

ReactDOM.render(app2, rootElement);