import React, { FC } from "react";

interface PageInfoProps {
  title: string;
  desc: string;
}

const PageInfo: FC<PageInfoProps> = (props) => {
  const { title, desc } = props;
  return (
    <div className="pageinfo-background">
      <p className="pageinfo-title">{title}</p>
      <div className="pageinfo-wrapper">
      <p className="pageinfo-desc">{desc}</p>
      </div>
    </div>
  );
};

export default PageInfo;