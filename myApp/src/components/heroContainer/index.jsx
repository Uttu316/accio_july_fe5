import "./heroContainer.css";
import heroImg from "../../assets/hero.svg";
import { FaLongArrowAltRight as SaleIcon } from "react-icons/fa";

const HeroContainer = () => {
  const fistName = "AI";
  let isSale = true;
  //   const names = ["AI1", "AI2", "AI3"];
  const user = {
    name: "AI",
    age: 2,
  };
  return (
    <div className="heroContainer">
      <div className="heroImgBox">
        <img src={heroImg} className="heroImg" />
      </div>
      <div className="heroContent">
        <h2 className="heroHeadeing">
          Hello! I'm <span className="hero_Ai_text">{fistName}</span> Bot
        </h2>
        <p className="heroDescription">
          I provide service that you want for your project building in
          affordable prices!!
        </p>
        <button className={`sale_cta ${isSale ? "big_txt" : ""} `}>
          {isSale ? "Sale is live" : "Enroll for pre sale order"}
          <SaleIcon className="sale_icon" />
        </button>
        {/* {user} */}
        {/* {[<h1>ABC</h1>, <h2>XYz</h2>]} */}
      </div>
    </div>
  );
};

export default HeroContainer;
