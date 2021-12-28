// Contact Form: name, email, message - all fields required on submit
import { useState } from "react";
//import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import axios from "axios";
import "./contact.css";

// function sendEmail(e) {
//   e.preventDefault();
//   emailjs.sendForm(
//     "service_9ivg85z",
//     "template_lnewhqd",
//     e.target,
//     "user_vuOqojeL75LqiWKYUDiZ0"
//   ).then(res=>{
//       console.log(res);
//       this.resetForm();

//   }).catch(err=>console.log(err));
// };

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };

      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container border contact-page">
      <h1 className="contact-title">Contact Me</h1>
      <form className="contact-form" onSubmit={submitForm}>
        <p>{banner}</p>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={handleName}
          value={name}
          className="form-control"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={handleEmail}
          value={email}
          className="form-control"
        />
        <label htmlFor="message">Message</label>
        <textarea
          cols="30"
          rows="5"
          onChange={handleMessage}
          value={message}
          className="form-control"
        ></textarea>
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-secondary contact-submit"
        />
      </form>
    </div>
  );
};

export default Contact;
