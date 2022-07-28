import Navbar from "./components/Navbar";
import ChangeQuantity from "./components/ChangeName";

const App = () => {
  return (
    <div class="bg-blue-500 min-h-screen">
      <div class="bg-green-500 min-h-screen">
        <div class="bg-red-500 absolute top-0 left-0 min-h-screen">
          <img alt="" src='https://s3.us-west-2.amazonaws.com/henftz.xyz/tzraffles/banner.jpg' />
          <br />
          <ChangeQuantity />
        </div>      
        <div class="absolute top-10 right-10">
          <Navbar />
        </div>
      </div> 
    </div>
  );
};

export default App;
