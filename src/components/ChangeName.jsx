import { useState } from "react";
import { changeQuantity } from "../utils/wallet";

export default function ChangeQuantity(props) {
  const [quantity, setQuantity] = useState("");

  return (
    <div>
    <div>
    <center>
    <font 
      color="white"
      size="6"
    >
    TzRaffle #2 Tickets
    </font>
    <font 
      color="white"
    >
    <br />
    2 xtz each
    <br />
    <img
      src="https://s3.us-west-2.amazonaws.com/henftz.xyz/tzraffles/ticket2.png"
      width="300"
    />    
    </font>
    </center>
    </div>
    <div>  
    <center>
    <input
        type="text"
        name="name"
        placeholder="Number of Tickets"
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
        value={quantity}
      />&nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          changeQuantity(quantity);
        }}
        className="bg-pink-500 px-6 py-3 rounded-sm text-xs font-semibold uppercase text-white cursor-pointer"
      >
        Batch Buy
      </button>
    </center>
    </div>
    <div>
    <br />
    <br />
    <font 
      color="white"
    > 
    made with &lt;3 by ryxns    
    </font>
    </div>
  </div>
  );
}
