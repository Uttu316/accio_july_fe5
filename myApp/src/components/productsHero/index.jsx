import "./heroContainer.css";
import heroImg from "../../assets/hero.svg";
import { FaArrowDown as SaleIcon } from "react-icons/fa";

const ProductsHero = () => {
  const fistName = "AI";
  let isSale = true;
  //   const names = ["AI1", "AI2", "AI3"];
  const user = {
    name: "AI",
    age: 2,
  };
  return (
    <div className="products_container">
      <div className="heroImgBox">
        <img src={heroImg} className="heroImg" />
      </div>
      <div className="heroContent">
        <h2 className="heroHeadeing">
          Hello! I'm <span className="hero_Ai_text">{fistName}</span> Bot
        </h2>
        <p className="heroDescription">
          Check our merchandise products, you will love them
        </p>
        <button className={`sale_cta ${isSale ? "big_txt" : ""} `}>
          Checkout products below
          <SaleIcon className="sale_icon" />
        </button>
        {/* {user} */}
        {/* {[<h1>ABC</h1>, <h2>XYz</h2>]} */}
      </div>
    </div>
  );
};

export default ProductsHero;
