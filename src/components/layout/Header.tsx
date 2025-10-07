import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-primary-500 text-white shadow">
      <div className="md:max-w-[1140px] md:mx-auto sm:mx-[1rem] p-4 flex items-center justify-between flex-wrap">
        <Link
          to={"/"}
          className="font-bold text-2xl tracking-tight hover:text-primary-200 transition-colors text-secondary-100"></Link>
        <nav className="flex gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/dogs"}>Dogs</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
