// components/ProjectsTable.tsx
import React from 'react';

interface Project {
  name: string;
  skills: string[];
}

const ProjectsTable: React.FC = () => {
  // Replace the dummy data with your actual project data
  const projects: Project[] = [
    { name: 'Project 1', skills: ['React', 'Node.js'] },
    { name: 'Project 2', skills: ['JavaScript', 'CSS'] },
    // Add more projects as needed
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Skills Used</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr key={index}>
            <td>{project.name}</td>
            <td>{project.skills.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectsTable;
