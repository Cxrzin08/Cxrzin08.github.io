import '../styles/Stack.css'

function Stack() {
  return (
    <section className="stack">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-text">Sobre Mim</span>
          </h2>
          <p className="section-subtitle">Desenvolvedor apaixonado por criar soluções digitais incríveis</p>
        </div>
        
        <div className="stack-content">
          <div className="stack-item frontend">
            <div className="stack-icon">
              <div className="icon-glow"></div>
              <span className="emoji">🌐</span>
            </div>
            <div className="stack-info">
              <h3>Front-end</h3>
              <p>Domino <strong>HTML, CSS, JavaScript</strong> e <strong>React</strong>. Crio interfaces modernas, responsivas e interativas para web.</p>
              <div className="tech-tags">
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React</span>
              </div>
            </div>
          </div>
          
          <div className="stack-item backend">
            <div className="stack-icon">
              <div className="icon-glow"></div>
              <span className="emoji">⚙️</span>
            </div>
            <div className="stack-info">
              <h3>Back-end</h3>
              <p>Trabalho com <strong>Python, Java</strong> e <strong>Kotlin</strong>. Desenvolvo APIs robustas e sistemas eficientes.</p>
              <div className="tech-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Kotlin</span>
                <span className="tech-tag">APIs</span>
              </div>
            </div>
          </div>
          
          <div className="stack-item development">
            <div className="stack-icon">
              <div className="icon-glow"></div>
              <span className="emoji">🚀</span>
            </div>
            <div className="stack-info">
              <h3>O que eu faço</h3>
              <p>Crio <strong>páginas web, landing pages, sites completos</strong> e <strong>aplicações mobile/desktop</strong>. Especializado em soluções digitais que geram resultados.</p>
              <div className="tech-tags">
                <span className="tech-tag">Web Apps</span>
                <span className="tech-tag">Landing Pages</span>
                <span className="tech-tag">Mobile</span>
                <span className="tech-tag">Desktop</span>
              </div>
            </div>
          </div>
          
          <div className="stack-item services">
            <div className="stack-icon">
              <div className="icon-glow"></div>
              <span className="emoji">💼</span>
            </div>
            <div className="stack-info">
              <h3>Serviços</h3>
              <p>Desenvolvimento de <strong>landing pages, automações, sistemas de login, apps</strong>, <strong>sistemas de envio de mensagens</strong> e <strong>aplicações desktop</strong>.</p>
              <div className="tech-tags">
                <span className="tech-tag">Automações</span>
                <span className="tech-tag">Sistemas</span>
                <span className="tech-tag">Mensageria</span>
                <span className="tech-tag">Apps</span>
              </div>
            </div>
          </div>
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

export default Stack