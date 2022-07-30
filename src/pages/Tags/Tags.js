import { Badge, Button, Form, Modal } from "react-bootstrap";
import React, { Fragment, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import * as tagServices from "./../../services/TagServices";
import { CDBBtn, CDBContainer } from "cdbreact";

export default function Tags() {
  const [tags, setTags] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [show, setShow] = useState(false);
  const [tagName, setTagName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setIsSearching(true);
    tagServices.getAllTags().then((response) => {
      console.log(response);
      setTags(response.data);
      setIsSearching(false);
    });
  }, []);

  function createTag(tag) {
    tagServices.createTag(tag).then((response) => {
      console.log(response);
      handleClose();
      window.location.reload();
    });
  }

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
            <CDBBtn color="primary" onClick={handleShow} circle outline>
              Criar
            </CDBBtn>
            <CDBBtn color="danger" circle outline>
              Deletar
            </CDBBtn>

            <CDBBtn color="warning" circle outline>
              Editar
            </CDBBtn>
          </CDBContainer>

          <h1>Tags</h1>
          <div className="d-flex" style={{ overflowY: "scroll" }}>
            <div className="d-flex flex-wrap">
              {!isSearching &&
                tags &&
                tags.map((item) => (
                  <h1>
                    <Badge className="m-3" bg="primary" key={item.id}>
                      {item.title}
                    </Badge>
                  </h1>
                ))}
            </div>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>New Tag</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Label</Form.Label>
                  <Form.Control
                    type="text"
                    value={tagName}
                    onChange={(e) => {
                      e.preventDefault();
                      setTagName(e.target.value);
                    }}
                    placeholder="Label"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

              <Button
                variant="success"
                onClick={() => createTag({ title: tagName })}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Fragment>
  );
}
