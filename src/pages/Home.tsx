import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div className="grid gap-8 p-6 rounded-md border-2 border-white bg-amber-50 text-center">
        <h2 className="text-2xl font-semibold text-primary-700">Welcome!</h2>
        <div className="flex gap-3">
          <button className="py-2 px-4 rounded-md border-2 border-green-300 bg-green-800 hover:border-green-900 transition-colors duration-300 cursor-pointer uppercase text-amber-50 hover:text-amber-300">
            register
          </button>
          <button className="py-2 px-4 rounded-md border-2 border-green-300 bg-green-800 hover:border-green-900 transition-colors duration-300 cursor-pointer uppercase text-amber-50 hover:text-amber-300">
            login
          </button>
          <Link
            to="/dogs"
            className="py-2 px-4 rounded-md border-2 border-green-300 bg-green-800 hover:border-green-900 transition-colors duration-300 cursor-pointer uppercase text-amber-50 hover:text-amber-300 flex items-center justify-center">
            Dogs
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
