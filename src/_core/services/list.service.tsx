export class ListService {
  lists = null;

  getLists(): null {
    if (this.lists) {
      return this.lists;
    }

    // const listData: any = DatabaseService.query('SELECT id, name /*...*/');
    // this.lists = listData.map((data) => new ListModel(data));
    return this.lists;
  }

  //   getListById(id: number) {
  //     return this.getLists().filter((list) => list.id === id);
  //   }
}
