import React from "react";
import { useState } from "react";

const [first, setfirst] = useState(second)



const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <input type="text" placeholder="Nombre completo"/>
        <input type="email" placeholder="Ingrese su email" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
