import React, { useEffect, useReducer } from "react";
import { Button, Input } from "antd";

const ColorBlue = ({ nombre = "", apellido = "", cedula = "", edad = 0 }) => {
  return (
    <div style={{ width: "100%", backgroundColor: "blue", marginTop: 50 }}>
      <h1>{nombre}</h1>
      <h1>{apellido}</h1>
      <h1>{cedula}</h1>
      <h1>{edad}</h1>
    </div>
  );
};

const ColorRed = () => {
  return <div style={{ width: "100%", height: 50, backgroundColor: "red" }}></div>;
};

const nameMeeting = ["Luis Arevalo", "Abrahan Sosa", "Victor Corsino", "Jessicka Moya"];

const initialState = {
  email: "pedro@gmail.com",
  password: "564AS74D465",
  contador: 0,
  componentMount: false,
  color: "blue",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "AUMENTAR":
      return { ...state, contador: ++state.contador };
    case "DISMINUIR":
      return { ...state, contador: --state.contador };
    default:
      return { ...state, ...action };
  }
};
const Login = () => {
  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {
    initialRequest();
    // const interval = setInterval(() => {
    //   console.log("Se ejecutó");
    // }, 1000);
    // console.log("Se renderizó");

    return () => {
      dismountComponent();
      // clearInterval(interval);
    };
  }, [state.componentMount]);

  const changeState = () => {
    setState({
      ...state,
      email: "gabriel@gmail.com",
    });
  };
  const handleInput = (values) => {
    setState({ email: values.target.value });
  };
  const initialRequest = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((values) => values.json())
      .then((values) => console.log(values));
  };
  const dismountComponent = () => {
    console.log("SE DESMONTÓ EL COMPONENTE");
  };

  console.log(state);

  if (state.color === "red") {
    return <ColorRed />;
  }

  const dateComponent = {
    nombre: "Pedro",
    apellido: "Fuentes",
    cedula: "1245656",
    edad: 18,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img src="/Login/javascript.png" style={{ width: 300, height: 300 }} />
      <h1>Hello World</h1>

      <h1>CONTADOR: {state.contador}</h1>
      <Input placeholder="Your name" onChange={handleInput} />

      <Button onClick={() => setState({ type: "AUMENTAR" })}>AUMENTAR</Button>

      <Button onClick={() => setState({ type: "DISMINUIR" })}>DISMINUIR</Button>

      <Button onClick={() => setState({ type: "DISMINUIR" })}>DISMINUIR</Button>

      <Button type="primary" onClick={() => setState({ color: "red" })}>
        CAMBIAR COLOR RED
      </Button>

      <ul>
        {nameMeeting.map((e, index) => (
          <li key={index}>
            <h1>{e}</h1>
          </li>
        ))}
      </ul>

      <Button onClick={changeState}>ACTUALIZAR ESTADO</Button>
      <ColorBlue {...dateComponent} />
    </div>
  );
};

Login.getInitialProps = () => {};

export default Login;
