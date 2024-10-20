import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <h1>404 - Page not found </h1>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default Notfound;
