import Article from "../components/article/Article";
import PageHeader from "../components/pageHeader/PageHeader";
import Cities from "../components/section/Cities";
import headerImg from "/Kinabilleder/IMG_0575.png";
import articleImg from "/Kinabilleder/IMG_7763.png";
import articleImg2 from "/Kinabilleder/IMG_7762.png";
import articleImg3 from "/Kinabilleder/IMG_7765.png";
import articleImg4 from "/Kinabilleder/IMG_7764.png";
import jadeImg from "/Kinabilleder/IMG_8873.png";
import jadeImg2 from "/Kinabilleder/IMG_8875.png";
import jadeImg3 from "/Kinabilleder/IMG_8871.png";
import jadeImg4 from "/Kinabilleder/IMG_8868.png";
import Jade from "../components/article/Jade";

const Home = () => {
  return (
    <div className="article">
      <PageHeader
        title="Emilie i Kina"
        subtitle="Velkommen til min blog"
        headerImg={headerImg}
      />
      <Cities
        title="De forskellige storbyer jeg besøgte"
        subtitle="Shanghai"
        subtitle2="Xian"
        subtitle3="Beijing"
        subtitle4="Gulin"
      />
      <Article
        title="Mit besøg på en silkefabrik i Suzhou"
        articleImg={articleImg}
        articleImg2={articleImg2}
        articleImg3={articleImg3}
        articleImg4={articleImg4}
      />
      <Jade
        title="Jadefabrik i Suzhou"
        jadeImg={jadeImg}
        jadeImg2={jadeImg2}
        jadeImg3={jadeImg3}
        jadeImg4={jadeImg4} 
      />
    </div>
  );
};

export default Home;
