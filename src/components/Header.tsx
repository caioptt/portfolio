import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Github, Menu, X } from "lucide-react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header-container">

        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          CP<span>.</span>
        </Link>

        <nav className={`navigation ${menuOpen ? "active" : ""}`}>

          <NavLink to="/" onClick={closeMenu}>
            Início
          </NavLink>

          <NavLink to="/projetos" onClick={closeMenu}>
            Projetos
          </NavLink>

          <NavLink to="/sobre" onClick={closeMenu}>
            Sobre
          </NavLink>

          <NavLink to="/contato" onClick={closeMenu}>
            Contato
          </NavLink>

          <a
            href="https://github.com/caioptt"
            target="_blank"
            rel="noopener noreferrer"
            className="github-header"
          >
            <Github size={20} />
            GitHub
          </a>

        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  )
}