import '../styles/Projetos.css'

function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Landing Page Corporativa",
      descricao: "Landing page moderna e responsiva para empresa de tecnologia, com formulário de contato e integração com APIs.",
      imagem: "/img/projeto1.jpg",
      tecnologias: ["React", "CSS3", "JavaScript"]
    },
    {
      id: 2,
      titulo: "Sistema de Login Seguro",
      descricao: "Sistema de autenticação completo com JWT, recuperação de senha e validação em tempo real.",
      imagem: "/img/projeto2.jpg",
      tecnologias: ["Python", "React", "JWT"]
    },
    {
      id: 3,
      titulo: "App de Mensagens",
      descricao: "Aplicativo de mensagens em tempo real com chat, notificações push e interface intuitiva.",
      imagem: "/img/projeto3.jpg",
      tecnologias: ["Kotlin", "Firebase", "WebSocket"]
    },
    {
      id: 4,
      titulo: "Sistema de Automação",
      descricao: "Plataforma de automação de processos empresariais com dashboard administrativo e relatórios.",
      imagem: "/img/projeto4.jpg",
      tecnologias: ["Java", "Spring Boot", "React"]
    },
    {
      id: 5,
      titulo: "App Desktop de Gestão",
      descricao: "Aplicação desktop para gestão de inventário com banco de dados local e exportação de relatórios.",
      imagem: "/img/projeto5.jpg",
      tecnologias: ["Java", "JavaFX", "SQLite"]
    }
  ]

  return (
    <section className="projetos">
      <div className="container">
        <h2>Meus Projetos</h2>
        <div className="projetos-grid">
          {projetos.map(projeto => (
            <div key={projeto.id} className="projeto-card">
              <img 
                src={projeto.imagem} 
                alt={projeto.titulo}
                className="projeto-imagem"
              />
              <div className="projeto-info">
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                <div className="tecnologias">
                  {projeto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projetos