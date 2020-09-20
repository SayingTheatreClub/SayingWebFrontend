import React, { FC } from "react";
import JobPre from "../../assets/jobPre.svg";
const mockData = {
  job: "网站运营",
  desc: `理解网站的整体构成和主要的功能模块（不需要实现）；/n
  有管理意识，理解设计需求，善于规划布局，沟通能力佳；/n
   有基本审美意识，了解当下网站的主要形态和设计理念；/n
  熟练使用 Wix 网页编辑器者优先，有网站设计经验者优先；/n
  加分项：CS专业背景，个人网站，域名维护，熟悉javascript （可附作品或网站链接）。
  `,
};
const JobList: FC = (props) => {
  return (
    <div className="popup-job-list-wrapper">
      <div className="popup-job-list-title">{mockData.job}</div>
      <div className="popup-job-list-text">
        {mockData.desc.split("/n").map((item: string) => (
          <div className="popup-job-list-item">
            <img
              src={JobPre}
              alt="pre"
              style={{ marginRight: "1.8rem" }}
            />{" "}
            <div className="popup-job-list-words">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
