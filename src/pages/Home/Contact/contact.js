import React from "react";
import css from "./contact.module.css";
import Text from "components/Text";
import Button from "components/Button";
import Input from "components/Input";
import { RiMapPin2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className={css["container"]} id="contact-container">
      <Text
        size="extra-large"
        value="Contact Me"
        family="poppins"
        color="black"
      />
      <div className={css["contact-container"]}>
        <div className={css["contact"]}>
          <div className={css["contact-text"]}>
            <RiMapPin2Fill className={css["icon"]} />
            <Text
              size="normal"
              value="Jl. Pisang Candi, Karangkates, Malang"
              family="poppins"
              color="grey"
            />
          </div>
          <div className={css["contact-text"]}>
            <MdEmail className={css["icon"]} />
            <Text
              size="normal"
              value="aurellesia19@gmail.com"
              family="poppins"
              color="grey"
            />
          </div>
          <div className={css["contact-text"]}>
            <BsFillTelephoneFill className={css["icon"]} />
            <Text
              size="normal"
              value="+6281-336-967-108"
              family="poppins"
              color="grey"
            />
          </div>
        </div>
        <div className={css["contact"]}>
          <Input type="text" placeholder="Name" variant="secondary" />
          <Input type="text" placeholder="Email" variant="secondary" />
          <Input
            big
            type="text"
            placeholder="Create a message here"
            variant="secondary"
          />
          <Button variant="secondary" value="Send Message" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
