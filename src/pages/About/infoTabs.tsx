import React, { ChangeEvent, FC, useState } from "react";
import { Tab, Tabs } from "@material-ui/core";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import PlayCard from "../../components/Cards/playCard";
import { tabs } from "../../text/aboutText";
import { generateLink } from "../../libs/funcs";
import { Link } from 'react-router-dom';

const InfoTab: FC = (props) => {
  const [content, setContent] = useState(0);

  const handleChange = (event: ChangeEvent<{}>, value: number) => {
    setContent(value);
  };

  return (
    <>
      {tabs.map((item, index) => (
        <TabPanel value={content} index={index} />
      ))}
      <MyTabs
        value={content}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
      >
        {tabs.map((item) => (
          <MyTab label={item.title} />
        ))}
      </MyTabs>
    </>
  );
};

const MyTabs = withStyles({
  indicator: {
    backgroundColor: "#C62127",
  },
})(Tabs);

const MyTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      minWidth: 100,
      marginRight: theme.spacing(8),
      fontFamily: "Noto Sans SC",
      fontSize: 22,
      fontWeight: 500,
      padding: "6px 0",
      opacity: 1,
      color: "#181616",
      whiteSpace: "nowrap",
      letterSpacing: 0,
      "&:hover": {
        color: "#C62127",
        opacity: 1,
      },
      "&$selected": {
        color: "#C62127",
        fontWeight: theme.typography.fontWeightMedium,
      },
      "&:focus": {
        color: "#C62127",
      },
    },
  })
)((props: StyledTabProps) => <Tab {...props} />);

interface StyledTabProps {
  label: string;
}
interface TabPanelProps {
  index: any;
  value: any;
}
const TabPanel: FC<TabPanelProps> = (props) => {
  const { index, value } = props;
  return (
    <div className="about-displaybox" hidden={value !== index}>
      {generateLink(
        <PlayCard
          name={`${tabs[index].title}`}
          description={tabs[index].text}
          belonging="Featured"
        />,
        tabs[index].link,
        true
      )}
      {tabs[index].video && (
        <div>
          <iframe
            title={tabs[index].title}
            src={tabs[index].video}
            scrolling="no"
            width={635}
            seamless={true}
            height={395}
            frameBorder="no"
            allowFullScreen={true}
            allowTransparency={true}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          <div>
            <Link to={tabs[index].link} className="bilibili-link">
              去Bilibili观看本视频点这里
            </Link>
          </div>
        </div>
      )}
      {tabs[index].img && (
        <img
          src={tabs[index].img}
          alt={tabs[index].title}
          style={{ width: "auto", height: "395px" }}
        />
      )}
    </div>
  );
};

export default InfoTab;
