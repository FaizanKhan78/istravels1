import AllRoute from "./components/AllRoute";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

const App = () =>
{
  return (
    <>
      <div className="text-white">
        <Navbar />
      </div>
      <div className="w-full max-w-7xl mt-0 mr-auto mb-0 ml-auto pt-0 pr-0 pb-5 pl-5 text-white">
        <AllRoute />
      </div>
      <Footer />
    </>
  );
};

export default App;