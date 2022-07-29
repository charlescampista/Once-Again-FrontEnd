//import "./App.css";
//import Sidebar from "./sidebar";
import React from "react";
import Routes from "./Routes";

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import { Badge, Card, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";

// import * as cardServices from "./services/CardServices";

// const options = [
//   {
//     name: "Enable backdrop (default)",
//     scroll: false,
//     backdrop: true,
//   },
//   {
//     name: "Disable backdrop",
//     scroll: false,
//     backdrop: false,
//   },
//   {
//     name: "Enable body scrolling",
//     scroll: true,
//     backdrop: false,
//   },
//   {
//     name: "Enable both scrolling & backdrop",
//     scroll: true,
//     backdrop: true,
//   },
// ];

// function OffCanvasExample({ name, ...props }) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const toggleShow = () => setShow((s) => !s);

//   return (
//     <>
//       <Button variant="primary" onClick={toggleShow} className="me-2">
//         {name}
//       </Button>
//       <Offcanvas show={show} onHide={handleClose} {...props}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           Some text as placeholder. In real life you can have the elements you
//           have chosen. Like, text, images, lists, etc.
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// function App() {
//   const [cards, setCards] = useState([]);
//   const [searching, setSearching] = useState(false);

//   function bringCards() {
//     setSearching(true);
//     cardServices.getAllCards().then((response) => {
//       console.log(response);
//       setCards(response.data);
//       setSearching(false);
//     });
//   }

//   return (
//     <>
//       {options.map((props, idx) => (
//         <OffCanvasExample key={idx} {...props} />
//       ))}
//       <h1>Cards</h1>
//       <Button
//         onClick={() => {
//           bringCards();
//         }}
//       >
//         Teste
//       </Button>
//       {!searching &&
//         cards.map((card, key) => {
//           return (
//             <Col md={3} key={key}>
//               <Card>
//                 <Card.Img
//                   variant="top"
//                   src={`https://loremflickr.com/320/240`}
//                 />
//                 <Card.Body>
//                   <Card.Title>{card.front_title}</Card.Title>
//                   <Card.Text>{card.front_description}</Card.Text>
//                   <Card.Title>{card.back_title}</Card.Title>
//                   <Card.Text>{card.back_description}</Card.Text>
//                   {card.tags.map((item, key) => (
//                     <Badge pill bg="warning" text="light">
//                       {item.title}
//                     </Badge>
//                   ))}
//                 </Card.Body>
//               </Card>
//             </Col>
//           );
//         })}
//     </>
//   );
// }

// export default App;
