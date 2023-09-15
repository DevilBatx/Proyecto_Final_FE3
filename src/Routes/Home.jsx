import React, { useEffect, useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {


  const { state, dispatch, dataApi } = useContext(ContextGlobal)

  const getDentist = async () => {
    await dataApi("https://jsonplaceholder.typicode.com/users");
  }

  useEffect(() => {
    getDentist();
  },[state.data]);

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {Array.isArray(state.data) && state.data.map((dentist) => (
          <Card key= {dentist.id} data={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
