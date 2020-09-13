export const parsePlayList: any = (data: any) => {
  return data.map((item: any) => {
    const result:any = {};
    Object.assign(result,item);
    result.job = parseJob(item.job);
    return result;
  });
};

/**
 * convert job to list like below
 * [{department:"舞美组",jobs:["服装","布景","道具"]}]
 * @param data string
 * "制片人, 行政组-财务, 舞美组-服装/布景/道具"
 */
export const parseJob = (data: string) => {
  const jobs: any[] = data.split(", ");
  return jobs.map((item: string) => {
    if (!item.includes("-"))
      return {
        department: "",
        jobs: [item],
      };
    const result: any = {};
    const divides = item.split("-");
    result.department = divides[0];
    result.jobs = divides[1].split("/");
    return result;
  });
};
