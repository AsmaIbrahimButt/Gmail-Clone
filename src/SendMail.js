import React from "react";
import "./SendMail.css";
import "./SendMail.css";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";

import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { db } from "./firebase";



function SendMail() {
  // const { register, handleSubmit, watch, errors } = useForm();
  const {
    register,handleSubmit,watch,formState: { errors },} = useForm();

    const onSubmit = (formData) => {
    console.log(formData);
    db.collection('emails').add({
      to:formData.to,
      subject:formData.subject,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),


    });
    dispatch(closeSendMessage());
    };
  
    //action to close the create mail option
    const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
 
          className="sendMail__close"
          onClick = {() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
              name="to"
              type="text"
              placeholder="To"
              {...register("to", { required: true })}
    
        />
        {errors.to && <p className="sendMail__error">To is Required</p>}

        <input
          name = "subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is Required</p>
        )}

        <input
          name = "message"
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is Required</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
