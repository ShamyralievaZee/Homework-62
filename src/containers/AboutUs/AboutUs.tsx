import ImageAndArticle from '../../components/ImageAndArticle/ImageAndArticle.tsx';
import Ending from '../../components/Ending/Ending.tsx';

const AboutUs = () => {
    return (
      <div className="main-container">
        <ImageAndArticle
          imgSrc='./../../../public/images/VanGoghDress.jpg'
          imgAlt='ArticleImage'
          title='SOROSO - Bringing back windlike flowy fashion.'
          text="At Soroso, fashion isn't just about clothes—it's about expressing who you are! Our cute fashion test
          is designed to help you find the perfect style that reflects your personality. From playful prints to chic
          accessories, discover your unique look with us."
          reverse={true}
        />

        <ImageAndArticle
          imgSrc='./../../../public/images/about.jpg'
          imgAlt='ArticleImage'
          title='Discover Your Cute Fashion Style'
          text="At Soroso, fashion isn't just about clothes—it's about expressing who you are! Our cute fashion test
          is designed to help you find the perfect style that reflects your personality. From playful prints to chic
          accessories, discover your unique look with us."
          reverse={false}
        />

        <ImageAndArticle
          imgSrc='./../../../public/images/about-2.jpg'
          imgAlt='ArticleImage'
          title='Discover Your Cute Fashion Style'
          text="At Soroso, fashion isn't just about clothes—it's about expressing who you are! Our cute fashion test
          is designed to help you find the perfect style that reflects your personality. From playful prints to chic
          accessories, discover your unique look with us."
          reverse={true}
        />

        <Ending/>
      </div>
    );
};

export default AboutUs;