import { Badge } from "react-bootstrap";
import React, { Fragment, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import * as tagServices from "./../../services/TagServices";

export default function Tags() {
  const [tags, setTags] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(true);
    tagServices.getAllTags().then((response) => {
      console.log(response);
      setTags(response.data);
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
        </div>
      </div>
    </Fragment>
  );
}
