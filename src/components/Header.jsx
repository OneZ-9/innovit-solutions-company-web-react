import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="container-full fixed left-0 top-0 z-50 flex h-[80px] items-center justify-between overflow-hidden bg-black/35 py-4 shadow-sm">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
