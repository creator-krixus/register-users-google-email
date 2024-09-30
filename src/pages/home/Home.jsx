import houseModern from "../../assets/houseModern.jpg";
import houseSnow from "../../assets/houseSnow.jpg";
import house from "../../assets/house.jpg";
import "./Home.scss"

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home__title">
          <div>Homerun</div>
          <div>Company</div>
        </div>
        <img className="home__portrain" src={houseModern} />
        <div className="home__description">
          <div>Elegant</div>
          <div>House</div>
          <div>Offered at</div>
          <div>$249.900</div>
        </div>
      </div>
      <div className="home__grid">
        <img src={house} />
        <img src={houseSnow} />
      </div>
    </>
  )
}

