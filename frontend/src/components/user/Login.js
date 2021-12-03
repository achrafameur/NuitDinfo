import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Loader from "../layout/Loader";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userActions";
import image from "../../images/imagelogin.png";

const Login = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (isAuthenticated) {
      history.push(redirect);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <section className="h-100 gradient-form backgroundcolor">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100 shadow-lg" style={{borderRadius:"80px"}}>
                <div className="col-xl-10">
                  <div className="rounded-3 text-black">
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="card-body p-md-5 mx-md-4">
                          <div className="text-center">
                            <h2 className="mt-1 mb-5 pb-1 text-white">Content de vous revoir !</h2>
                          </div>

                          <form onSubmit={submitHandler}>

                            <div class="form-group">
                              <label for="exampleInputEmail1"> Addresse Email</label>
                              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrer adresse email" />
                              <small id="emailHelp" class="form-text text-muted">Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.</small>
                            </div>

                            <div class="form-group">
                              <label for="exampleInputPassword1">Mot de passe</label>
                              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Entrer Mot de passe" />
                            </div>

                            <div className="mb-3" style={{ float: "right" }}>
                              <Link
                                to="/password/forgot"
                                className="float-right mb-4 text-dark"
                              >
                                Mot de passe oublié ?
                              </Link>
                            </div>

                            <button
                              type="submit"
                              className="btn btn-block text-white"
                              style={{backgroundColor: "#190D3F"}}
                            >
                              Se connecter 
                            </button>

                            <div className="text-center mt-4">
                              <Link
                                to="/register"
                                className="float-right mb-3 text-dark"
                              >
                               Pas un membre ? <span style={{color: "#190D3F"}}>S'inscrire</span>
                              </Link>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-lg-6 d-flex align-items-centerp-0">
                        <img
                          src={image}
                          className="w-100 h-100 mt-4 py-5"
                          alt="signin"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Login;
