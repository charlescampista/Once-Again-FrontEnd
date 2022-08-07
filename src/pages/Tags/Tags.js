import { Button, Form, Modal } from "react-bootstrap";
import React, { Fragment, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import TagCard from "../../components/TagCard/TagCard";
import * as tagServices from "./../../services/TagServices";
import { CDBBtn, CDBContainer } from "cdbreact";

export default function Tags() {
  const [tags, setTags] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [show, setShow] = useState(false);
  const [tagName, setTagName] = useState("");
  const [selectedTag, setSelectedTag] = useState(undefined);

  const handleClose = () => {
    setSelectedTag(undefined);
    setShow(false);
  };
  const handleShow = () => {
    setTagName("");
    setShow(true);
  };

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

  function deleteTag(tag) {
    setIsDeleting(true);
    tagServices.deleteTag(tag.id).then((response) => {
      console.log(response);
      setIsDeleting(false);
      window.location.reload();
    });
  }

  function editTag(tag) {
    setIsUpdating(true);
    tagServices.editTag(tag).then((response) => {
      console.log(response);
      setIsUpdating(false);
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

          <CDBContainer>
            <CDBBtn color="primary" onClick={handleShow} circle outline>
              Criar
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
                  <TagCard
                    tag={item}
                    deleteHandler={() => {
                      deleteTag(item);
                    }}
                    editHandler={() => {
                      setSelectedTag(item);
                      setTagName(item.title);
                      setShow(true);
                    }}
                  />
                ))}
            </div>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedTag ? "Edit Tag" : "New Tag"}</Modal.Title>
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

              {!selectedTag && (
                <Button
                  variant="success"
                  onClick={() => createTag({ title: tagName })}
                >
                  Create
                </Button>
              )}

              {selectedTag && (
                <Button
                  variant="warning"
                  onClick={() =>
                    editTag({ id: selectedTag.id, title: tagName })
                  }
                >
                  Update
                </Button>
              )}
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Fragment>
  );
}
