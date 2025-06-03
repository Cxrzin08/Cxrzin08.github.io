import '../styles/Stack.css'

function Stack() {
  return (
    <section className="stack">
      <div className="container">
        <h2>Sobre Mim</h2>
        <div className="stack-content">
          <div className="stack-item">
            <h3>🌐 Front-end</h3>
            <p>Domino <strong>HTML, CSS, JavaScript</strong> e <strong>React</strong>. Crio interfaces modernas, responsivas e interativas para web.</p>
          </div>
          
          <div className="stack-item">
            <h3>⚙️ Back-end</h3>
            <p>Trabalho com <strong>Python, Java</strong> e <strong>Kotlin</strong>. Desenvolvo APIs robustas e sistemas eficientes.</p>
          </div>
          
          <div className="stack-item">
            <h3>🚀 O que eu faço</h3>
            <p>Crio <strong>páginas web, landing pages, sites completos</strong> e <strong>aplicações mobile/desktop</strong>. Especializado em soluções digitais que geram resultados.</p>
          </div>
          
          <div className="stack-item">
            <h3>💼 Serviços</h3>
            <p>Desenvolvimento de <strong>landing pages, automações, sistemas de login, apps</strong>, <strong>sistemas de envio de mensagens</strong> e <strong>aplicações desktop</strong>.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stack