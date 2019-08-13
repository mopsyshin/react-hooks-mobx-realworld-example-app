import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import InputForm from 'components/molecules/input-form/InputForm';
import ErrorList from 'components/organisms/error-list/ErrorList';

const SettingTemplate = observer(props => {
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <form>
              <fieldset>
                <InputForm
                  data={{
                    type: "text",
                    placeholder: "URL of profile picture",
                    value: props.editable.image,
                    onChange: e => {
                      props.updateEditable("image", e.target.value);
                    }
                  }}
                />
                <InputForm
                  data={{
                    type: "text",
                    placeholder: "Your username",
                    value: props.editable.username,
                    onChange: e => {
                      props.updateEditable("username", e.target.value);
                    }
                  }}
                />
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows="8"
                    value={props.editable.bio}
                    onChange={e => {
                      props.updateEditable("bio", e.target.value);
                    }}
                    placeholder="Short bio about you"
                  />
                </fieldset>
                <InputForm
                  data={{
                    type: "text",
                    placeholder: "Email",
                    value: props.editable.email,
                    onChange: e => {
                      props.updateEditable("email", e.target.value);
                    }
                  }}
                />
                <InputForm
                  data={{
                    type: "password",
                    placeholder: "Password",
                    value: props.editable.password,
                    onChange: e => {
                      props.updateEditable("password", e.target.value);
                    }
                  }}
                />
                <ErrorList/>
                <button onClick={props.submit} className="btn btn-lg btn-primary pull-xs-right">
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button className="btn btn-outline-danger" onClick={props.logout}>
              Or click here to logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SettingTemplate;
