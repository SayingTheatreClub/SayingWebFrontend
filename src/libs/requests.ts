import axios, { AxiosResponse } from "axios";
import {
  getDepartsItemType,
  getMemberByPageType,
  PlayMemberType,
} from "../types/requestType";
import { parsePlay } from "./playJob";
import { url } from "./security";
import { getQueryVariable } from "./url";
import {
  DepartmentResultItemType,
  MemberReusltType,
  PlayInstanceItemType,
  HistoryType,
} from "../types/apiType";

/**
 * get member
 * @param nextPage
 * @param limit
 */
export async function getMemberByPage(
  nextPage: number,
  limit: number,
  isCurrent:boolean
): Promise<getMemberByPageType> {
  const res = await axios.get(`${url}members/`, {
    params: {
      page: nextPage,
      page_size: limit,
      status: isCurrent,
    },
  });
  const data: MemberReusltType = res.data;
  const next = data.next !== null ? getQueryVariable(data.next, "page") : null;
  const MemberList = data.results.map((item: any) => ({
    id: Math.floor(Math.random() * 70) + 1,
    ...item,
  }));
  return {
    list: MemberList,
    count: data.count,
    next: next,
  };
}
/**
 * get member by play
 * @param play play
 */
export const getMemberByPlay = async (play: string) => {
  const res: AxiosResponse<Array<PlayInstanceItemType>> = await axios.get(
    `${url}instance/`,
    {
      params: {
        play__name: play,
      },
    }
  );
  return res.data.map((item: PlayInstanceItemType) => ({
    name: item.person,
    description: item.desc,
    has_photo: item.has_photo,
    id: Math.floor(Math.random() * 70) + 1,
  }));
};

/**
 * get member by play or job
 * @param play
 * @param job
 */
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
  const data: Array<PlayInstanceItemType> = res.data;
  //whether this person exist
  const flag = new Set<string>();
  const result: Array<PlayMemberType> = [];
  data.forEach((item: any) => {
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
export const getDeparts = async () => {
  const res: Array<getDepartsItemType> = await axios
    .get(`${url}departments/`)
    .then((res) =>
      res.data.map((item: DepartmentResultItemType) => ({
        title: item.name,
        text: item.description,
        job: item.jobs,
      }))
    );
  return res;
};
/**
 * get all information about a play
 * @param play
 */
export const getPlayInfo = (play: string) =>
  axios
    .get(`${url}instance/`, {
      params: {
        play__name: play,
      },
    })
    .then((res) => parsePlay(res.data));

export const getHisotries = async () => {
  const res: Array<HistoryType> = await axios
    .get(`${url}history/?ordering=-time`)
    .then((res) => res.data);
  return res;
};
