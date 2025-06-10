import { useState } from "react";
// import _ from "lodash";
import { getItems } from "../utils/helper";

function Product() {

  const [items, setItems] = useState(null);

  const getData = async () => {
    // const { getItems } = await import("../utils/helper");
    const finalItems = getItems();
    setItems(finalItems);
  };

  // const getItems = () => {
  //   const items = _.range(1, 10000).map((i) => <div key={i}>Item {i}</div>);
  //   return items;
  // }

  return (
    <div className="page">
      <img src="./images/product.jpg" alt="Product" />
      <button className="btn" onClick={getData}>Get Items</button>
    </div>
  );
}

export default Product;
