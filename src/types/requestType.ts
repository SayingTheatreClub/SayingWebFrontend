import { MemberResultItemType } from "./apiType";

export interface MemberItemType extends MemberResultItemType {
  id: number;
}

export interface getMemberByPageType {
  count: number;
  next: string | null;
  list: PlayMemberType[];
}

export type PlayMemberType = Omit<MemberItemType, "status">;
