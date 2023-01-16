import { FC } from "react";
import css from "../../styles/AddTodo.module.scss";
import { setData, setAddTasks } from "../../redux/slice/slice";
import { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { nanoid } from "nanoid";
import { useAddPostMutation } from "../../redux/api/api";

export const AddTodo: FC = () => {
  const [addName, setAddName] = useState("");
  const dispatch = useAppDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddName(e.currentTarget.value.trim());
  };

  let currentData = useAppSelector((state) => state?.tasks?.data);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem = {
      userId: 1,
      id: nanoid(),
      title: addName,
      completed: false,
    };
    dispatch(setData([newItem, ...currentData]));
  };

  return (
    <div className={css.addTodoContainer}>
      <h2 className={css.addTodoTitle}>Add todo</h2>
      <form className={css.addTodoForm} onSubmit={onSubmit}>
        <input
          className={css.addTodoInput}
          type="text"
          name="name"
          onChange={onChange}
          placeholder="Todo name"
          required
        />
        <button className={css.addTodoButton} type="submit">
          +
        </button>
      </form>
    </div>
  );
};
export default AddTodo;
