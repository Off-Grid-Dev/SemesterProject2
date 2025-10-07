import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Dogs from "./pages/Dogs.tsx";
import Dog from "./pages/Dog.tsx";
import Layout from "./components/layout/Layout.tsx";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path={`/dogs/:id`} element={<Dog />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
