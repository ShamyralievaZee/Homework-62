import Ending from '../../components/Ending/Ending.tsx';
import WideImage from '../../components/WideImage/WideImage.tsx';
import ImageAndArticle from '../../components/ImageAndArticle/ImageAndArticle.tsx';

const Home = () => {
  return (
    <div className="home-container">
      <WideImage  src='../../../public/images/MainImage.jpg'  alt="HomeImg"/>

      <ImageAndArticle
        imgSrc='../../../public/images/outfits-1.jpg'
        imgAlt='ArticleImage'
        title='Discover Your Cute Fashion Style'
        text="At Soroso, fashion isn't just about clothes—it's about expressing who you are! Our cute fashion test
        is designed to help you find the perfect style that reflects your personality. From playful prints to chic
        accessories, discover your unique look with us."
        reverse={true}
      />

      <ImageAndArticle
        imgSrc='../../../public/images/outfits-2.jpg'
        imgAlt='ArticleImage'
        title='Discover Your Cute Fashion Style'
        text="At SorosoGoodies, we believe fashion should be fun and expressive. Our cute fashion test helps you discover
        the looks that truly resonate with your personality.  From playful patterns to elegant accessories, let us
        guide you through finding your perfect style."
        reverse={false}
      />

      <WideImage src='../../../public/images/Main-4.jpg'  alt="HomeImg"/>

      <Ending/>
    </div>
  );
};

export default Home;
