import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";




import EventCre from "./pages/EventCre";

import Resell from "./pages/Resell";
import Venueset from "./pages/Venueset";


import Userman from "./pages/Userman";


import HomePage from "./pages/HomePage";

import UserReg from "./pages/UserReg";


import UserLogin from "./pages/UserLogin";


import About from "./pages/About";


import EventOrganizerReg from "./pages/EventOrganizerReg";
import EventOrganizerLogin from "./pages/EventOrganizerLogin";
import FrameContainer from "./components/FrameContainer";


import Qrcode1 from "./pages/Qrcode1";
import Qrcode from "./pages/Qrcode";
import QRreader from "./pages/QRreader";
import Try from "./pages/Try";
import Ticket from "./pages/Ticket";
import TiketScaner from "./pages/TiketScaner";
import UserProfile from "./pages/UserProfile";

import UserReg1 from "./pages/UserReg1";
import Displayevent from "./pages/Displayevent";
import Event from "./pages/Event";

import DisplayVenue from "./pages/DisplayVenues";

import EEvhost from "./pages/Evhost";
import Venue from "./pages/Venue";
import Eventmanage from "./pages/Eventmanage";



import Mak from "./pages/Mak";
import View from "./pages/View";


import EventfClients from "./pages/EventsfClient";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
     
    
     
     
      <Route path="ev" element={<EventCre />} />

      <Route path="re" element={<Resell />} />
      <Route path="ve" element={<Venueset />} />
     
    
      <Route path="us" element={<Userman/>}/>
   
      
      <Route path="/0" element={<HomePage />} />
   
      <Route path="/user-reg" element={<UserReg />} />
    
      
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/about" element={<About />} />
      <Route path="/try" element={<Try />} />

      <Route path="/event-organizer-reg" element={<EventOrganizerReg />} />
  
      <Route path="/event-organizer-login" element={<EventOrganizerLogin />} />
      
      <Route path="/rq" element={<QRreader />} />
    
      <Route path="/qr" element={<Qrcode1 />} />
      <Route path="/qrmanage" element={<Qrcode />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/scan" element={<TiketScaner />} />
      <Route path="/userpro" element={<UserProfile />} />

      <Route path="/user" element={<UserReg1 />} />
      <Route path="/dd" element={<Displayevent />} />
      <Route path="/Event/:eventId" element={<Event />} />
     
      <Route path="/cc" element={<Venueset />} />
      <Route path="/dv" element={<DisplayVenue />} />
   
      <Route path="/host" element={<EEvhost />} />
      <Route path="/Venue/:venueId" element={<Venue />} />
    
      <Route path="/Eventcre" element={<EventCre />} />
     
      <Route path="/resell" element={<Resell />} />
      <Route path="/mak" element={<Mak />} />
    
      <Route path="/u" element={<Userman />} />
      <Route path="/" element={<View />} />
    
      <Route path="/eventmanage" element={<Eventmanage />} />
      <Route path="/events" element={<EventfClients />} />
      
     
      
      
    </Routes>
  );
}
export default App;
