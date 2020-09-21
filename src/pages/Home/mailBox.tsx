import React, { FC } from "react";
import { Input, Button } from "antd";

interface MailBoxProps{
  title:string;
  desc:string;
}

const MailBox: FC<MailBoxProps> = (props) => {
  const {title,desc} = props;
  return (
    <div className="mailbox-wrapper">
      <div className="mailbox-content-wrapper">
        <div className="mailbox-content">
          <p className="mailbox-title">{title}</p>
          <p className="mailbox-desc">{desc}</p>
          <Input placeholder="邮箱" className="mailbox-input"/>
          <Button danger className="mailbox-button">订阅</Button>
        </div>
      </div>
    </div>
  );
};

export default MailBox;