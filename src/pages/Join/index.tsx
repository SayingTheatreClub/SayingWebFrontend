import React, { FC, useEffect, useState } from "react";
import { useRequest } from "ahooks";
import Button from "../../components/Button";
import QueueAnim from "rc-queue-anim";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MailBox from "../../components/Mailbox";
import {DepartPop} from "../../components/PopUp";
import { getDeparts } from "../../libs/requests";
import { photoUrl } from "../../libs/security";
import { departItemType, departText, joinText } from "../../text/joinText";
import DepartmentCard from "./departmentCard";
import PageInfo from "./pageInfo";
import { getDepartsItemType } from "../../types/requestType";

//added for "报名链接" link
import { generateLink } from "../../libs/funcs";

const Join: FC = () => {
  const [targetDepart, setTargetDepart] = useState<departItemType>({
    title: "",
    jobs: [{ title: "", desc: "" }],
  });
  const { data } = useRequest(getDeparts);
  const [open, setOpen] = useState(false);
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <PageInfo
        title={joinText.title}
        text={joinText.text}
        img={joinText.img}
      />
      <div className="join-content">
        <div>
          <QueueAnim delay={500} className="join-page-depart-wrapper">
            {data?.map((item: getDepartsItemType) => (
              <div key={item.title}>
                <DepartmentCard
                  onClick={() => {
                    const res = departText.find(
                      (value: departItemType) => value.title === item.title
                    );
                    if (res) setTargetDepart(res);
                    setOpen(!open);
                  }}
                  title={item.title}
                  text={item.text}
                  jobs={item.job}
                />
              </div>
            ))}
          </QueueAnim>
        </div>
        <div className="join-page-lower">
          <p>赶快加入我们吧！</p>
          {/* <Button className="join-page-lower-button" type="disabled">
                报名链接
              </Button> */}
          {/* Line 60 to 66 added */}
          {generateLink(
              <Button type="primary" className="join-page-info-button">
                报名链接
              </Button>,
              "https://forms.gle/PPrLtEWW7tET3kuX9",
              true
          )}
        </div>
      </div>
      <DepartPop
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        imgUrl={`${photoUrl}${targetDepart.title}.jpg`}
        name={targetDepart.title}
      />
      <div>
        <MailBox
          title="电子报"
          desc="你心仪的岗位目前不招人？订阅戏言电子报获得招新的最新动态"
        />
        <Footer withMailbox />
      </div>
    </>
  );
};

export default Join;
