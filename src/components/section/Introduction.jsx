import styles from "./introduction.module.css";

const Introduction = ({ title, text, title2, text2 }) => {
  return (
    <>
    <section className={styles.section}>
      <div className={styles.introduction}>
        <h1>{title}</h1>
        <img src="Kinabilleder/Kinabillede7.jpg" alt="" />
        <p>{text}</p>
      </div>
      <div className={styles.info}>
        <h1>{title2}</h1>
        <img src="Kinabilleder/IMG_7579.png" alt="" />
        <p>{text2}</p>
      </div>
    </section>
    <article>
      <div className={styles.billeder}>
      <h1>Kort over de byer vi besøgte på rejsen</h1>
      <img src="Kinabilleder\download.png" alt="" />
      </div>
    </article>
    </>
  );
};

export default Introduction;
