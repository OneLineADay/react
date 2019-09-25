import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import "./CalendarForm.css"
import styled from "styled-components"

const CalendarForm = ({ errors, touched, values, status }) => {

    const [update, setUpdate] = useState([]);

    useEffect(() => {
      status && setUpdate(update => [...update, status]);
    }, [status]);

    return(
        <div>
            <Form>
                <Field component="select" className="month-select" name="month">
                        <option>Please Choose a Month</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                        <option value="January">January</option>
                        <option value="Febuary">Febuary</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                </Field>
                {touched.month && errors.month && <p className="error">{errors.month}</p>}

                <Field type="number" name="day" placeholder="Day" />
                {touched.day && errors.day && <p className="error">{errors.day}</p>}
            </Form>
            <button type="submit">View!</button>
        </div>
    )
}

const FormikCalendarForm = withFormik({
    mapPropsToValues({ day, month }) {
      return {
        day: day || "",
        month: month || "",
      };
    },

    validationSchema: Yup.object().shape({
      day: Yup.string().required("Day required"),
      month: Yup.string().required("Month Required"),
    }),

    handleSubmit(values, { setStatus }) {
      axios
        .post("api", values)
        .then(res => {
          setStatus(res.data);
          console.log(res);
        })
        .catch(err => console.log(err.response));
    }
   })(CalendarForm);
   console.log("This is the HOC", FormikCalendarForm);
   export default FormikCalendarForm;