import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import game from "../images/gameall.png";
import { Card, Col, Row } from "react-bootstrap";

import I1 from "../images/game2.png";
import I2 from "../images/game4.png";
import I3 from "../images/game5.png";
import I4 from "../images/game6.png";
import I5 from "../images/XO 1 star.png";
import I6 from "../images/xo.png";

const Home = () => {
  return (
    <div className="container my-5">
      {/* <div className="row">
        <div className="col-12 col-sm-12 col-md-6 py-3">
          <div className="card">
            <h5
              className="card-header text-center text-white"
              style={{ backgroundColor: "#5E72E4" }}
            >
              Tic Tac Toe
            </h5>
            <div className="card-body">
              <div className="text-center">
                <Image src={quiz} alt="icon" className="w-100" />
              </div>
            </div>
            <div className="card-footer text-muted">
              <div className="text-center">
                <Link
                  to="/game"
                  className="btn text-white"
                  style={{ backgroundColor: "#5E72E4" }}
                >
                  Jouez a ce jeux
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-6 py-3">
          <div className="card">
            <h5
              className="card-header text-center text-white"
              style={{ backgroundColor: "#5E72E4" }}
            >
              Jeux
            </h5>
            <div className="card-body">
              <div className="text-center">
                <Image src={game} alt="icon" className="w-100" />
              </div>
            </div>
            <div className="card-footer text-muted">
              <div className="text-center">
                <Link
                  to="/allgames"
                  className="btn text-white"
                  style={{ backgroundColor: "#5E72E4" }}
                >
                  Accéder aux jeux
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Row className="mt-5 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
            <Link to={`/game`}>
              <Card.Img
                src={I6}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px" }}
              />
            </Link>
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={I2}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px", opacity: '0.5' }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={I3}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px", opacity: '0.5' }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={I4}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px", opacity: '0.5' }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={I5}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px", opacity: '0.5' }}
              />
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="p-3 rounded h-100">
              <Card.Img
                src={I1}
                variant="top"
                className="h-100"
                style={{ height: "200px", borderRadius: "0px", opacity: '0.5' }}
              />
          </Card>
        </Col>
      </Row>

    </div>
  );
};

export default Home;
