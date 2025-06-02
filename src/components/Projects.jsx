import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Landing Page para E-commerce',
      description: 'Uma landing page otimizada para conversão, com design responsivo e integração com Google Analytics.',
      image: 'https://via.placeholder.com/300x200?text=Projeto+1',
    },
    {
      title: 'Sistema de Login Seguro',
      description: 'Sistema de autenticação com JWT, integrado a um backend em Node.js, com suporte a login social.',
      image: 'https://via.placeholder.com/300x200?text=Projeto+2',
    },
    {
      title: 'App de Envio de Mensagens',
      description: 'Aplicativo web para envio de mensagens automatizadas via WhatsApp, com integração de API.',
      image: 'https://via.placeholder.com/300x200?text=Projeto+3',
    },
    {
      title: 'Aplicativo Desktop',
      description: 'App desktop em Java para gerenciamento de tarefas, com interface gráfica e banco de dados local.',
      image: 'https://via.placeholder.com/300x200?text=Projeto+4',
    },
    {
      title: 'Automação de Processos',
      description: 'Script em Python para automação de tarefas repetitivas, como extração de dados de PDFs.',
      image: 'https://via.placeholder.com/300x200?text=Projeto+5',
    },
  ];

  return (
    <section className="projects">
      <h2>Projetos</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;