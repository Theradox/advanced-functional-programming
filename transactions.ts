export enum TransactionEnum {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export enum Order {
  ASCENDING = 'asc',
  DESCENDING = 'desc',
}

export type Transaction = {
  date: Date,
  type: TransactionEnum,
  amount: number
}

export const transactions: Transaction[] = [
  {
    date: new Date('2024-10-15T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 54,
  },
  {
    date: new Date('2024-06-08T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 39,
  },
  {
    date: new Date('2024-11-19T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 5,
  },
  {
    date: new Date('2024-09-03T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 37,
  },
  {
    date: new Date('2024-01-27T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 22,
  },
  {
    date: new Date('2024-03-09T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 5,
  },
  {
    date: new Date('2024-03-15T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 83,
  },
  {
    date: new Date('2023-12-22T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 4,
  },
  {
    date: new Date('2024-10-29T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 51,
  },
  {
    date: new Date('2024-05-06T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 16,
  },
  {
    date: new Date('2024-03-23T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 65,
  },
  {
    date: new Date('2024-04-01T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 47,
  },
  {
    date: new Date('2023-11-21T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 86,
  },
  {
    date: new Date('2024-06-06T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 81,
  },
  {
    date: new Date('2024-03-12T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 57,
  },
  {
    date: new Date('2024-09-29T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 36,
  },
  {
    date: new Date('2024-06-28T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 100,
  },
  {
    date: new Date('2024-11-14T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 57,
  },
  {
    date: new Date('2025-01-24T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 93,
  },
  {
    date: new Date('2024-03-30T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 20,
  },
  {
    date: new Date('2024-03-13T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 92,
  },
  {
    date: new Date('2024-04-23T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 42,
  },
  {
    date: new Date('2023-12-14T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 86,
  },
  {
    date: new Date('2024-07-20T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 99,
  },
  {
    date: new Date('2025-02-13T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 81,
  },
  {
    date: new Date('2024-01-23T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 37,
  },
  {
    date: new Date('2024-09-14T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 11,
  },
  {
    date: new Date('2025-01-15T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 55,
  },
  {
    date: new Date('2024-12-31T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 2,
  },
  {
    date: new Date('2024-05-10T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 74,
  },
  {
    date: new Date('2023-12-11T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 18,
  },
  {
    date: new Date('2023-12-22T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 75,
  },
  {
    date: new Date('2024-11-26T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 55,
  },
  {
    date: new Date('2024-09-18T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 46,
  },
  {
    date: new Date('2024-05-08T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 40,
  },
  {
    date: new Date('2024-07-08T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 50,
  },
  {
    date: new Date('2023-12-26T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 85,
  },
  {
    date: new Date('2024-07-16T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 75,
  },
  {
    date: new Date('2025-01-14T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 45,
  },
  {
    date: new Date('2024-09-12T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 56,
  },
  {
    date: new Date('2024-12-14T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 47,
  },
  {
    date: new Date('2024-10-22T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 26,
  },
  {
    date: new Date('2024-05-21T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 34,
  },
  {
    date: new Date('2024-08-22T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 11,
  },
  {
    date: new Date('2024-06-11T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 0,
  },
  {
    date: new Date('2024-03-04T00:00:00Z'),
    type: TransactionEnum.EXPENSE,
    amount: 92,
  },
  {
    date: new Date('2024-09-05T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 23,
  },
  {
    date: new Date('2024-07-06T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 47,
  },
  {
    date: new Date('2023-11-18T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 15,
  },
  {
    date: new Date('2024-01-19T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 46,
  },
  {
    date: new Date('2024-01-19T00:00:00Z'),
    type: TransactionEnum.INCOME,
    amount: 34,
  },
];
