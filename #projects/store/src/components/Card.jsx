import { AiFillStar } from "react-icons/ai";
import { IoBagHandle } from "react-icons/io5";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {/* <AiFillStar className="rating-star" /> */}
          {[...Array(star)].map((_, index) => (
            <AiFillStar key={index} className="rating-star" />
          ))}

          <span className="total-reviews">{reviews}</span>
        </section>

        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> <span>${newPrice}</span>
          </div>

          <div className="bag">
            <IoBagHandle className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
