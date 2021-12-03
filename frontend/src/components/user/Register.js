import React, { Fragment, useState, useEffect } from "react";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../actions/userActions";
import image from "../../images/imagelogin.png";
const Register = ({ history }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.jpg"
  );

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/video");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("avatar", avatar);

    dispatch(register(formData));
  };

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      {/* <div className="row wrapper">
        <div className="col-10 col-lg-5 card">
          <form onSubmit={submitHandler} encType="multipart/form-data">
            <h1 className="mb-4">Register</h1>

            <div className="form-group">
              <label htmlFor="email_field">Name</label>
              <input
                type="name"
                id="name_field"
                className="form-control"
                name="name"
                value={name}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="avatar_upload">Avatar</label>
              <div className="d-flex align-items-center">
                <div>
                  <figure className="avatar mr-3 item-rtl">
                    <img
                      src={avatarPreview}
                      className="rounded-circle"
                      alt="Avatar Preview"
                    />
                  </figure>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    name="avatar"
                    className="custom-file-input"
                    id="customFile"
                    accept="iamges/*"
                    onChange={onChange}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose Avatar
                  </label>
                </div>
              </div>
            </div>

            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-2 border-0"
              style={{ backgroundColor: "#5E72E4" }}
              disabled={loading ? true : false}
            >
              REGISTER
            </button>
          </form>
        </div>
      </div> */}
      <section className="h-100 gradient-form backgroundcolor ">
        <div className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center h-100 shadow-lg"
            style={{ borderRadius: "80px" }}
          >
            <div className="col-xl-10">
              <div className="rounded-3 text-black">
                <div className="row g-0">
                <div className="col-lg-6 d-flex align-items-centerp-0 mt-5">
                    <img
                      src={image}
                      className="w-100 h-100 "
                      alt="signin"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <form
                        onSubmit={submitHandler}
                        encType="multipart/form-data"
                      >

                        <div className="form-group">
                          <label htmlFor="email_field">Nom</label>
                          <input
                            type="name"
                            id="name_field"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={onChange}
                            placeholder="Entrer votre nom "
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email_field">Email</label>
                          <input
                            type="email"
                            id="email_field"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Entrer votre email"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password_field">Mot de Passe</label>
                          <input
                            type="password"
                            id="password_field"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder="Entrer votre mot de passe "
                          />
                        </div>

                        {/* <label for="formFileLg" class="form-label">Large file input example</label>
											<input class="form-control form-control-lg" id="formFileLg" type="file" /> */}
                        <div className="form-group">
                          <label htmlFor="avatar_upload">Avatar</label>
                          <div className="d-flex align-items-center">
                            <div>
                              <figure className="avatar mr-3 item-rtl">
                                <img
                                  src={avatarPreview}
                                  className="rounded-circle"
                                  alt="Avatar Preview"
                                />
                              </figure>
                            </div>
                            <div className="custom-file">
                              <input
                                type="file"
                                name="avatar"
                                className="custom-file-input"
                                id="customFile"
                                accept="iamges/*"
                                onChange={onChange}
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="customFile"
                              >
                                Choisir un Avatar
                              </label>
                            </div>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-block text-white mt-4"
                          disabled={loading ? true : false}
                          style={{backgroundColor: "#190D3F"}}
                        >
                          S'inscrire
                        </button>

                        {/* <div className='text-center mt-4'>
												<Link to="/register" className="float-right mb-3 text-dark">
													Not a member?Register 
												</Link>
											</div> */}
                      </form>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Register;
