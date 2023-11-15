import { Order, Transaction, TransactionEnum, transactions } from './transactions';
import { max, maxBy } from 'lodash';

const isValidDate = (date: Date): boolean => !isNaN(date.getTime());

const isWeekend = (date: Date): boolean => {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
};

const dateValidator = (date: Date, excludeWeekends: boolean = false): boolean => {
    return excludeWeekends ? isValidDate(date) && !isWeekend(date) : isValidDate(date)
}

const transformTransactions = (
  transactions: Transaction[],
  order: Order = Order.ASCENDING,
  excludeWeekends: boolean = false
): Transaction[] => {
  return transactions
    .filter((transaction: Transaction) => dateValidator(transaction.date, excludeWeekends))
    .sort((a: Transaction, b: Transaction) => {
      const dateA: Date = a.date;
      const dateB: Date = b.date;

      return order === Order.ASCENDING
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });
}; 
const sortedTransactionsByDate: Transaction[] = transformTransactions(transactions);

const {
  calculatedIncomePerDay,
  calculatedExpensePerDay,
  totalIncome,
  totalExpense,
} = sortedTransactionsByDate.reduce(
  (acc, transaction) => {
    const { type, date, amount } = transaction;
    const transactionDate = date.toISOString();

    switch (type) {
      case TransactionEnum.INCOME:
        acc.totalIncome += transaction.amount;
        acc.calculatedIncomePerDay[transactionDate] = acc
          .calculatedIncomePerDay[transactionDate] || {
          sum: 0,
          count: 0,
          max: 0,
        };
        acc.calculatedIncomePerDay[transactionDate].sum += transaction.amount;
        acc.calculatedIncomePerDay[transactionDate].count += 1;

        acc.calculatedIncomePerDay[transactionDate].max = max([
          amount,
          acc.calculatedIncomePerDay[transactionDate].max,
        ]);

        break;
      case TransactionEnum.EXPENSE:
        acc.totalExpense += transaction.amount;
        acc.calculatedExpensePerDay[transactionDate] = acc
          .calculatedExpensePerDay[transactionDate] || {
          sum: 0,
          count: 0,
          max: 0,
        };

        acc.calculatedExpensePerDay[transactionDate].sum += transaction.amount;
        acc.calculatedExpensePerDay[transactionDate].count += 1;

        acc.calculatedExpensePerDay[transactionDate].max = max([
          amount,
          acc.calculatedExpensePerDay[transactionDate].max,
        ]);

        break;

      default:
        break;
    }
    return acc;
  },
  {
    totalIncome: 0,
    totalExpense: 0,
    calculatedIncomePerDay: {} as Record<
      string,
      { sum: 0; count: 0; max: any }
    >,
    calculatedExpensePerDay: {} as Record<
      string,
      { sum: 0; count: 0; max: any }
    >,
  }
);

const calculateHighestDays = (
  x: Record<string, { sum: number; count: number; max: number }>
) => {
  const maxInADay = maxBy(Object.entries(x), ([_, { max }]) => max);
  const maxDay = maxBy(Object.entries(x), ([_, { sum }]) => sum);

  return { maxDay, maxInADay };
};

const calculateAveragesPerDay = (
  calculatedIncomePerDay: Record<string, { sum: number; count: number }>,
  calculatedExpensePerDay: Record<string, { sum: number; count: number }>
) => {
  const { averageIncomePerDay } = Object.keys(calculatedIncomePerDay).reduce(
    (acc, date) => {
      acc.averageIncomePerDay[date] =
        (calculatedIncomePerDay[date].sum || 0) /
        calculatedIncomePerDay[date].count;
      return acc;
    },
    {
      averageIncomePerDay: {} as Record<string, number>,
    }
  );

  const { averageExpensePerDay } = Object.keys(calculatedExpensePerDay).reduce(
    (acc, date) => {
      acc.averageExpensePerDay[date] =
        (calculatedExpensePerDay[date].sum || 0) /
        calculatedExpensePerDay[date].count;
      return acc;
    },
    {
      averageExpensePerDay: {} as Record<string, number>,
    }
  );

  return {
    averageIncomePerDay,
    averageExpensePerDay,
  };
};

const { maxDay: maxIncomeDay, maxInADay: maxIncomeInADay } =
  calculateHighestDays(calculatedIncomePerDay);

const { maxDay: maxExpenseDay, maxInADay: maxExpenseInADay } =
  calculateHighestDays(calculatedExpensePerDay);

const { averageExpensePerDay, averageIncomePerDay } = calculateAveragesPerDay(
  calculatedIncomePerDay,
  calculatedExpensePerDay
);

console.log('Total Income: ', totalIncome);
console.log('Total Expense: ', totalExpense);
console.log('Max Income Day: ', maxIncomeDay);
console.log('Max Income in a day: ', maxIncomeInADay);
console.log('Max Expense Day: ', maxExpenseDay);
console.log('Max Expense in a Day: ', maxExpenseInADay);
console.log('Average Income Per Day: ', averageIncomePerDay);
console.log('Average Expense Per Day: ', averageExpensePerDay);
