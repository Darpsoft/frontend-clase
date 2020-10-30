import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, Spin } from "antd";
import TextArea from "antd/lib/input/TextArea";

const initialState = {
  loading: false,
  contador: 0,
};

const requestEndpoint = {
  title: "Esto es una prueba",
  content: "Esto es una prueba de content",
};

export const Register = () => {
  const [state, setState] = useState(initialState);
  const [form] = Form.useForm();

  useEffect(() => {
    initialRequest();
    setTimeout(() => {
      consultarValoresFormulario();
    }, 4000);
  }, []);

  // const initialRequest = () => {
  //   console.log(state); // { contador: 0 }
  //   setState({ ...state, loading: true });
  //   setTimeout(() => {
  //     // "SE REALIZÓ UNA PETICIÓN A UN ENDPOINT"
  //     form.setFieldsValue(requestEndpoint);
  //     setState({ ...state, loading: false });
  //   }, 2000);
  //   setInterval(() => {
  //     setState((store) => ({ ...store, contador: store.contador + 1 }));
  //   }, 1000);
  //   console.log(state);
  // };

  const consultarValoresFormulario = () => {
    console.log(form.getFieldsValue());
    console.log(form.getFieldValue("title"));
    console.log(form.getFieldValue("country"));
    console.log(form.getFieldsValue(["title", "country"]));
  };

  const initialRequest = () => {
    setState({ ...state, loading: true });
    setTimeout(() => {
      // "SE REALIZÓ UNA PETICIÓN A UN ENDPOINT"
      form.setFieldsValue(requestEndpoint);
      setState({ ...state, loading: false });
    }, 2000);
  };

  console.log("RENDER COMPONENT", state);
  
  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (values) => {
    console.log(values);
  };

  return (
    <Spin spinning={state.loading} tip="Cargando cualquier cosa" size="large">
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form} name="basic" className="gx-signin-form gx-form-row0">
        <Form.Item rules={[{ required: true, message: "Ingresa un título para el post" }]} name="title">
          <Input placeholder="Título" />
        </Form.Item>

        <Form.Item rules={[{ required: true, message: "Ingresa el nombre de tu Pais" }]} name="country">
          <Input placeholder="Nombre de tu pais" />
        </Form.Item>

        <Form.Item rules={[{ required: true, message: "Ingresa una descripción" }]} name="content">
          <TextArea rows={4} placeholder="Contenido" />
        </Form.Item>

        <Form.Item rules={[{ required: true, message: "Selecciona tu Sexo" }]} name="gender">
          <Select placeholder="Selecciona tu sexo!!">
            <Select.Option value="Masculino">Masculino</Select.Option>
            <Select.Option value="Femenino">Femenino</Select.Option>
          </Select>
        </Form.Item>

        <Button onClick={() => form.submit()}>REGISTRAR</Button>
      </Form>
    </Spin>
  );
};

export default Register;
