import React, { FC, useEffect, useState } from "react";
import { useRequest } from "ahooks";
import Button from "../../components/Button";
import QueueAnim from "rc-queue-anim";
import Depart from "../../assets/depart.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MailBox from "../../components/Mailbox";
import PopUp from "../../components/PopUp";
import { getDeparts } from "../../libs/requests";
import { departItemType, departText, joinText } from "../../text/joinText";
import DepartmentCard from "./departmentCard";
import PageInfo from "./pageInfo";
import { getDepartsItemType } from "../../types/requestType";

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
          <Button className="join-page-lower-button"  type="primary">
            报名链接
          </Button>
        </div>
      </div>
      <PopUp
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        imgUrl={Depart}
        name={targetDepart.title}
        type="depart"
        jobInfo={targetDepart.jobs}
        recruit={
          data?.find(
            (item: getDepartsItemType) => item.title === targetDepart.title
          )?.job
        }
      />
      <div>
        <MailBox
          title="电子报"
          desc="你心仪的岗位没有在招？订阅戏言电子报获得最新招新动态"
        />
        <Footer withMailbox/>
      </div>
    </>
  );
};

export default Join;
