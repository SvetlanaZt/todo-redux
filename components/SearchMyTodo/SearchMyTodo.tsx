import { FC } from "react";
import css from "../../styles/SearchMyTodo.module.scss";
import { ChangeEvent } from "react";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Function

export const SearchMyTodo: FC<{ onChange: Function }> = ({ onChange }) => {
  return (
    <div className={css.searchTodo}>
      <input
        className={css.searchInput}
        type="text"
        name="name"
        onChange={(event) => onChange(event.currentTarget.value)}
        placeholder="Search"
        required
      />
    </div>
  );
};
export default SearchMyTodo;
