import { url } from "./security";
import axios from "axios";
import { getQueryVariable } from "./url";
import {parsePlay} from './playJob';

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
      return {
        list: data.results,
        count: data.count,
        next: next,
      };
    });
}

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
export const getPlayInfo = (play: string) => (
  axios
    .get(`${url}instance/`, {
      params: {
        play__name: play,
      },
    })
    .then((res) => parsePlay(res.data))
);
