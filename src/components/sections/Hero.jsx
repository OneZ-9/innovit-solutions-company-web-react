import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Hero() {
  return (
    <section id="hero" className="hero-img container relative h-dvh">
      <div className="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-1/2">
          <h1 className="text-white">
            Transforming Ideas into Digital Solutions
          </h1>
          <p className="mb-8 text-white">
            At our innovative IT solutions company, we specialize in web
            development, SEO, and application development tailored to your
            unique needs. Let us help you navigate the digital landscape and
            drive your business forward.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="btn-outline" size="lg">
              <Link to="#about"> Learn more</Link>
            </Button>
            <Button variant="default" size="lg">
              <Link to="#cta">Start Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
