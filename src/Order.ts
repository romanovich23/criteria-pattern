import { OrderBy } from './OrderBy';
import { OrderType } from './OrderType';

export class Order {
  private readonly _orderBy: OrderBy;
  private readonly _orderType: OrderType;

  constructor(orderBy: OrderBy, orderType: OrderType) {
    this._orderBy = orderBy;
    this._orderType = orderType;
  }

  get orderBy() {
    return this._orderBy;
  }

  get orderType() {
    return this._orderType;
  }

  public static none(): Order {
    return new Order(new OrderBy(''), new OrderType('none'));
  }

  public static desc(orderBy: string): Order {
    return new Order(new OrderBy(orderBy), new OrderType('desc'));
  }

  public static asc(orderBy: string): Order {
    return new Order(new OrderBy(orderBy), new OrderType('asc'));
  }

  public serialize(): string {
    return `${this._orderBy.value}.${this._orderType.value()}`;
  }
}
