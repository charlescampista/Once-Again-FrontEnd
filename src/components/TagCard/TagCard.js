import React from "react";
import { Badge, Card } from "react-bootstrap";
import { CDBBtn, CDBContainer } from "cdbreact";
export default function TagCard({ tag, deleteHandler, editHandler }) {
  return (
    <Card className="align-items-start m-2 p-3">
      <h2>Id: {tag.id}</h2>
      <h1>
        <Badge className="" bg="primary" key={tag.id}>
          {tag.title}
        </Badge>
      </h1>
      <CDBContainer className="d-flex justify-content-end">
        <CDBBtn
          color="danger"
          onClick={() => {
            deleteHandler();
          }}
          style={{ width: "30px", height: "30px" }}
        >
          x
        </CDBBtn>
        <CDBBtn
          color="warning"
          onClick={() => {
            editHandler();
          }}
          style={{ width: "30px", height: "30px" }}
        >
          edit
        </CDBBtn>
      </CDBContainer>
    </Card>
  );
}
