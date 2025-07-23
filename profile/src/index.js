import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  )
}

function Avatar() {
  return (
      <img src="photos/profile.jpg" alt='Kittens' className='avatar'/>
  )
}

function Intro() {
  return (
    <div>
      <h1>Mr. Whiskers</h1>
      <p> Hi there! I'm Whiskers, a curious little kitten with a big passion for coding. 
      When I'm not chasing laser pointers or napping in sunbeams, I'm purring away at my keyboard,
      building paws-itively purrfect programs. I speak fluent <b>Python</b>, dabble in  <b>JavaScript</b>, and I’m always ready to debug a fur-midable challenge. 
      Whether it's developing a sleek cat-alog app or automating my treat dispenser, I'm your go-to feline for tech-savvy solutions! </p>
    </div>
  )
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill 
          skill='JS'
          color='red'
          emoji='💪'
        />
        <Skill
          skill='HTML/CSS'
          color='lightblue'
          emoji='💪'
        />
        <Skill
          skill='Python'
          color='yellow'
          emoji='😎'
        />
        <Skill
          skill='React'
          color='lightgreen'
          emoji='😎'
        />
    </div>
  )
}

function Skill(props) {
  return (
     <div style={{backgroundColor: props.color}} className='skill'>
      <span> {props.skill} </span>
      <span> {props.emoji} </span>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

