import styles from "./Category.module.css";

function Category({ category, children }){
    return (
        <section className={styles.category}>
            <h2>Categoria</h2>
            <div>
                { children }
            </div>
        </section>
    );
}

export default Category;