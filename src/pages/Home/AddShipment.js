import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useQuery, gql, useMutation } from "@apollo/client";
import "./add.css";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";

function AddShipment() {
  const users = useSelector((state) => state.users.users);
  let user_id = localStorage.getItem("id");
  console.log("idsdddddddddd", user_id);
  const ADD_SHIPMENT = gql`
    mutation createShipment(
      $user_id: ID!
      $waybill: String!
      $customer_address: String!
      $customer_name: String!
      $customer_phone: String!
    ) {
      createShipment(
        user_id: $user_id
        waybill: $waybill
        customer_address: $customer_address
        customer_name: $customer_name
        customer_phone: $customer_phone
      ) {
        user_id
        waybill
        customer_address
        customer_name
        customer_phone
      }
    }
  `;

  const [createShipment] = useMutation(ADD_SHIPMENT);
  // const [user_id, setUser_id] = useState("");
  const [waybill, setWaybill] = useState("");
  const [customer_address, setCustomer_address] = useState("");
  const [customer_name, setCustomer_name] = useState("");
  const [customer_phone, setCustomer_phone] = useState("");
  console.log("dataaaaaa", user_id);
  return (
    <>
      <div style={{ backgroundColor: "#dce8f1" }}>
        <Navbar />
        <div className="container">
          <form
            id="contact"
            onSubmit={(e) => {
              e.preventDefault();
              createShipment({
                variables: {
                  user_id: user_id,
                  waybill: waybill,
                  customer_address: customer_address,
                  customer_name: customer_name,
                  customer_phone: customer_phone,
                },
              });
              Swal.fire("Added Successfully", "success");
            }}
          >
            <h3>Add Shipment</h3>
            <fieldset>
              <input
                defaultValue={user_id}
                type="text"
                required
                disabled
                // onChange={(e) => setUser_id(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Waybill"
                type="text"
                required
                onChange={(e) => setWaybill(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Customer Address"
                type="text"
                required
                onChange={(e) => setCustomer_address(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Customer Name"
                type="text"
                required
                onChange={(e) => setCustomer_name(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Customer Phone"
                type="text"
                required
                onChange={(e) => setCustomer_phone(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <button name="submit" type="submit" id="contact-submit">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddShipment;
