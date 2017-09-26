import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import renderField from '../../Utils/renderField';


// Client-side validation informations
const validate = data => {
  const errors = {};
    if(!data.username) errors.username = "Entrez votre email ou numéro de téléphone pour vous connecter";
    if(!data.password) errors.password = "Le Mot de passe ne doit pas etre vide";
    return errors;
};


const OnSubmitted = (values) => {
  console.log(values);
};


const SignInForm = ({ handleSubmit }) => (
            <form onSubmit={handleSubmit(OnSubmitted)}>
                <div className="panel panel-body login-form">
                    <div className="text-center">
                        <div>
                            <img src={`${process.env.PUBLIC_URL}assets/images/logo_icon_dark.png`} alt=""/>
                        </div>
                        <h5 className="content-group-lg">
                            <span>Smart Soft</span>
                            <small className="display-block">Entrez vos informations de connexion</small>
                        </h5>
                    </div>
                    <Field
                        name="username"
                        type="text"
                        component={renderField}
                        label="@Email ou numero de téléphone"
                        classType="icon-user text-muted"
                    />
                    <Field
                        name="password"
                        type="password"
                        component={renderField}
                        label="@Mot de passe"
                        classType="icon-lock2 text-muted"
                    />
                    <div className="form-group login-options">
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="checkbox-inline" htmlFor="Memoriser mes informations">
                                    <input type="checkbox" className="styled" checked="" />
                                    Mémoriser mes informations
                                </label>
                            </div>
                            <div className="col-sm-6 text-right">
                                <a>Mot de passe oublié ?</a>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn bg-blue btn-block">
                            Se connecter <i className="icon-circle-left2 position-right"/>
                        </button>
                    </div>
                    <div className="content-divider text-muted form-group"><span/></div>
                    <span className="help-block text-center no-margin">{"By continuing, you're confirming that you've read our"} <a> {"Terms & Conditions"}</a> and <a>Cookie Policy</a></span>
                </div>
            </form>
);

SignInForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'SignInValidation',
    validate
})(SignInForm);