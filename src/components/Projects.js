import project1Img from '../assets/project1.jpg'; // Substitua por suas imagens
import project2Img from '../assets/project2.jpg';
import project3Img from '../assets/project3.jpg';
import project4Img from '../assets/project4.jpg';
import project5Img from '../assets/project5.jpg';

function Projects() {
  const projects = [
    {
      title: 'Landing Page para E-commerce',
      description: 'Uma landing page otimizada para conversão, com design responsivo e integração com Google Analytics.',
      image: project1Img,
    },
    {
      title: 'Sistema de Login Seguro',
      description: 'Sistema de autenticação com JWT, integrado a um backend em Node.js, com suporte a login social.',
      image: project2Img,
    },
    {
      title: 'App de Envio de Mensagens',
      description: 'Aplicativo web para envio de mensagens automatizadas via WhatsApp, com integração de API.',
      image: project3Img,
    },
    {
      title: 'Aplicativo Desktop',
      description: 'App desktop em Java para gerenciamento de tarefas, com interface gráfica e banco de dados local.',
      image: project4Img,
    },
    {
      title: 'Automação de Processos',
      description: 'Script em Python para automação de tarefas repetitivas, como extração de dados de PDFs.',
      image: project5Img,
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