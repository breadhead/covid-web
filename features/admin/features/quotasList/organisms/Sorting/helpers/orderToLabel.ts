export enum Order {
  Name = 'name',
  Count = 'count',
  DateNew = 'date-now',
  DateOld = 'date-old',
}

export const orderToLabel = (order: Order) =>
  (({
    [Order.Name]: 'названию',
    [Order.Count]: 'кол-ву доступных квот',
    [Order.DateNew]: 'дате (сначала новые)',
    [Order.DateOld]: 'дате (сначала старые)',
  } as any)[order])
