import React from "react";
import { Link } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import InputForm from "components/molecules/input-form/InputForm";
import ErrorList from "components/organisms/error-list/ErrorList";

const LoginTemplate = observer(props => {
  const renderForms = () => {
    return props.forms.map((data, index) => {
      return <InputForm data={data} key={index} />;
    });
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to="./register">Need an account?</Link>
            </p>
            <ErrorList/>
            <form>
              {renderForms()}
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                onClick={props.submit}
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LoginTemplate;