import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="profile">
          <img 
            src="/img/minha-foto.jpg" 
            alt="Minha foto" 
            className="profile-photo"
          />
          <div className="profile-info">
            <h1 className="name">Seu Nome</h1>
            <p className="age">25 anos</p>
            <p className="role">Desenvolvedor Full Stack</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header