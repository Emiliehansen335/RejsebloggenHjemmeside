import styles from "./article.module.css";

const Article = ({ title, articleImg, articleImg2, articleImg3, articleImg4}) => {
  return (
    <>
      <div className={styles.citiesText}>
        <h1>{title}</h1>
      </div>
      <section>
        <div className={styles.articleSection}>
          <div
            className={styles.articleBilleder}
            style={{ backgroundImage: `url(${articleImg})` }}
          ></div>
          <div
            className={styles.articleBilleder}
            style={{ backgroundImage: `url(${articleImg2})` }}
          ></div>
          <div
            className={styles.articleBilleder}
            style={{ backgroundImage: `url(${articleImg3})` }}
          ></div>
          <div
            className={styles.articleBilleder}
            style={{ backgroundImage: `url(${articleImg4})` }}
          ></div>
        </div>

        <div className={styles.textContainer}>
          <div>
            <p>
              Da jeg ankom til Suzhou besøgte vi en silkefabrik, hvor der
              fremstillet ægte silke fra silkelarver. Her købte jeg nogle pubber
              og et billede vævet af Silke i en ramme. Her fik vi også fortalt,
              hvordan processen foregik og hvordan silke bliver fremstillet
            </p>
            <br />
            <p>
              Når den er klar til at blive forpupet, laver den en lang tråd af
              silke rundt om sig selv, som den bruger til at lave en kokon, hvor
              den senere bliver til en sommerfugl. For at fremstille silke,
              samler man disse kokoner. De varmes op for at gøre trådene lettere
              at adskille. Derefter trækkes trådene fra kokonen, og de bliver
              samlet til en lang silke-tråd. Til sidst spindes trådene sammen
              til garn, som kan bruges til at lave silke-tøj eller andre
              produkter. Så kort sagt: Silke laves fra de tråde, som silkeormen
              laver, når den bygger sin kokon!
            </p>
          </div>
          <div>
            <img src="/Kinabilleder/IMG_7767.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
