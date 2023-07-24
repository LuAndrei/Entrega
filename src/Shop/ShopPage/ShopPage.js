import React, { useState } from "react";


import { collection, addDoc } from "firebase/firestore";

import { db } from "../../firebase/firebaseConfig";

import TextField from "@mui/material/TextField";

import MessageSuccess from "../ShopPage/MessageSuccess/MessageSuccess";

import "./ShopPage.css";

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

const ShopPage = () => {
  const [values, setValues] = useState(initialState);

  const [purchaseID, setPurchaseID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values,
    });
    
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div style={styles.containerShop}>
     
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 400 }}
          name="lastName"
          value={values.lastName}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="City"
          style={{ margin: 10, width: 400 }}
          name="city"
          value={values.city}
          onChange={handleOnChange}
        />
        <button className="btnASendAction" type="submit">
        Compra Morty, Compra... Consume!
        </button>
      </form>
      {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
    </div>
  );
};

export default ShopPage;
