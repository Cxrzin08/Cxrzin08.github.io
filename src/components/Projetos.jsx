import '../styles/Projetos.css'

// Importando imagens da pasta src/assets
import projeto1Img from '../assets/projeto1.jpg'
import projeto2Img from '../assets/projeto2.jpg'
import projeto4Img from '../assets/projeto4.jpg'
import projeto5Img from '../assets/projeto5.jpg'

function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Landing Pages Profissionais",
      descricao: "Landing pages moderna e responsiva para empresas, focada em conversão e usabilidade.",
      imagem: projeto1Img,
      tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 2,
      titulo: "Sistemas de Logins e Autenticação",
      descricao: "Sistema de autenticação completo com recuperação de senha e validação em tempo real.",
      imagem: projeto2Img,
      tecnologias: ["Python", "E-mail", "SQL"]
    },
    {
      id: 4,
      titulo: "Sistema de Automação de Envio de Mensagens em Massa pelo WhatsApp Web",
      descricao: "Sistema de automação para envio de mensagens em massa pelo WhatsApp Web utilizando PyAutoGUI, com interface de controle e agendamento de campanhas.",
      imagem: projeto4Img,
      tecnologias: ["Python", "PyAutoGUI", "Selenium"]
    },
    {
      id: 5,
      titulo: "Baixador de Músicas Desktop",
      descricao: "Aplicação desktop para download e conversão de músicas do Spotify e YouTube para formato MP3, com interface intuitiva e processamento local.",
      imagem: projeto5Img,
      tecnologias: ["Python", "SQLite", "FFmpeg"]
    }
  ]

  return (
    <section className="projetos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-text">Meus Projetos</span>
          </h2>
          <p className="section-subtitle">Confira alguns dos meus trabalhos mais recentes</p>
        </div>
        
        <div className="projetos-grid">
          {projetos.map(projeto => (
            <div key={projeto.id} className="projeto-card">
              <div className="projeto-imagem-container">
                <img 
                  src={projeto.imagem} 
                  alt={projeto.titulo}
                  className="projeto-imagem"
                  onError={(e) => {
                    console.error('Erro ao carregar imagem:', projeto.imagem);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              
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
        
        <div className="floating-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </div>
    </section>
  )
}

export default Projetos