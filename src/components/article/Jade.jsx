import styles from "./article.module.css";

const Jade = ({ title, jadeImg, jadeImg2, jadeImg3, jadeImg4}) => {
  return (
    <>
      <div className={styles.citiesText}>
        <h1>{title}</h1>
      </div>
      <section>
        <div className={styles.articleSection}>
           <div
             className={styles.articleBilleder}
             style={{ backgroundImage: `url(${jadeImg})` }}
           >
           </div>
           <div
             className={styles.articleBilleder}
             style={{ backgroundImage: `url(${jadeImg2})` }}
           >
           </div>
           <div
             className={styles.articleBilleder}
             style={{ backgroundImage: `url(${jadeImg3})` }}
           >
           </div>
           <div
             className={styles.articleBilleder}
             style={{ backgroundImage: `url(${jadeImg4})` }}
           >
           </div>
       
        </div>
      </section>
    </>
  );
};

export default Jade;
