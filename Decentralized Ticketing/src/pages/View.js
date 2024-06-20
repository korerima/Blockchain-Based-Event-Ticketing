import { useCallback } from "react";
import "./View.css";
import HeaderNav5 from "../components/HeaderNav5";
import { useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
   function onHomeTextClick() {
    navigate("/user-reg");
  }

  return (
    <div className="view">
    <HeaderNav5/>
       
    <div className="txt1">
      <div className="home-parent">
      
        
       
      </div>
      <div className="frame-parent5">
        <div className="concert-container">
          <h1 className="concert6">Concert</h1>
        </div>
        <div className="were-here-to-container1">
          <p className="were-here-to1">
            We're here to assist you. Contact us by email, chat, or phone if you
            have any questions.
          </p>
          <p className="p1"></p>
          
        </div>
      </div>
    </div>

       <div className="sec-nav">
      <div className="sec-nav1">
        <img
          className="ghbkfdjcsx-icon"
          loading="lazy"
          alt=""
          src="/ghbkfdjcsx@2x.png"
        />
        <div className="concert">Concert</div>
      </div>
      <div className="sec-nav2">
        <img
          className="ghbkfdjcsx-icon1"
          loading="lazy"
          alt=""
          src="/ghbkfdjcsx-1@2x.png"
        />
        <div className="concert1">Sport</div>
      </div>
      <div className="sec-nav3">
        <img
          className="ghbkfdjcsx-icon2"
          loading="lazy"
          alt=""
          src="/ghbkfdjcsx-2@2x.png"
        />
        <div className="concert2">E_sports</div>
      </div>
      <div className="sec-nav4">
        <img
          className="ghbkfdjcsx-icon3"
          loading="lazy"
          alt=""
          src="/ghbkfdjcsx-3@2x.png"
        />
        <div className="concert3">{`Food & Drink`}</div>
      </div>
      <div className="sec-nav5">
        <img
          className="ghbkfdjcsx-icon4"
          loading="lazy"
          alt=""
          src="/ghbkfdjcsx-4@2x.png"
        />
        <div className="concert4">Other</div>
      </div>
    </div>
        <div className="flex-container">
          <div className="flex-item">
            <div className="wrapper">
            <div className="banner-image">
      <img src="/41c94104c65c7d728be440a52148c2c1.jpg" alt="" className="banner-image__img" />
    </div>
            </div>
            <div className="button-wrapper"> 
            <h1> Teddy Afor</h1>
              <p> AA stadium,<br/>May 11, 2024</p>
              
              <button className="btn fill" onClick={onHomeTextClick}>BUY NOW</button>
            </div>
          </div>
          <div className="flex-item">
            <div className="wrapper">
              <div className="banner-image"> <img src="/unnamed-11@2x.png" alt="" className="banner-image__img" /></div>
            </div>
            <div className="button-wrapper"> 
            <h1> Gossaye Tesfaye</h1>
              <p>Sky light hotel, <br />
                May 8, 2024.</p>
              
              <button className="btn fill" onClick={onHomeTextClick}>BUY NOW</button>
            </div>
          </div>
          <div className="flex-item">
            <div className="wrapper">
              <div className="banner-image"> <img src="/Screenshot 2023-12-13 161502.png" alt="" className="banner-image__img" /></div>
            </div>
            <div className="button-wrapper"> 
            <h1> Kassmasse</h1>
              <p>Hilton hotel, <br />
                May 18, 2024.</p>
              
              <button className="btn fill" onClick={onHomeTextClick}>BUY NOW</button>
            </div>
          </div>
          <div className="flex-item">
            <div className="wrapper">
              <div className="banner-image"> <img src="/Abinet-Agonafir-AB-Yetri-Dewel.jpg" alt="" className="banner-image__img" /></div>
            </div>
            <div className="button-wrapper"> 
            <h1> Abinet Agonafir</h1>
              <p>Sky light hotel, <br />
                May 8, 2024.</p>
              
              <button className="btn fill" onClick={onHomeTextClick}>BUY NOW</button>
            </div>
          </div>
          <div className="flex-item">
            <div className="wrapper">
              <div className="banner-image"> <img src="/Abdu-Kiar.jpg" alt="" className="banner-image__img" /></div>
            </div>
            <div className="button-wrapper" onClick={onHomeTextClick}> 
            <h1> Gossaye Tesfaye</h1>
              <p>Sky light hotel, <br />
                May 8, 2024.</p>
              
              <button className="btn fill" onClick={onHomeTextClick}>BUY NOW</button>
            </div>
          </div>
          <div className="flex-item">
            <div className="wrapper">
              <div className="banner-image"> <img src="/Screenshot 2023-12-13 172226.png" alt="" className="banner-image__img" /></div>
            </div>
            <div className="button-wrapper"> 
            <h1> Gossaye Tesfaye</h1>
              <p>Sky light hotel, <br />
                May 8, 2024.</p>
              
              <button className="btn fill" onClick={onHomeTextClick}>BUY NOW</button>
            </div>
          </div>
          <div className="flex-item">
            <div className="wrapper">
              <div className="banner-image"> <img src="/burna-boy-gq-style-spring-summer-2020-promo.webp" alt="" className="banner-image__img" /></div>
            </div>
            <div className="button-wrapper"> 
            <h1> Gossaye Tesfaye</h1>
              <p>Sky light hotel, <br />
                May 8, 2024.</p>
              
              <button className="btn fill" onClick={onHomeTextClick}>BUY NOW</button>
            </div>
          </div>
          <div className="flex-item">
            <div className="wrapper">
              <div className="banner-image"> <img src="/Screenshot 2023-12-13 163442.png" alt="" className="banner-image__img" /></div>
            </div>
            <div className="button-wrapper"> 
            <h1> Gossaye Tesfaye</h1>
              <p>Sky light hotel, <br />
                May 8, 2024.</p>
              
              <button className="btn fill" onClick={onHomeTextClick}>BUY NOW</button>
            </div>
          </div>
          </div>
          
        </div>
       


       
      
        

      
  );
};

export default View;
