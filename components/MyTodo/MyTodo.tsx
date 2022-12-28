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

  const { data, isLoading, isError } = useGetDataQuery({ page, limit });
  const dispatch = useAppDispatch();

  useEffect(() => {
    data &&
      dispatch(
        setData([
          ...data.filter((a) => !a.completed),
          ...data.filter((a) => a.completed),
        ])
      );
  }, [data, dispatch]);

  const dataFilter = useAppSelector((state) => state?.tasks?.data);

  const onChange = (event: string) => {
    setSearchName(event);
  };

  const dataFilterName = dataFilter?.filter((toDo) =>
    toDo?.title.includes(searchName)
  );

  const onClickCompleted = (todo: IData) => {
    const updatedData = dataFilter.map((item) => {
      console.log(item);
      // if (item.id === todo.id) {
      //   return { completed: !item.completed };
      // }
    });
    // dispatch(setData(updatedData));
  };

  const onChangePagination = (e: number) => {
    setPage(e);
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

// const onClickCompleted = (todo: IData) => {
//     const updatedData = dataFilter.map((item) => {
//       return item.id === todo.id
//         ? {
//             ...item,
//             completed: !item.completed,
//           }
//         : {
//             ...item,
//           };
//     });
//     dispatch(setData(updatedData));
//   };
