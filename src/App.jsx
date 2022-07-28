import Navbar from "./components/Navbar";
import ChangeQuantity from "./components/ChangeName";

const App = () => {
  return (
    <div>
      <img src="https://s3.us-west-2.amazonaws.com/henftz.xyz/tzraffles/banner.jpg" />
      <Navbar />
      <div className="container pt-10 mx-auto bg-[url('./components/banner.jpg')]">
        <div className="flex justify-center bg-[url('./components/banner.jpg')]">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-300 to-red-400">
            TzRaffles Batch Buy Tool
          </h1>
        </div>
        <div className="mt-20 flex justify-center bg-[url('./components/banner.jpg')]">
          <ChangeQuantity />
        </div>

      </div>
    
    </div>
  );
};

export default App;
