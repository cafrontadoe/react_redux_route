import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const Civilization = () => {
  const { id } = useParams();

  const [civilization, setCivilization] = React.useState({});

  React.useEffect(() => {
    getCivilization();
  }, []);

  const getCivilization = async () => {
    const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
    const civilization = await data.json();
    setCivilization(civilization);
  };

  return <Fragment>
      <h6>Nombre: {civilization.name}</h6>
      <p>Expansion: {civilization.expansion}</p>
  </Fragment>;
};

export default Civilization;
