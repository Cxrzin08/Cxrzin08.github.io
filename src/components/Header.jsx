import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="profile">
          <img 
            src={`${import.meta.env.BASE_URL}assets/minha-foto.jpg`}
            alt="Minha foto" 
            className="profile-photo"
            onError={(e) => {
              console.error('Erro ao carregar foto de perfil:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
          <div className="profile-info">
            <h1 className="name">Felipe Pereira</h1>
            <p className="age">17 Anos</p>
            <p className="role">Desenvolvedor Full Stack</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header