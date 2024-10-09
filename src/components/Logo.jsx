import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="text-4xl font-semibold text-primary-foreground lg:text-5xl">
      <Link to="/#hero">Innovit</Link>
    </div>
  );
}

export default Logo;
