import { Cog, PanelsTopLeft, SearchCheck, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "../ServiceCard";

import data from "./../../data/services.json";

const { services } = data;

function ServicesSection() {
  return (
    <section id="services">
      <div className="container">
        <h2 className="text-center font-semibold text-primary">
          Explore Our Core Services
        </h2>
        <p className="text-center">
          At <span className="text-xl font-bold text-primary">innovIT</span>, we
          harness cutting-edge technologies to deliver tailored IT solutions
          that drive success. Explore our comprehensive services, including web
          development, SEO, and IT consulting, designed to elevate your
          business.
        </p>
      </div>

      <div className="container-full grid items-center justify-center gap-8 max-sm:px-4 sm:grid-cols-2 xl:mt-12 xl:grid-cols-[1fr_0.8fr_1fr]">
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
          className="col-start-2 row-span-2 row-start-1 w-fit rounded-sm shadow-md max-xl:hidden"
        />
      </div>

      <div className="container-full mt-12 bg-primary text-primary-foreground lg:py-28">
        <h3 className="text-center">
          Ready to elevate your business with innovative IT solutions?
          Let&apos;s bring your vision to life!
        </h3>
        <p className="mt-2 text-center font-extralight italic">
          Get started today and watch your digital transformation unfold...
        </p>

        <div className="mt-12 flex items-center justify-center gap-8 max-sm:flex-col-reverse">
          <Button variant="btn-outline" size="lg" asChild>
            <Link to="">Learn more</Link>
          </Button>
          <Button
            variant="accent"
            size="lg"
            asChild
            className="font-bold text-primary"
          >
            <Link to="#cta">Start Project &rarr;</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
