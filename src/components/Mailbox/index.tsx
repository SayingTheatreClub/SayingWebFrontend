import React, { FC, useState } from "react";
import { Input, message } from "antd";
import Button from "../Button";
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
    message.success("Success!");
    console.log(inputMessage);
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
