import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="container fixed left-0 top-0 z-50 flex h-[80px] w-full items-center justify-between bg-black/35 py-4 shadow-sm">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
