import styles from "./pageHeader.module.css";
const PageHeader = ({ title, subtitle, headerImg }) => {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <h1>{title}</h1> 
      <h3>{subtitle}</h3>
    </header>
  );
};

export default PageHeader;
