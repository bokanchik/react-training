import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';


const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "begginer",
    color: "#FF3800"
  },
];

// based on level display one of emoji

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
      {skills.map(skill => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </div>
  )
}

function Skill({ skillObj }) {
  // let emoji = '💪';

  // if (skillObj.level === 'intermediate') {
  //   emoji = '👍';
  // } else if (skillObj.level === 'beginner') {
  //   emoji = '👶';
  // }

  return (
     <div style={{backgroundColor: skillObj.color}} className='skill'>
      <span> {skillObj.skill} </span>
      <span> 
        {skillObj.level === 'begginer' && '👶'}
        {skillObj.level === 'intermediate' && '👍'}
        {skillObj.level === 'advanced' && '💪'} 
      </span>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

