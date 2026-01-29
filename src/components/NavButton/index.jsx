import './button-style.css'

export function NavButton({ children, targetId }) {
  function handleClick() {
    const section = document.getElementById(targetId);
    section?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <button className="button-nav" onClick={handleClick}>
      {children}
    </button>
  );
}
