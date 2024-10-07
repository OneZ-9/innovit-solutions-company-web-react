import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="text-5xl font-semibold text-primary-foreground">
      <Link to="/#hero">Innovit</Link>
    </div>
  );
}

export default Logo;
