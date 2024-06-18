import React from "react";
import {
  FormStyled,
  ImageStyled,
  LoginContainerStyled,
  TitleScreenStyled,
  TitleStyled,
} from "./LoginPage.styled";
import { IMAGES } from "../../assets";
import { Button, Form, Input } from "antd";

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("onFinishSignin", values);
    // auth.signin(values.username, values.password, () =>
    //   navigate("/", { replace: true }),
    // );
  };

  return (
    <LoginContainerStyled>
      <TitleStyled>Employee Polls</TitleStyled>
      <ImageStyled src={IMAGES.LoginLogo} alt="logo"></ImageStyled>
      <TitleScreenStyled>Login</TitleScreenStyled>
      <FormStyled
        name="login_employee_form"
        className="login-form"
        onFinish={onFinish}
        onChange={() => {
          // if (message) {
          //   dispatch(resetMessage());
          // }
        }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your User!" }]}
        >
          <Input placeholder="User" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your Password!" }]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>
        {/* {message ? (
          <Form.Item>
            <ErrorMessage className="ant-form-item-explain-error">
              {message}
            </ErrorMessage>
          </Form.Item>
        ) : null} */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Submit
          </Button>
        </Form.Item>
      </FormStyled>
    </LoginContainerStyled>
  );
};

export default LoginPage;
