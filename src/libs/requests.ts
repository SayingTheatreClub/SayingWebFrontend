import { url } from "./security";
import axios from "axios";
import { getQueryVariable } from "./url";
import { parsePlay } from "./playJob";

interface MemberDetail {
  person: string;
  desc: string;
  has_photo: boolean;
}

/**
 * get member
 * @param nextPage
 * @param limit
 */
export function getMemberByPage(nextPage: number, limit: number): any {
  return axios
    .get(`${url}members/`, {
      params: {
        page: nextPage,
        page_size: limit,
      },
    })
    .then((res) => {
      const data = res.data;
      const next =
        data.next !== null ? getQueryVariable(data.next, "page") : null;
      const MemberList = data.results.map((item: any) => ({
        id: Math.floor(Math.random() * 70) + 1,
        ...item,
      }));
      return {
        list: MemberList,
        count: data.count,
        next: next,
      };
    });
}

export const getMemberByPlay = async (play: string) => {
  const res = await axios.get(`${url}instance/`, {
    params: {
      play__name: play,
    },
  });
  return res.data.map((item: MemberDetail) => ({
    name: item.person,
    description: item.desc,
    has_photo: item.has_photo,
    id: Math.floor(Math.random() * 70) + 1,
  }));
};

export const getMemberByCollection = async (play: string, job: string) => {
  //if all then all clear
  play = play === "all" ? "" : play;
  job = job === "all" ? "" : job;
  const res = await axios.get(`${url}instance/`, {
    params: {
      search: job,
      play__name: play,
    },
  });
  const flag = new Set();
  const result: any[] = [];
  res.data.forEach((item: any) => {
    if (!flag.has(item.person)) {
      flag.add(item.person);
      result.push({
        name: item.person,
        description: item.desc,
        has_photo: item.has_photo,
        id: Math.floor(Math.random() * 70) + 1,
      });
    }
  });
  return result;
};
/**
 * get department infomation
 */
export const getDeparts = () =>
  axios.get(`${url}departments/`).then((res) =>
    res.data.map((item: any) => ({
      title: item.name,
      text: item.description,
      job: item.jobs,
    }))
  );
//TODO:fix bug
export const getPlayInfo = (play: string) =>
  axios
    .get(`${url}instance/`, {
      params: {
        play__name: play,
      },
    })
    .then((res) => parsePlay(res.data));
