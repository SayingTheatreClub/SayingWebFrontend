import Item from "antd/lib/list/Item";
import React, { FC } from "react";

import { parsePlayList } from "../../libs/jobsLib";

interface PlayListProps {
  list?: any;
}

const mockData = {
  name: "伍晓蕾",
  plays: [
    { play: "旧事", job: "舞美组-服装/布景/道具, 行政组-财务" },
    { play: "你好，疯子", job: "制片人, 行政组-财务, 舞美组-服装/布景/道具" },
    { play: "暗恋桃花源", job: "导演组-助理导演，舞美组-妆发" },
  ],
};

const PlayList: FC<PlayListProps> = (props) => {
  const { list } = props;
  const parsedList = parsePlayList(list)
  console.log(parsedList);
  return (
    <div className="popup-playlist">
      {parsedList.map((item: any) => (
        <div className="popup-playlist-item">
          <div className="popup-playlist-title">{`《${item.play}》`}</div>
          <div>
            {item.job.map((jobs: any) => (
              <div className="popup-play-jobs-wrapper">
                <div>{jobs.department}</div>
                <div>
                  {jobs.jobs.map((item: any) => (
                    <div>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

PlayList.defaultProps = {
  list: mockData.plays,
};

export default PlayList;
