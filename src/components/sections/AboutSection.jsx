import { Goal, TrendingUp } from "lucide-react";

function AboutSection() {
  return (
    <section id="about">
      <h2 className="text-center font-semibold text-primary">About us</h2>
      <div className="container grid items-center justify-items-center gap-y-12 lg:grid-cols-2 lg:gap-12">
        <div>
          <h3>
            Discover Cutting-Edge IT Solutions Tailored for Your Business Needs
          </h3>
          <p>
            Our innovative web development services create stunning,
            user-friendly websites that drive engagement. With expert SEO
            strategies and application development, we empower your business to
            thrive in the digital landscape.
          </p>
          <div className="mx-2 mt-6 flex gap-6">
            <a href="#">
              <ion-icon
                name="mail-outline"
                size="large"
                class="icon-contact-about"
              />
            </a>
            <a href="#">
              <ion-icon
                name="logo-linkedin"
                size="large"
                class="icon-contact-about"
              />
            </a>
            <a href="#">
              <ion-icon
                name="logo-facebook"
                size="large"
                class="icon-contact-about"
              />
            </a>
            <a href="#">
              <ion-icon
                name="logo-whatsapp"
                size="large"
                class="icon-contact-about"
              />
            </a>
          </div>
        </div>

        <img
          src="/images/about2.jpg"
          alt="about-image"
          className="w-3/4 rounded-sm max-lg:row-start-1"
        />
      </div>

      <div className="mt-20 bg-primary px-12 py-12 text-center text-white lg:px-40 lg:py-28">
        <div className="mb-20 flex flex-col items-center justify-center">
          <Goal className="mb-4 size-10" strokeWidth={1} absoluteStrokeWidth />
          <h3 className="font-semibold">Our Vision</h3>
          <p className="text-lg font-extralight italic">
            &quot;To be the trusted IT partner for companies seeking innovative
            solutions that help them thrive in an ever-changing digital
            landscape.&quot;
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <TrendingUp
            className="mb-4 size-10"
            strokeWidth={1}
            absoluteStrokeWidth
          />
          <h3 className="font-semibold">Our Mission</h3>
          <p className="text-lg font-extralight italic">
            &quot;We aim to empower businesses of all sizes with seamless and
            efficient IT solutions that boost productivity, enhance digital
            presence, and ensure sustainable growth. We believe in building
            long-lasting partnerships based on trust, innovation, and excellent
            customer service.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
