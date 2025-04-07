import styles from "./cities.module.css";

const Cities = ({ title, subtitle, subtitle2, subtitle3, subtitle4 }) => {
  return (
    <>
      <div className={styles.citiesText}>
        <h1>{title}</h1>
      </div>
      <section>
        <div className={styles.citiesSection}>
          <div className={styles.cities}>
            <img src="Kinabilleder/IMG_7622.png" alt="" />
            <h2>{subtitle}</h2>
          </div>
          <div className={styles.cities}>
            <img src="Kinabilleder/IMG_8661.png" alt="" />
            <h2>{subtitle2}</h2>
          </div>
          <div className={styles.cities}>
            <img src="Kinabilleder/IMG_8984.png" alt="" />
            <h2>{subtitle3}</h2>
          </div>
          <div className={styles.cities}>
            <img src="Kinabilleder/IMG_8272.png" alt="" />
            <h2>{subtitle4}</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cities;
