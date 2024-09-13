import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'PCB DESIGN',
      description: 'Designed a PCB using SMD components for a compact and efficient circuit layout. Developed a user-friendly, durable casing for the setup, prioritizing ease of use and aesthetics. Ensured seamless integration between the circuit and casing for a streamlined final product.',
      image: 'project1.png', // Replace with actual image paths
    },
    {
      title: 'DBMS Mini Project for Sorting Groceries',
      description: 'Developed a user-friendly grocery shopping database management system to help users efficiently organize their shopping lists. Utilized front-end development tools to create an intuitive interface and integrated MySQL for robust data management. Focused on optimizing usability and system performance for a seamless user experience.',
      image: 'project2.jpeg', // Replace with actual image paths
    },
    {
      title: 'Character Design and Environment Design, Gamedev',
      description: 'Implemented AI for dynamic enemy movement with random positioning. Created detailed terrain for the game environment using Unreal Engine. Utilized both Blender and Unreal Engine for modeling and development to enhance game design and functionality.',
      image: 'project3.jpeg', // Replace with actual image paths
    },
    {
      title: 'Recreated FNAF Game',
      description: 'Recreated the popular Five Nights at Freddy’s game using Unreal Engine, incorporating AI implementations for realistic character behavior. Focused on replicating the game’s mechanics and atmosphere. Enhanced gameplay experience with immersive visuals and interactive environments.',
      image: 'project4.jpeg', // Replace with actual image paths
    },
    {
      title: 'Quantum Encrypted Chat Application',
      description: 'Developed a quantum-encrypted chat application to ensure secure communication. Utilized IBM APIs for quantum encryption and Django for the web framework. Focused on enhancing data privacy and safeguarding user interactions.',
      image: 'project5.jpg', // Replace with actual image paths
    },
    {
      title: 'Metro Parking App',
      description: 'Developed a system to replace the slip number process in metro parking with SMS notifications. Built the application using React Native for the front end and MongoDB with Node.js for backend integration. Streamlined parking operations and improved user convenience.',
      image: 'project6.jpg', // Replace with actual image paths
    },
    {
      title: 'OneBox Imitation',
      description: 'Developed a system imitating OneBox features, including email retrieval, replying, and deletion. Built using  React.js for a responsive and interactive user interface. Focused on replicating key functionalities to enhance user experience. ',
      image: 'project7.png', // Replace with actual image paths
    },
    {
      title: 'News Website',
      description: 'Created a news app using the GNews API for fetching news content and React.js for the front-end development. Focused on delivering a seamless and responsive user experience with up-to-date news articles.',
      image: 'project8.png', // Replace with actual image paths
    },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-description">
              {/* Additional content or details can be added here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
