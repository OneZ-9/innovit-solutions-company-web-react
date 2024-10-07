import { Cog, PanelsTopLeft, SearchCheck, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "../ServiceCard";
import data from "../../../public/data/services.json";

const { services } = data;

function ServicesSection() {
  return (
    <section id="services" className="container">
      <h2 className="text-center font-semibold text-primary">
        Explore Our Core Services
      </h2>
      <p className="text-center">
        At <span className="text-xl font-bold text-primary">innovIT</span>, we
        harness cutting-edge technologies to deliver tailored IT solutions that
        drive success. Explore our comprehensive services, including web
        development, SEO, and IT consulting, designed to elevate your business.
      </p>

      <div className="mt-24 grid grid-cols-[1fr_1.5fr_1fr] items-center justify-center gap-8">
        <ServiceCard
          service={services.at(0).service}
          content={services.at(0).content}
        >
          <PanelsTopLeft
            className="mx-auto mb-4 size-8"
            strokeWidth={1}
            absoluteStrokeWidth
          />
        </ServiceCard>

        <ServiceCard
          service={services.at(1).service}
          content={services.at(1).content}
        >
          <Cog
            className="mx-auto mb-4 size-8"
            strokeWidth={1}
            absoluteStrokeWidth
          />
        </ServiceCard>

        <ServiceCard
          service={services.at(2).service}
          content={services.at(2).content}
        >
          <SearchCheck
            className="mx-auto mb-4 size-8"
            strokeWidth={1}
            absoluteStrokeWidth
          />
        </ServiceCard>

        <ServiceCard
          service={services.at(3).service}
          content={services.at(3).content}
        >
          <ShieldCheck
            className="mx-auto mb-4 size-8"
            strokeWidth={1}
            absoluteStrokeWidth
          />
        </ServiceCard>

        <img
          src="/images/about2.jpg"
          alt="about-image"
          className="col-start-2 row-span-2 row-start-1 w-fit rounded-sm shadow-md"
        />
      </div>

      <p className="mt-24 text-center">
        Ready to elevate your business with innovative IT solutions? Let&apos;s
        bring your vision to life!
      </p>
      <p className="mt-2 text-center">
        Get started today and watch your digital transformation unfold.
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <Button variant="outline" size="lg">
          <Link to="">Learn more</Link>
        </Button>
        <Button variant="ghost-start" size="lg">
          <Link to="#cta">Start Project &rarr;</Link>
        </Button>
      </div>
    </section>
  );
}

export default ServicesSection;
