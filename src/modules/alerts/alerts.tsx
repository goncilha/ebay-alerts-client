import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import * as alerts from "../../api/alerts";
import AlertForm from "./components/alert-form";
import { useParams } from "react-router-dom";

export const initialValues = {
  email: "",
  phrase: "",
  peridiocity: ""
};

export type AlertType = typeof initialValues;

const yupSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Erro aqui"),
  phrase: yup.string().required("Aqui tb"),
  peridiocity: yup.string().required("Obrigatorio")
});

const Alerts = () => {
  const { id } = useParams();
  return (
    <Formik
      onSubmit={async (values, actions) => {
        const response = await alerts.save(values, id);
        if (response.error) {
          alert(response.error);
        } else {
          alert("Saved!");
        }
      }}
      validationSchema={yupSchema}
      initialValues={initialValues}
    >
      <AlertForm />
    </Formik>
  );
};

export default Alerts;
