import React, { FC, useState } from "react";
import { Input, message } from "antd";
import Button from "../Button";
import Axios from "axios";
import { url } from "../../libs/security";
interface MailBoxProps {
  title: string;
  desc: string;
}

const MailBox: FC<MailBoxProps> = (props) => {
  const { title, desc } = props;
  const [inputMessage, setInputMessage] = useState("");
  message.config({
    maxCount: 1,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(event.target.value);
  };
  const handleClick = (event: React.MouseEvent) => {
    if (!emailTest(inputMessage)) {
      message.error("invalid email");
      return;
    }
    const data = {
      email: inputMessage,
    };
    Axios.post(`${url}emails/`, data).then((res) => {
      message.success("success!");
    });
  };
  const emailTest = (email: string) => {
    var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org|edu)$/;
    return myReg.test(email);
  };
  return (
    <div className="mailbox-wrapper">
      <div className="mailbox-content-wrapper">
        <div className="mailbox-content">
          <p className="mailbox-title">{title}</p>
          <p className="mailbox-desc">{desc}</p>
          <Input
            placeholder="邮箱"
            className="mailbox-input"
            onChange={handleChange}
          />
          <Button
            className="mailbox-button"
            onClick={handleClick}
            type="primary"
          >
            订阅
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MailBox;
