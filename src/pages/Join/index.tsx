import React, { FC, useEffect, useState } from "react";
import QueueAnim from "rc-queue-anim";
import { useRequest } from "ahooks";
import { Button,Spin } from "antd";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PopUp from "../../components/PopUp";
import MailBox from '../../components/Mailbox';
import PageInfo from "./pageInfo";
import DepartmentCard from "./departmentCard";

import { getDeparts } from "../../libs/requests";

import { joinText, departText, departItemType } from "../../text/joinText";
import Depart from "../../assets/depart.png";

type departmentType = {
  title: string;
  text: string;
  job: string;
};

const Join: FC = (props) => {
  const [targetDepart, setTargetDepart] = useState<departItemType>({
    title: "",
    jobs: [{ title: "", desc: "" }],
  });
  const { data, loading } = useRequest(getDeparts);
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
          {loading&&<Spin size="large"/>}
          <QueueAnim delay={500} className="join-page-depart-wrapper">
            {data?.map((item: departmentType) => (
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
          <Button className="join-page-lower-button" danger type="primary">
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
            (item: departmentType) => item.title === targetDepart.title
          )?.job
        }
      />
      <div>
        <MailBox
          title="电子报"
          desc="你心仪的岗位没有在招？订阅戏言电子报获得最新招新动态"
        />
        <Footer />
      </div>
    </>
  );
};

export default Join;
