export interface PlayInstanceItemType {
  person: string;
  play: string;
  job: string;
  desc: string;
  has_photo: boolean;
}

export interface MemberResultItemType {
  name: string;
  description: string;
  has_photo: boolean;
  duration:string;
  status: boolean;
}
export interface MemberReusltType {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<MemberResultItemType>;
}

export interface DepartmentResultItemType {
  name: string;
  description: string;
  jobs: string;
}
export type DepartmentResultType = Array<DepartmentResultItemType>;



export interface HistoryType{
  name:string;
  time:string;
  description:string;
  img:string;
}