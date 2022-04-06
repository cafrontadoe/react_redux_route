import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Nosotros = () => {
  const [civilizationList, setCivilization] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
    );
    const list = await data.json();
    setCivilization(list.civilizations);
  };

  console.log("civilizationList", civilizationList);

  return (
    <Fragment>
      <h1>Civilizations</h1>
      <ul>
        {civilizationList.map((civilization) => (
          <li key={civilization.id}>
            <Link to={`/nosotros/${civilization.id}`}>
              {civilization.name} - {civilization.expansion}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Nosotros;
