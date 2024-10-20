import Ending from '../../components/Ending/Ending.tsx';

const Contacts = () => {
  return (
      <section className="contact-container">
        <img src="../../../public/images/Hand-1.jpg" alt="logoSmoke" className="contact-image"/>
        <h2>Contact</h2>
        <form action="" className="contact-form">
          <input type="text" placeholder="Your name" className="name" required/>
          <input type="email" placeholder="Email address..." className="email" required/>
          <textarea placeholder="Write message here..." className="message" required></textarea>
          <input type="submit" value="Send" className="send-btn"/>
        </form>

        <Ending/>
      </section>
  );
};

export default Contacts;