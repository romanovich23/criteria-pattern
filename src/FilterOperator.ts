enum Operator {
  EQUALS = '=',
  NOT_EQUAL = '!=',
  GT = '>',
  LT = '<',
  CONTAINS = 'CONTAINS',
  NOT_CONTAINS = 'NOT_CONTAINS'
}

type OperatorType = '=' | '!=' | '>' | '<' | 'CONTAINS' | 'NOT_CONTAINS';

export class FilterOperator {
  private readonly _operator: OperatorType;

  constructor(operator: OperatorType) {
    this._operator = operator;
  }

  public static fromValue(value: string): FilterOperator | null {
    switch (value) {
      case Operator.EQUALS:
        return new FilterOperator(Operator.EQUALS);
      case Operator.NOT_EQUAL:
        return new FilterOperator(Operator.NOT_EQUAL);
      case Operator.GT:
        return new FilterOperator(Operator.GT);
      case Operator.LT:
        return new FilterOperator(Operator.LT);
      case Operator.CONTAINS:
        return new FilterOperator(Operator.CONTAINS);
      case Operator.NOT_CONTAINS:
        return new FilterOperator(Operator.NOT_CONTAINS);
      default:
        return null;
    }
  }

  get operator(): OperatorType {
    return this._operator;
  }
}
