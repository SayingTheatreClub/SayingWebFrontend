import React, { FC } from "react";
import { Input, message } from "antd";
import Button from "../Button";
interface MailBoxProps {
  title: string;
  desc: string;
}

const MailBox: FC<MailBoxProps> = (props) => {
  const { title, desc } = props;
  message.config({
    maxCount: 1,
  });
  return (
    <div className="mailbox-wrapper">
      <div className="mailbox-content-wrapper">
        <div className="mailbox-content">
          <p className="mailbox-title">{title}</p>
          <p className="mailbox-desc">{desc}</p>
          <Input placeholder="邮箱" className="mailbox-input" />
          <Button
            className="mailbox-button"
            onClick={() => {
              message.success("添加订阅成功");
            }}
            type="disabled"
          >
            订阅
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MailBox;
