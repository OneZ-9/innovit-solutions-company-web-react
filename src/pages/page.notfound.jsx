import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="grid h-dvh grid-cols-2 items-center bg-primary p-20">
      <img
        src="../../public/svg/astronaut.svg"
        alt="astronaut-svg"
        className="w-fi h-fit"
      />

      <div className="text-white">
        <p className="mb-12 text-9xl font-extrabold">404</p>
        <p className="mb-4 text-3xl font-semibold">UH OH! You&apos;re lost.</p>
        <p className="mb-6 text-sm font-extralight">
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <Button variant="accent" className="text-primary">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
