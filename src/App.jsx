import Navbar from "./components/Navbar";
import ChangeQuantity from "./components/ChangeName";

const App = () => {
  return (
    <div>
      <div>
        <div class="bg-black absolute top-0 left-0 min-h-screen">
          <img alt="" src='https://s3.us-west-2.amazonaws.com/henftz.xyz/tzraffles/tzraffle-bg.png' />
        </div>      
        <div class="absolute top-10 right-10">
          <Navbar />
        </div>
        <div class="absolute inset-x-0 bottom-14">
          <ChangeQuantity />
        </div>
        <div class="absolute inset-x-0 bottom-0">
          made by ryxns
        </div>
      </div> 
    </div>
  );
};

export default App;
