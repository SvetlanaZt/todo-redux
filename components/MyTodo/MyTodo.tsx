import { FC } from "react";
import css from "../../styles/MyTodo.module.scss";
import SearchMyTodo from "../SearchMyTodo/SearchMyTodo";
import { useState, useEffect } from "react";
import ListTodo from "../ListTodo/ListTodo";
import { useGetDataQuery } from "../../redux/api/api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setData, setChangeComplitedData } from "../../redux/slice/slice";
import { IData } from "../../type";

export const MyTodo: FC = () => {
  const [searchName, setSearchName] = useState("");

  const dataFilter = useAppSelector((state) => state?.tasks?.data);

  const { data, isLoading, isError } = useGetDataQuery("", {
    skip: dataFilter.length >= 0,
  });

  const dispatch = useAppDispatch();

  const newData = useAppSelector((state) => state?.tasks?.newTodo);

  useEffect(() => {
    data &&
      dispatch(
        setData([
          ...newData,
          ...data.filter((a) => !a.completed),
          ...data.filter((a) => a.completed),
        ])
      );
    // }
  }, [data, newData]);

  const onChange = (event: string) => {
    setSearchName(event);
  };

  const dataFilterName = dataFilter?.filter((toDo: IData) =>
    toDo?.title.toLowerCase().includes(searchName.toLowerCase())
  );

  const onClickCompletedTodo = (todo: IData) => {
    console.log(todo);
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
