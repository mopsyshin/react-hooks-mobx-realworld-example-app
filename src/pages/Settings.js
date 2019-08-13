import React, { useState, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import SettingTemplate from "components/templates/SettingTemplate";
import { UserStore, CommonStore } from "stores/index";

const Settings = observer(props => {
  const userStore = useContext(UserStore);
  const commonStore = useContext(CommonStore);

  const [editable, setEditable] = useState({
    username: "",
    image: "",
    bio: "",
    email: "",
    password: ""
  });

  const updateEditable = (key, value) => {
    setEditable({
      ...editable,
      [key]: value
    });
  };

  const submit = async e => {
    e.preventDefault();
    try {
      await userStore.updateUser({user: editable});
      props.history.push('./');
    }
    catch (err) {
      commonStore.setErrorList(err);
    }
  }

  const logout = () => {
    userStore.logout();
    props.history.push('./');
  }

  useEffect(() => {
    async function fetchData() {
      await userStore.getCurrentUser();
      setEditable({
        username: userStore.currentUser.username || '',
        image: userStore.currentUser.image || '',
        bio: userStore.currentUser.bio || '',
        email: userStore.currentUser.email || '',
        password: '',
      });
    }
    fetchData();
    return commonStore.clearErrorList();
  }, []);

  return (
    <div>
      <SettingTemplate editable={editable}
                       updateEditable={updateEditable}
                       submit={submit}
                       logout={logout}/>
    </div>
  );
});

export default Settings;
