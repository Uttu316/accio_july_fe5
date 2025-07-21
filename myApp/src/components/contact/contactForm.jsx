import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
const ContactForm = ({ formTitle }) => {
  return (
    <form className="contact_form">
      <h2 className="contact_heading">{formTitle}</h2>
      <div className="input_group">
        <FaUser className="input_icon" />
        <input type="text" placeholder="Name" name="name" />
      </div>
      <div className="input_group">
        <FaEnvelope className="input_icon" />
        <input type="email" placeholder="Email" name="email" />
      </div>
      <div className="input_group">
        <FaPhone className="input_icon" />
        <input type="tel" placeholder="Phone" name="phone" />
      </div>
      <div className="input_group">
        <FaCommentDots className="input_icon msg_icon" />
        <textarea placeholder="Message" name="message" rows="4"></textarea>
      </div>
      <button type="submit" className="send_button">
        Send <FaPaperPlane className="send_icon" />
      </button>
    </form>
  );
};
export default ContactForm;
