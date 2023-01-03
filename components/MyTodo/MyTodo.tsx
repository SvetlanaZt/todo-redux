import { FC } from "react";
import css from "../../styles/MyTodo.module.scss";
import SearchMyTodo from "../SearchMyTodo/SearchMyTodo";
import { useState, useEffect } from "react";
import ListTodo from "../ListTodo/ListTodo";
import { ChangeEvent } from "react";
import { useGetDataQuery } from "../../redux/api/api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setData } from "../../redux/slice/slice";
import { IData } from "../../type";
import ComplitedTodo from "../ComplitedTodo/ComplitedTodo";
import { Pagination } from "antd";

export const MyTodo: FC = () => {
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // const [booleData, setBooleData] = useState(false);

  const { data, isLoading, isError } = useGetDataQuery({ page, limit });
  const dispatch = useAppDispatch();

  const dataFilter = useAppSelector((state) => state?.tasks?.data);
  const newData = useAppSelector((state) => state?.tasks?.newTodo);
  console.log(dataFilter);

  useEffect(() => {
    // if (booleData) {
    data &&
      dispatch(
        setData([
          ...newData,
          ...data.filter((a) => !a.completed),
          ...data.filter((a) => a.completed),
        ])
      );
    // }
  }, [data]);

  const onChange = (event: string) => {
    setSearchName(event);
  };

  const dataFilterName = dataFilter?.filter((toDo: IData) =>
    toDo?.title.includes(searchName)
  );

  const onClickCompleted = (todo: IData) => {
    console.log(todo);
    const updatedData = dataFilter.map((item) => {
      return item.id === todo.id
        ? {
            ...item,
            completed: !item.completed,
          }
        : {
            ...item,
          };
    });
    dispatch(setData(updatedData));
  };

  const onChangePagination = (e: number) => {
    setPage(e);
    // setBooleData(true);
  };

  return (
    <div className={css.myTodoContainer}>
      <div className={css.myTodoWrapper}>
        <h2 className={css.myTodoTitle}>MyTodo</h2>
        <SearchMyTodo onChange={onChange} />
      </div>
      {dataFilter && (
        <ListTodo data={dataFilterName} onClickCompleted={onClickCompleted} />
      )}
      <Pagination
        onChange={onChangePagination}
        defaultCurrent={page}
        total={200}
        showSizeChanger={false}
      />
    </div>
  );
};
export default MyTodo;
