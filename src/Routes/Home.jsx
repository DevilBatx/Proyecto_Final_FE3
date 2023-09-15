import React, { useEffect, useContext } from "react";
import { useState } from "react";
import Card from "../Components/Card";
import { useParams } from "react-router-dom";
import { ContextGlobal, ContextProvider } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const params = useParams();

  const { state, dispatch, dataApi } = useContext(ContextGlobal)

  // const getDentist = async () => {
  //   const result = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await result.json();
  //   setDentists(data);
  // };

  const getDentist = async () => {
    await dataApi("https://jsonplaceholder.typicode.com/users");
    setDentists(state.data);
    console.log(state.data);
  }

  useEffect(() => {
    getDentist();
  },[]);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Card key= {dentist.id} data={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
