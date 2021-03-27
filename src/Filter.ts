import { FilterField } from './FilterField';
import { FilterOperator } from './FilterOperator';
import { FilterValue } from './FilterValue';

export class Filter {
  private readonly _filterField: FilterField;
  private readonly _filterOperator: FilterOperator;
  private readonly _filterValue: FilterValue;

  constructor(filterField: FilterField, filterOperator: FilterOperator, filterValue: FilterValue) {
    this._filterField = filterField;
    this._filterOperator = filterOperator;
    this._filterValue = filterValue;
  }

  get filterField() {
    return this._filterField;
  }

  get filterOperator() {
    return this._filterOperator;
  }

  get filterValue() {
    return this._filterValue;
  }

  public static fromValues(field: string, operator: string, value: string) {
    return new Filter(
      new FilterField(field),
      FilterOperator.fromValue(operator),
      new FilterValue(value)
    );
  }

  public serialize(): string {
    return `${this._filterValue.value}.${this._filterOperator.operator}.${this._filterValue.value}`;
  }

}
