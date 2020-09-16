
export const parsePlay = (data: Array<any>) => {
  const parsed = new Map();
  const result = new Array();
  data.forEach((item) => {
    const jobs = parseJob(item.job);
    jobs.forEach((job: string) => {
      const parsedJob = job.split("-");
      if (!parsed.has(parsedJob[0])) parsed.set(parsedJob[0], []);
      parsed.get(parsedJob[0]).push({
        name: item.person,
        job: parsedJob[1],
      });
    });
  });
  parsed.forEach((item,index)=>{
    result.push({
      department:index,
      members:item,
    })
  })
  return result;
};

const parseJob = (data: string) => {
  //有些标点符号是错的，要特别处理
  data = data.replace("，", ", ");

  const jobs: any[] = data.split(", ");
  return jobs;
};
