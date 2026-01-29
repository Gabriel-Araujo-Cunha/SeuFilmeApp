import "./header-style.css";
import { NavButton } from "../NavButton";

export function Header() {
  const links = [
    { label: "Início", id: "inicio" },
    { label: "Filmes", id: "filmes" },
    { label: "Séries", id: "series" },
    { label: "Login", id: "login" },
  ];

  return (
    <header className="header-principal">
      <nav className="barra-de-nav">
        <img src="/logo.png" alt="Logo" className="logo" />
        {links.map((link) => (
          <NavButton key={link.id} targetId={link.id}>
            {link.label}
          </NavButton>
        ))}
      </nav>
    </header>
  );
}
