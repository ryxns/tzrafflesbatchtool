import Navbar from "./components/Navbar";
import ChangeQuantity from "./components/ChangeName";

const App = () => {
  return (
    <div>
    <div>
      <div style="z-index: 1; position: absolute; top: 0; left: 0; background-image:url(https://s3.us-west-2.amazonaws.com/henftz.xyz/tzraffles/banner.jpg);background-position:100px 200px; height:250px; width:500px;">&nbsp;
      </div>
      
      <div style="z-index: 1; position: absolute; top: 10; right: 10;">
        <Navbar />
      </div>
    </div>  
      <div className="container pt-10 mx-auto">
        <div className="flex justify-center">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-300 to-red-400">
            TzRaffles Batch Buy Tool
          </h1>
        </div>
        <div className="mt-20 flex justify-center">
          <ChangeQuantity />
        </div>

      </div>
    
    </div>
  );
};

export default App;
