import React, { FC, useEffect, useState } from "react";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import PageInfo from "./pageInfo";
import DepartmentCard from "./departmentCard";
import { joinText } from "../../text/joinText";
import axios from "axios";

const Join: FC = (props) => {
  const [departs, setDeparts] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/departments/").then((res) => {
      const data = res.data.map((item: any) => ({
        title: item.name,
        text: item.description,
        job:item.jobs,
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
          {departs.map((item:any) => (
            <DepartmentCard
              title={item.title}
              text={item.text}
              jobs={item.job}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Join;
