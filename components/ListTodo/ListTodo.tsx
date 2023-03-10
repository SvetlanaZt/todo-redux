import { FC } from "react";
import css from "../../styles/ListTodo.module.scss";
import { IData } from "../../type";
import { useState, useEffect } from "react";
import ComplitedTodo from "../ComplitedTodo/ComplitedTodo";

export const ListTodo: FC<{
  data: IData[];
  onClickCompletedTodo: Function;
}> = ({ data, onClickCompletedTodo }) => {
  const [dataComplited, setDataComplited] = useState(data);

  useEffect(() => {
    setDataComplited(data);
  }, [data]);

  const onClickComplited = (status: string) => {
    console.log(status);
    if (status === "all") {
      setDataComplited(data);
    } else if (status === "complited") {
      setDataComplited(data.filter((item) => item.completed));
    } else if (status === "notComplited") {
      setDataComplited(data.filter((item) => !item.completed));
    }
  };
  return (
    <>
      <ComplitedTodo onClickComplited={onClickComplited} />
      <div>
        <ul className={css.listTodo}>
          {dataComplited?.map((todo) => (
            <li key={todo.id} className={css.itemList}>
              {todo.title}
              <div
                onClick={() => onClickCompletedTodo(todo)}
                className={todo.completed ? css.switch_btn : css.switch_on}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ListTodo;
