import styles from "./App.module.scss";

const App = () => {
    return (
        <div className={styles.container}>
            <h1>Teste Sass</h1>

            <p className={styles.standard}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cumque officia eveniet ipsum quia veritatis necessitatibus debitis cum voluptatem voluptatibus, praesentium doloremque, pariatur nulla temporibus consequuntur ullam quod totam repellendus?
            </p>

            <p className={styles.italic}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cumque officia eveniet ipsum quia veritatis necessitatibus debitis cum voluptatem voluptatibus, praesentium doloremque, pariatur nulla temporibus consequuntur ullam quod totam repellendus?
            </p>

            <p className={styles.standard}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cumque officia eveniet ipsum quia veritatis necessitatibus debitis cum voluptatem voluptatibus, praesentium doloremque, pariatur nulla temporibus consequuntur ullam quod totam repellendus?
            </p>
        </div>
    )
};


export default App;