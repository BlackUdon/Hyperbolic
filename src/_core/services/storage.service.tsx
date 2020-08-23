const listData = [
  {
    id: '1235456546',
    name: 'Previous Session',
    description: 'Date: May 5, 2020',
  },
  {
    id: '12324453',
    name: 'Previous Session',
    description: 'Date: May 2, 2020',
  },
  {
    id: '1456545496645623',
    name: 'Previous Session',
    description: 'Date: April 27, 2020',
  },
  {
    id: '54643',
    name: 'Previous Session',
    description: 'Date: April 24, 2020',
  },
  {
    id: '14565562',
    name: 'Previous Session',
    description: 'Date: April 20, 2020',
  },
  {
    id: '145655623',
    name: 'Previous Session',
    description: 'Date: April 17, 2020',
  },
];

const listItemData = [
  {
    id: '12354546',
    name: 'bla',
    description: 'temp',
  },
  {
    id: '12443',
    name: 'bla2',
    description: 'temp',
  },
  {
    id: '15623',
    name: 'bla3',
    description: 'temp',
  },
];

function connectToDb() {
  // build connection to db
}

function initializeDatabase() {
  //create tables if not existent
}

function query() {
  //execute a query
}

export enum Entities {
  LIST = 'list',
  LISTITEM = 'listitem',
}

export function getData(entity: Entities): any[] {
  if (entity === Entities.LIST) {
    return listData;
  }

  if (entity === Entities.LISTITEM) {
    return listItemData;
  }

  return [];
}
