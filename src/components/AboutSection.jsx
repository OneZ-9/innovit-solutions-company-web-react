function AboutSection() {
  return (
    <section id="about" className="container">
      <h2 className="text-center font-semibold text-primary">About us</h2>
      <div className="grid grid-cols-2 justify-items-center gap-8">
        <div className="self-center">
          <h3>
            Discover Cutting-Edge IT Solutions Tailored for Your Business Needs
          </h3>
          <p>
            Our innovative web development services create stunning,
            user-friendly websites that drive engagement. With expert SEO
            strategies and application development, we empower your business to
            thrive in the digital landscape.
          </p>
        </div>
        <div>
          <img
            src="/images/about2.jpg"
            alt="about-image"
            className="w-[500px] rounded-sm border"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
