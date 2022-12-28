export interface IData { 
    userId: number,
    id: number | string,
    title: string,
    completed: boolean
}
export interface IState {
  data: IData[],
}