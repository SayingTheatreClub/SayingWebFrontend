import React, { FC, useEffect, useState } from "react";

import { Button } from "antd";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import PopUp from "../../components/PopUp/popUp";
import PageInfo from "./pageInfo";
import DepartmentCard from "./departmentCard";
import {
  joinText,
  departText,
  jobType,
  departType,
  departItemType,
} from "../../text/joinText";
import axios from "axios";

import Depart from "../../assets/depart.png";
import MailBox from "../Home/mailBox";

type departmentType = {
  title: string;
  text: string;
  job: string;
};

const Join: FC = (props) => {
  const [departs, setDeparts] = useState<departmentType[]>([]);
  const [targetDepart, setTargetDepart] = useState<departItemType>({
    title: "",
    jobs: [{ title: "", desc: "" }],
  });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/departments/").then((res) => {
      const data: departmentType[] = res.data.map((item: any) => ({
        title: item.name,
        text: item.description,
        job: item.jobs,
      }));
      setDeparts(data);
    });
  }, []);
  return (
    <>
      <Header />
      <PageInfo
        title={joinText.title}
        text={joinText.text}
        img={joinText.img}
      />
      <div className="join-content">
        <div className="join-page-depart-wrapper">
          {departs.map((item: departmentType) => (
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
          ))}
        </div>
        <div className="join-page-lower">
          <p>赶快加入我们吧！</p>
          <Button className="join-page-lower-button">报名链接</Button>
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
          departs.find(
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
