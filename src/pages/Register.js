import React, { useState, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import RegisterTemplate from "components/templates/RegisterTemplate";
import { UserStore, CommonStore } from "stores/index";

const Register = observer(props => {
  const userStore = useContext(UserStore);
  const commonStore = useContext(CommonStore);

  const [editable, setEditable] = useState({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    return commonStore.clearErrorList();
  }, [])

  const updateEditable = (key, value) => {
    setEditable({
      ...editable,
      [`${key}`]: value
    });
  };

  const submit = async e => {
    e.preventDefault();
    try {
      await userStore.registration({user: editable});
      props.history.push('./');
    }
    catch (err) {
      commonStore.setErrorList(err);
    }
  };

  const forms = [
    {
      type: "text",
      placeholder: "Username",
      value: editable.username,
      onChange: e => {
        updateEditable("username", e.target.value);
      }
    },
    {
      type: "email",
      placeholder: "Email",
      value: editable.email,
      onChange: e => {
        updateEditable("email", e.target.value);
      }
    },
    {
      type: "password",
      placeholder: "Password",
      value: editable.password,
      onChange: e => {
        updateEditable("password", e.target.value);
      }
    }
  ];

  return (
    <RegisterTemplate
      forms={forms}
      updateEditable={updateEditable}
      submit={submit}
    />
  );
});

export default Register;
