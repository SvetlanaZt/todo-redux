import { FC } from "react";
import css from "../../styles/AddTodo.module.scss";
import { setData, setAddTasks } from "../../redux/slice/slice";
import { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { nanoid } from "nanoid";

export const AddTodo: FC = () => {
  const [addName, setAddName] = useState("");
  // console.log(addName);

  const dispatch = useAppDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddName(e.currentTarget.value.trim());
  };

  const onSuubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem = {
      userId: 1,
      id: nanoid(),
      title: addName,
      completed: false,
    };
    dispatch(setAddTasks(newItem));
  };

  return (
    <div className={css.addTodoContainer}>
      <h2 className={css.addTodoTitle}>Add todo</h2>
      <form className={css.addTodoForm} onSubmit={onSuubmit}>
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
