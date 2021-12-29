import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { useQuery, gql, useMutation } from "@apollo/client";

// function MyVerticallyCenteredModal(props) {
//   let input;
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Customer Name</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Customer Name"
//               ref={(node) => {
//                 input = node;
//               }}
//             />
//             <Form.Label>Customer Address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Customer Address"
//               ref={(node) => {
//                 input = node;
//               }}
//             />
//             <Form.Label>Customer Phone</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Customer Phone"
//               ref={(node) => {
//                 input = node;
//               }}
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

function Home() {
  const users = useSelector((state) => state.users.users);
  console.log("data", users);
  let user_id = localStorage.getItem("id");
  console.log("useeeeeeeeeeer", user_id);
  const [modalShow, setModalShow] = React.useState(false);
  document.title = "Shipments";
  const navigate = useNavigate();
  const GET_SHIPMENTS = gql`
    query {
      user(id: ${user_id}) {
        id
        name
        email
        shipments {
          id
          created_at
          waybill
          customer_name
          customer_address
          customer_phone
        }
      }
    }
  `;
  const DELETE_USER = gql`
    mutation ($id: ID!) {
      deleteShipment(id: $id) {
        id
        customer_name
      }
    }
  `;
  const [deleteTodo] = useMutation(DELETE_USER);
  const { data } = useQuery(GET_SHIPMENTS);

  const [shipmentcards, setShipmentCards] = useState([]);
  console.log("hellooo", shipmentcards);
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  useEffect(() => {
    setShipmentCards(data && data.user.shipments);
  }, [data]);

  return (
    <>
      <div className="home" id="Home">
        <div className="home__bg">
          <Navbar />
          <Button
            variant="primary"
            onClick={() => navigate("/add-shipment")}
            // onClick={() => setModalShow(true)}
            style={{ marginLeft: "16%" }}
          >
            Add New Shipment
          </Button>

          {/* <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> */}
          <div class="cards-wrapper">
            {shipmentcards &&
              shipmentcards.map((item) => (
                <div class="card-grid-space">
                  <div class="num">{item.id}</div>
                  <a class="card">
                    <div>
                      <h1>{item.customer_name}</h1>
                      <p>{item.waybill}</p>
                      <p>{item.customer_address}</p>
                      <p>{item.customer_phone}</p>
                      <div class="date">{item.created_at.slice(0, 10)}</div>
                      <div
                        class="tags"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: "10%",
                        }}
                      >
                        <div
                          onClick={() => {
                            deleteTodo({ variables: { id: item.id } });
                            window.location.reload();
                          }}
                        >
                          <FaTrash size={50} />
                        </div>
                        <div
                          onClick={() =>
                            navigate(`/update-shipment/${item.id}`)
                          }
                        >
                          <FaEdit size={50} />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
