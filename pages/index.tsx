import AddTodo from "../components/AddTodo/AddTodo";
import MyTodo from "../components/MyTodo/MyTodo";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <main>
      <div className={styles.homeContainer}>
        <h1 className={styles.homeTitle}>Todo App</h1>
        <div className={styles.homeWrapper}>
          <AddTodo />
          <MyTodo />
        </div>
      </div>
    </main>
  );
}
