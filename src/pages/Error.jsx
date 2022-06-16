import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! page not found</h3>
        <p>We can´t seem yo find the page you´re looking for</p>
        <Link to="/">Go to Home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
