import { useEffect } from "react";
import Logo from "./Logo";
import { Separator } from "./ui/separator";

function Footer() {
  useEffect(() => {
    const yearEl = document?.querySelector(".year");
    const currentYear = new Date().getFullYear();
    yearEl.textContent = currentYear;
  }, []);

  return (
    <footer className="container-full grid grid-cols-2 gap-12 bg-primary py-12 text-primary-foreground max-sm:gap-y-16 md:gap-28 lg:grid-cols-[2fr_2fr_1fr_1fr]">
      <div className="mt-4">
        <h4 className="mb-8">Company</h4>

        <div className="flex flex-col gap-6">
          <a href="#" className="text-sm font-light text-secondary">
            About Innovit
          </a>
          <a href="#" className="text-sm font-light text-secondary">
            Partners
          </a>
          <a href="#" className="text-sm font-light text-secondary">
            Careers
          </a>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="mb-6">Resources</h4>

        <div className="flex flex-col gap-6">
          <a href="#" className="text-sm font-light text-secondary">
            Blog
          </a>
          <a href="#" className="text-sm font-light text-secondary">
            Help center
          </a>
          <a href="#" className="text-sm font-light text-secondary">
            Privacy & terms
          </a>
        </div>
      </div>

      <div className="max-sm:col-span-2 lg:row-start-1">
        <Logo />
        <div className="mb-20 mt-4 flex gap-6">
          <a href="#">
            <ion-icon name="mail-outline" size="small" />
          </a>
          <a href="#">
            <ion-icon name="logo-linkedin" size="small" />
          </a>
          <a href="#">
            <ion-icon name="logo-facebook" size="small" />
          </a>
          <a href="#">
            <ion-icon name="logo-whatsapp" size="small" />
          </a>
        </div>
        <Separator className="h-[0.5px] bg-secondary" />
        <p className="mt-4 text-sm font-light text-secondary">
          Copyright &copy; <span className="year">year</span> by Ominifood Inc.
          All right reserved.
        </p>
      </div>

      <div className="mt-4 max-sm:col-span-2 max-sm:col-start-1 max-sm:row-start-2 lg:row-start-1">
        <h4 className="mb-8">Contact us</h4>
        <address>
          <p className="mb-16 text-sm font-light text-secondary">
            1234 Innovation Street, Tech City, Sri Lanka
          </p>
          <p className="flex flex-col gap-0 text-sm font-light text-secondary">
            <a href="tel:+123-456-7890">
              <span>Tel:</span> +123-456-7890
            </a>
            <br />
            <a href="mailto:contact@innovitsolutions.com">
              <span>Email:</span> contact@innovitsolutions.com
            </a>
          </p>
        </address>
      </div>
    </footer>
  );
}

export default Footer;
