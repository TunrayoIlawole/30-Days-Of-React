import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import me from './images/me.jpeg';

const imageHeader = (
  <div className = "header">
    <img src = {me} alt = "Motunrayo Ilawole" />
    <h1>Motunrayo Ilawole</h1>
    <p>Student, Nigeria</p>
  </div>
)

const main = (
  <main>
    <h2>Skills</h2>
    <div className = "skills">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>React</span>
      <span>PHP</span>
      <span>Node</span>
      <span>MongoDB</span>
      <span>MYSQL</span>
      <span>GraphQL</span>
      <span>Git</span>
    </div>
  </main>
)

const footer = (
  <p>&copy; Joined on Aug 20, 2020</p>
)

const app = (
  <div className = "app">
    {imageHeader}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);
