interface TableCell<T> {
  name: string;
  data: keyof T;
}

export interface TableConfig<T>  {
  cells: TableCell<T>[]
}
