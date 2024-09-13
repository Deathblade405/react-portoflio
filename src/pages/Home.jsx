import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [isErasing, setIsErasing] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const phrases = [
    'Hi there, I am Ajith Narayana K',
    'I am a Web Developer',
    'I am a Game Developer',
    'I am a Backend Developer',
  ];

  const typingSpeed = 100; // Typing speed in milliseconds
  const erasingSpeed = 50; // Erasing speed in milliseconds
  const delayBetweenPhrases = 1000; // Delay between phrases before starting erasing

  useEffect(() => {
    // Typing effect logic
    const handleTyping = () => {
      if (isErasing) {
        if (charIndex > 0) {
          // Continue erasing
          setTimeout(() => {
            setText((prev) => prev.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          }, erasingSpeed);
        } else {
          // Move to the next phrase after erasing
          setIsErasing(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        if (charIndex < phrases[phraseIndex].length) {
          // Continue typing
          setTimeout(() => {
            setText((prev) => prev + phrases[phraseIndex][charIndex]);
            setCharIndex(charIndex + 1);
          }, typingSpeed);
        } else {
          // Pause after typing before erasing starts
          setTimeout(() => setIsErasing(true), delayBetweenPhrases);
        }
      }
    };

    handleTyping();
  }, [charIndex, isErasing, phraseIndex]);

  return (
    <div className="home">
      <video autoPlay muted loop className="background-video">
        <source src="background1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="blue-overlay"></div>
      <div className="content">
        <div className="typing-container">
          <div className="typing-text">{text}</div>
        </div>
        <p>Explore my projects, skills, and more.</p>
      </div>
    </div>
  );
};

export default Home;
