import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useNavigate, useParams } from "react-router";

import "./add.css";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";

function UpdateShipment() {
  let shipment_id = useParams();
  console.log("id", shipment_id.id);

  const GET_SHIPMENTS = gql`
    query {
      shipment(id: ${shipment_id.id}) {
     
          id
          user_id
          created_at
          waybill
          customer_name
          customer_address
          customer_phone
      }
    }
  `;

  const UPDATE_SHIPMENT = gql`
    mutation updateShipment(
      $user_id: String!
      $waybill: String!
      $customer_address: String!
      $customer_name: String!
      $customer_phone: String!
    ) {
        updateShipment(
        id: ${shipment_id.id}
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
  const { data } = useQuery(GET_SHIPMENTS);
  const [createShipment] = useMutation(UPDATE_SHIPMENT);
  const [user_id, setUser_id] = useState("");
  const [waybill, setWaybill] = useState("");
  const [customer_address, setCustomer_address] = useState("");
  const [customer_name, setCustomer_name] = useState("");
  const [customer_phone, setCustomer_phone] = useState("");
  const [shipmentcards, setShipmentCards] = useState([]);

  console.log("dataaaaaa", data);

  useEffect(() => {
    setShipmentCards(data);
  }, [data]);
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
              Swal.fire("Updated Successfully", "success");
            }}
          >
            <h3>Update Shipment</h3>
            <fieldset>
              <input
                defaultValue={data && data.shipment.user_id}
                type="text"
                required
                disabled
                onChange={(e) => setUser_id(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                defaultValue={data && data.shipment.waybill}
                type="text"
                required
                onChange={(e) => setWaybill(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                defaultValue={data && data.shipment.customer_address}
                type="text"
                required
                onChange={(e) => setCustomer_address(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                defaultValue={data && data.shipment.customer_name}
                type="text"
                required
                onChange={(e) => setCustomer_name(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <input
                defaultValue={data && data.shipment.customer_phone}
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

export default UpdateShipment;
