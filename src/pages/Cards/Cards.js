import { CDBBtn, CDBContainer } from "cdbreact";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";

import * as cardServices from "./../../services/CardServices";

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setIsSearching(true);
    cardServices.getAllCards().then((response) => {
      console.log(response);
      setCards(response.data);
      setIsSearching(false);
    });
  }, []);

  return (
    <Fragment>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div
          style={{
            flex: "1 1 auto",
            display: "flex",
            flexFlow: "column",
            height: "100vh",
            overflowY: "hidden",
          }}
        >
          <Navbar />

          <CDBContainer className="d-flex">
            <CDBBtn
              color="primary"
              onClick={() => {
                handleShow();
              }}
              circle
              outline
            >
              Criar
            </CDBBtn>
            <CDBBtn color="danger" circle outline>
              Deletar
            </CDBBtn>

            <CDBBtn color="warning" circle outline>
              Editar
            </CDBBtn>
          </CDBContainer>
          <h1>Cards</h1>
          <div style={{ overflowY: "scroll" }}>
            <div className="card-section d-flex">
              <div className="cards-container d-flex flex-wrap">
                {/* CARDS DA APLICACAO */}
                {!isSearching &&
                  cards &&
                  cards.map((item) => (
                    <Fragment>
                      <div
                        className="card-bg  border d-flex flex-column m-1"
                        key={item.id}
                      >
                        <div className="p-4 d-flex flex-column h-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <h4 className="m-0 h5 font-weight-bold text-dark">
                              Traffic by Source
                            </h4>
                            <div className="px-2 py-1 bg-grey rounded-circle">
                              <i className="fas fa-chart-line"></i>
                            </div>
                          </div>
                          <div className="mt-3 d-flex justify-content-between">
                            <CDBContainer className="p-0">
                              <Card.Img
                                variant="bottom"
                                src={`https://loremflickr.com/50/50`}
                              />
                            </CDBContainer>
                            <div className="text-right w-25">
                              <p className="m-0">{item.front_title}</p>
                              <p className="text-success small">{item.id}</p>
                              <div>
                                <div className="d-flex align-items-center justify-content-between text-success">
                                  <span
                                    style={{
                                      fontSize: "3em",
                                      margin: "-2rem 0px -1.5rem 0px",
                                    }}
                                  >
                                    &#8226;
                                  </span>
                                  <span className="small">Google</span>
                                </div>
                                <div
                                  className="d-flex align-items-center justify-content-between"
                                  style={{ color: "#9B51E0" }}
                                >
                                  <span
                                    style={{
                                      fontSize: "3em",
                                      margin: "-2rem 0px -1.5rem 0px",
                                    }}
                                  >
                                    &#8226;
                                  </span>
                                  <span className="small">Yahoo</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between text-warning">
                                  <span
                                    style={{
                                      fontSize: "3em",
                                      margin: "-2rem 0px -1.5rem 0px",
                                    }}
                                  >
                                    &#8226;
                                  </span>
                                  <span className="small">Bing</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="c-p text-dark mb-0 font-weight-bold text-right mt-auto">
                            More Details
                            <i className="fas fa-arrow-right ml-1"></i>
                          </p>
                        </div>
                      </div>
                    </Fragment>
                  ))}
              </div>
            </div>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>New Card</Modal.Title>
            </Modal.Header>
            <Modal.Body>Test</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Fragment>
  );
}
