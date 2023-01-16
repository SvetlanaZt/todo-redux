import { FC } from "react";
import css from "../../styles/MyTodo.module.scss";
import SearchMyTodo from "../SearchMyTodo/SearchMyTodo";
import { useState, useEffect } from "react";
import ListTodo from "../ListTodo/ListTodo";
import { useGetDataQuery } from "../../redux/api/api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setData,
  setChangeComplitedData,
  setDataComplited,
} from "../../redux/slice/slice";
import { IData } from "../../type";

export const MyTodo: FC = () => {
  const dispatch = useAppDispatch();
  const [searchName, setSearchName] = useState("");
  const [currentData, setCurrentData] = useState<IData[]>([]);

  const dataFilter = useAppSelector((state) => state?.tasks?.data);

  const { data, isLoading, isError } = useGetDataQuery("", {
    skip: dataFilter.length > 0,
  });

  useEffect(() => {
    data &&
      setCurrentData([
        ...data.filter((a) => !a.completed),
        ...data.filter((a) => a.completed),
      ]);
  }, [data]);

  useEffect(() => {
    if (dataFilter) {
      setCurrentData(dataFilter);
    }
  }, [dataFilter]);

  useEffect(() => {
    if (currentData.length > 0) dispatch(setData(currentData));
  }, [currentData]);

  const onChange = (event: string) => {
    setSearchName(event);
  };

  const dataFilterName = dataFilter?.filter((toDo: IData) =>
    toDo?.title.toLowerCase().includes(searchName.toLowerCase())
  );

  const onClickCompletedTodo = (todo: IData) => {
    // console.log(todo);
    dispatch(setChangeComplitedData(todo));
  };

  return (
    <div className={css.myTodoContainer}>
      <div className={css.myTodoWrapper}>
        <h2 className={css.myTodoTitle}>MyTodo</h2>
        <SearchMyTodo onChange={onChange} />
      </div>
      {dataFilter && (
        <ListTodo
          data={dataFilterName}
          onClickCompletedTodo={onClickCompletedTodo}
        />
      )}
    </div>
  );
};
export default MyTodo;
