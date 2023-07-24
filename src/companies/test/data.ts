export const companiesMock = [
  {
    id: 'uuid-1',
    createdAt: new Date('2021-02-26T00:55:36.632Z'),
    name: 'Webprovise Corp',
    parentId: '0',
  },
  {
    id: 'uuid-2',
    createdAt: new Date('2021-02-26T00:55:36.632Z'),
    name: 'Stamm LLC',
    parentId: 'uuid-1',
  },
  {
    id: 'uuid-3',
    createdAt: new Date('2021-02-26T00:55:36.632Z'),
    name: 'Blanda, Langosh and Barton',
    parentId: 'uuid-1',
  },
  {
    id: 'uuid-4',
    createdAt: new Date('2021-02-26T00:55:36.632Z'),
    name: 'Price and Sons',
    parentId: 'uuid-2',
  },
];

export const travelsMock = [
  {
    id: 'uuid-t1',
    createdAt: new Date('2020-08-27T00:22:26.927Z'),
    employeeName: 'Garry Schuppe',
    departure: 'Saint Kitts and Nevis',
    destination: 'Pitcairn Islands',
    price: 1.0,
    companyId: 'uuid-1',
  },
  {
    id: 'uuid-t2',
    createdAt: new Date('2020-08-27T00:22:26.927Z'),
    employeeName: 'Alison Kohler Sr.',
    departure: 'Guatemala',
    destination: 'Belgium',
    price: 1.0,
    companyId: 'uuid-2',
  },
  {
    id: 'uuid-t3',
    createdAt: new Date('2020-08-27T00:22:26.927Z'),
    employeeName: 'Cheyenne Turcotte',
    departure: 'Somalia',
    destination: 'Wallis and Futuna',
    price: 1.0,
    companyId: 'uuid-1',
  },
  {
    id: 'uuid-t4',
    createdAt: new Date('2020-08-27T00:22:26.927Z'),
    employeeName: 'Marielle Bartoletti',
    departure: 'Uganda',
    destination: 'Saint Helena',
    price: 1.0,
    companyId: 'uuid-2',
  },
  {
    id: 'uuid-t5',
    createdAt: new Date('2020-08-27T00:22:26.927Z'),
    employeeName: 'Dejah Ullrich MD',
    departure: 'Denmark',
    destination: 'New Zealand',
    price: 1.0,
    companyId: 'uuid-2',
  },
  {
    id: 'uuid-t6',
    createdAt: new Date('2020-08-27T00:22:26.927Z'),
    employeeName: 'Danial Barrows V',
    departure: 'Qatar',
    destination: 'Northern Mariana Islands',
    price: 1.0,
    companyId: 'uuid-3',
  },
  {
    id: 'uuid-t7',
    createdAt: new Date('2020-08-27T00:22:26.927Z'),
    employeeName: 'Rocio Ziemann',
    departure: 'Guernsey',
    destination: 'Macao',
    price: 1.0,
    companyId: 'uuid-4',
  },
];

export const resultExpect = [
  {
    id: 'uuid-1',
    name: 'Webprovise Corp',
    parentId: '0',
    createdAt: new Date('2021-02-26T00:55:36.632Z'),
    cost: 7,
    children: [
      {
        id: 'uuid-2',
        name: 'Stamm LLC',
        parentId: 'uuid-1',
        createdAt: new Date('2021-02-26T00:55:36.632Z'),
        cost: 4,
        children: [
          {
            id: 'uuid-4',
            name: 'Price and Sons',
            parentId: 'uuid-2',
            createdAt: new Date('2021-02-26T00:55:36.632Z'),
            cost: 1,
            children: [],
          },
        ],
      },
      {
        id: 'uuid-3',
        name: 'Blanda, Langosh and Barton',
        parentId: 'uuid-1',
        createdAt: new Date('2021-02-26T00:55:36.632Z'),
        cost: 1,
        children: [],
      },
    ],
  },
];
