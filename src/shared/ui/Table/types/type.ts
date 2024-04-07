interface TableCell<T> {
  name: string;
  data: keyof T;
  bgColor?: string;
  width?: string;
}

export interface TableConfig<T>  {
  cells: TableCell<T>[]
}
