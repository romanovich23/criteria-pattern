type ValueType = 'asc' | 'desc' | 'none'

export class OrderType {
  private readonly type: ValueType;

  constructor(type: ValueType) {
    this.type = type;
  }

  public isNone(): boolean {
    return this.type === 'none';
  }

  public isAsc(): boolean {
    return this.type === 'asc';
  }

  public isDesc(): boolean {
    return this.type === 'desc';
  }

  public value(): ValueType {
    return this.type;
  }
}
