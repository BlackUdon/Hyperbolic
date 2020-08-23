export type ListModel = {
  ID: number;
};

export function makeList(ID: number, list: any): ListModel {
  return {
    ID: ID,
    list: list,
  } as ListModel;
}
