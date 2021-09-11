const { Link } = require("react-router-dom");
const { BsHouseDoorFill, BsFillBrightnessHighFill } = require("react-icons/bs");

function Nav({ title }) {
  return (
    <header>
      <div class="header">
        <h1>{title}</h1>
      </div>
      <nav>
        <Link to="/">
          <BsHouseDoorFill /> Home
        </Link>
        <Link to="/currentWeather">
          <BsFillBrightnessHighFill /> Weather
        </Link>
      </nav>
    </header>
  );
}

module.exports = Nav;
