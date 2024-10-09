import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function ServiceCard({ children, service, content }) {
  return (
    <article className="group relative self-stretch justify-self-stretch bg-blue-50 p-8 pb-16 text-center shadow-md transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground">
      {children}
      <h3>{service}</h3>
      <p className="text-base font-light">{content}</p>

      <Button
        asChild
        variant="link"
        className="left-50 absolute bottom-3 -translate-x-1/2 group-hover:text-accent"
      >
        <Link>Learn more &rarr;</Link>
      </Button>
    </article>
  );
}

export default ServiceCard;
