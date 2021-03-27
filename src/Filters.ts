import { Filter } from './Filter';

export class Filters {
  private readonly _filters: Array<Filter>;

  constructor(filters: Array<Filter>) {
    this._filters = filters;
  }

  get filters(): Array<Filter> {
    return this._filters;
  }

  public static fromValues(values: Array<{ field: string, operator: string, value: string }>) {
    return new Filters(values.map(value => Filter.fromValues(value.field, value.operator, value.value)));
  }

  public static none(): Filters {
    return new Filters([]);
  }

  public serialize(): string {
    return this.filters.map(value => value.serialize()).join('^');
  }
}
