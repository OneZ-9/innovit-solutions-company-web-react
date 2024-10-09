import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Hero() {
  return (
    // <section
    //   id="hero"
    //   className="hero-img flex h-dvh items-center justify-center"
    // >
    <section id="hero" className="hero-img relative h-dvh">
      <div className="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* <div className="container"> */}
        <div className="max-lg:px-8 max-lg:text-center lg:w-1/2">
          <h1 className="text-white">
            Transforming Ideas into Digital Solutions
          </h1>
          <p className="mb-8 text-white lg:text-lg">
            At our innovative IT solutions company, we specialize in web
            development, SEO, and application development tailored to your
            unique needs. Let us help you navigate the digital landscape and
            drive your business forward.
          </p>
          <div className="flex items-center gap-8 max-lg:mt-12 max-lg:justify-center max-sm:flex-col-reverse">
            <Button
              asChild
              variant="btn-outline"
              size="lg"
              // className="sm:h-9 sm:px-3 md:h-11 md:px-8"
            >
              <Link to="#about"> Learn more</Link>
            </Button>
            <Button
              asChild
              variant="default"
              size="lg"
              // className="sm:h-9 sm:px-3 md:h-11 md:px-8"
            >
              <Link to="#">Start Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
