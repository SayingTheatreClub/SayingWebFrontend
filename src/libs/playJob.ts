import { PlayInstanceItemType } from "../types/apiType";

type departmentType = string;
interface memberParsedType {
  name: string;
  job: string;
  hasPhoto: boolean;
}
interface ParsePlayResultItemType {
  department: departmentType;
  members: Array<memberParsedType>;
}
/**
 * parse member popup
 * @param data
 */
export const parsePlay = (data: Array<PlayInstanceItemType>) => {
  const parsed = new Map<departmentType, Array<memberParsedType>>();
  const result: Array<ParsePlayResultItemType> = [];
  data.forEach((item) => {
    const jobs = parseJob(item.job);

    jobs.forEach((job: string) => {
      const parsedJob = job.split("-");

      if (!parsed.has(parsedJob[0])) parsed.set(parsedJob[0], []);
      //department
      parsed.get(parsedJob[0])?.push({
        name: item.person,
        job: parsedJob[1],
        //has photo or not
        hasPhoto: item.has_photo,
      });
    });
  });
  parsed.forEach((item, index) => {
    result.push({
      department: index,
      members: item,
    });
  });
  return result;
};

const parseJob = (data: string) => {
  //有些标点符号是错的，要特别处理
  data = data.replace("，", ", ");

  const jobs: any[] = data.split(", ");
  return jobs;
};
