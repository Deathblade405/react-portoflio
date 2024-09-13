import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faDatabase, faGamepad, faLanguage, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skill-container">
        <div className="skill-box">
          <FontAwesomeIcon icon={faCode} className="skill-icon" />
          <h2>Web Development</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-box">
          <FontAwesomeIcon icon={faMobileAlt} className="skill-icon" />
          <h2>App Development</h2>
          <ul>
            <li>React Native</li>
            <li>Expo</li>
          </ul>
        </div>
        <div className="skill-box">
          <FontAwesomeIcon icon={faLanguage} className="skill-icon" />
          <h2>Languages</h2>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
          </ul>
        </div>
        <div className="skill-box">
          <FontAwesomeIcon icon={faGamepad} className="skill-icon" />
          <h2>Game Development</h2>
          <ul>
            <li>Unreal Engine</li>
            <li>Blender</li>
            <li>Unity</li>
          </ul>
        </div>
        <div className="skill-box">
          <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
          <h2>Database Management</h2>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="skill-box">
          <FontAwesomeIcon icon={faLightbulb} className="skill-icon" />
          <h2>Non-Technical Skills</h2>
          <ul>
            <li>Problem Solving</li>
            <li>Collaboration</li>
            <li>Analytical Skills</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
