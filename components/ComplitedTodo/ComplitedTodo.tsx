import { FC } from "react";
import css from "../../styles/ComplitedTodo.module.scss";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const ComplitedTodo: FC<{ onClickComplited: Function }> = ({
  onClickComplited,
}) => {
  return (
    <div className={css.complitedTodo}>
      <p
        className={css.complitedTodoText}
        onClick={() => onClickComplited("all")}
      >
        Все /
      </p>
      <p
        className={css.complitedTodoText}
        onClick={() => onClickComplited("complited")}
      >
        Выполненные /
      </p>
      <p
        className={css.complitedTodoText}
        onClick={() => onClickComplited("notComplited")}
      >
        Не выполненные
      </p>
    </div>
  );
};
export default ComplitedTodo;
