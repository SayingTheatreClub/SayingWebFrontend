import React, { FC } from "react";
import { Input, Button } from "antd";

const MailBox: FC = (props) => {
  const title = "电子报";
  const desc = "订阅电子报获取戏言最新动态";

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