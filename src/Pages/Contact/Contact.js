import React from "react";


import { TextField, Button } from "@mui/material";
import { Formik } from "formik";

import * as yup from "yup";

import "./Contact.css";

const Contact = () =>{
    const yupSchema = yup.object({
        name: yup.string().min(2).max(30).required(),
        lastName: yup.string().min(2).max(30).required(),
        email: yup.string().email().required(),
      });
      
      const submitHandler = (values, resetForm) => {
        console.log(values);
        resetForm();
      };
    return(
        <div>
           
          

           
      <div className="Contact">
      <h1>Contactanos</h1>
      <Formik
        validationSchema={yupSchema}
        onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          Text: "",

        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isValid,
          dirty,
        }) => (
          <form className="Form" onSubmit={handleSubmit}>
            <TextField
              name="name"
              placeholder="Name"
              variant="outlined"
              className="TextField"
              sx={{ mb: 1 }}
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && touched.name && errors.name && (
              <div
                style={{
                  padding: 5,
                  background: "red",
                  color: "white",
                  marginBottom: 5,
                  borderRadius: 8,
                }}
              >
                {errors.name && touched.name && errors.name}
              </div>
            )}
            <TextField
              name="lastName"
              placeholder="Last Name"
              variant="outlined"
              className="TextField"
              sx={{ mb: 1 }}
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && touched.lastName && errors.lastName && (
              <div
                style={{
                  padding: 5,
                  background: "red",
                  color: "white",
                  marginBottom: 5,
                  borderRadius: 8,
                }}
              >
                {errors.lastName && touched.lastName && errors.lastName}
              </div>
            )}
            <TextField
              name="email"
              placeholder="Email"
              variant="outlined"
              className="TextField"
              sx={{ mb: 1 }}
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && errors.email && (
              <div
                style={{
                  padding: 5,
                  background: "red",
                  color: "white",
                  marginBottom: 5,
                  borderRadius: 8,
                }}
              >
                {errors.email && touched.email && errors.email}
              </div>
              
            )}
<h2>Consulta</h2>
<TextField 
              name="text"
              placeholder="Text"
            
              className="Text"
              sx={{ mb: 12 }}
            
              onChange={handleChange}
            />
             {errors.Text && touched.Text && errors.Text && (
              <div
                style={{
                  padding: 100,
                 
                 
                }}
              >
                {errors.Text && touched.Text && errors.Text}
              </div>
              
              )}
            <Button className="boton-neon"
              variant="contained"
              type="submit"
              sx={{ width: "400px", height: "54px" }}
              disabled={!(isValid && dirty)}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  


           </div>
        
       
    )
}
export default Contact;