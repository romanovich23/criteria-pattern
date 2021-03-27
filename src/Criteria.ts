import { Filters } from './Filters';
import { Order } from './Order';
import { LimitType } from './LimitType';
import { OffsetType } from './OffsetType';

export class Criteria {
  private readonly _filters: Filters;
  private readonly _order: Order;
  private readonly _limit: LimitType;
  private readonly _offset: OffsetType;

  constructor(filters: Filters, order: Order, limit: LimitType, offset: OffsetType) {
    this._filters = filters;
    this._order = order;
    this._limit = limit;
    this._offset = offset;
  }

  get filters() {
    return this._filters;
  }

  get order() {
    return this._order;
  }

  get limit() {
    return this._limit;
  }

  get offset() {
    return this._offset;
  }

  public static create(filters: Filters, order: Order): Criteria {
    return new Criteria(filters, order, null, null);
  }

  public serialize(): string {
    return `${this.filters.serialize()}~~${this.order.serialize()}~~${this.offset ? this.offset : 0}~~${this.limit ? this.limit : 0}`;
  }
}
