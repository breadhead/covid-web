import { Order } from '../index'

export const orderToLabel = (order: Order) =>
  (({
    [Order.Name]: 'названию',
    [Order.Count]: 'кол-ву доступных квот',
    [Order.DateNew]: 'дате (сначала новые)',
    [Order.DateOld]: 'дате (сначала старые)',
  } as any)[order])
