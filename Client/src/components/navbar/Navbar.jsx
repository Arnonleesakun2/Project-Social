import { Link } from "react-router";
import { Button } from "../ui/button";
import Menu from "./Menu";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <section className="flex justify-between py-4 sticky top-0">
      <Link to="/">
        <Button variant="outline" className="text-2xl">
          Social
        </Button>
      </Link>
      <div className="flex gap-2 items-center">
        <Theme />
        <Menu />
      </div>
    </section>
  );
};

export default Navbar;
