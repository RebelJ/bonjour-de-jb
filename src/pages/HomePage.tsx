import React, { useCallback, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import SchoolIcon from "@mui/icons-material/School"
import EngineeringIcon from '@mui/icons-material/Engineering';
import TerminalIcon from '@mui/icons-material/Terminal';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import './../css/homePageStyle.css'


export default function HomePage() {
    // const hoverSoundRef = useRef(new Audio('audio/beep.mp3'));
    const menuRef = useRef<HTMLUListElement>(null);
  
    const toggleMenu = () => {
      if (menuRef.current) {
        menuRef.current.classList.toggle('active');
      }
    };
  
    // const playHoverSound = useCallback(() => {
    //   hoverSoundRef.current.currentTime = 0; // Reset the audio
    //   hoverSoundRef.current.play();
    // }, [hoverSoundRef]);
  
    // useEffect(() => {
    //   const links = document.querySelectorAll('.menu a');
    //   links.forEach(link => {
    //     link.addEventListener('mouseenter', playHoverSound);
    //   });
      
    //   return () => {
    //     links.forEach(link => {
    //       link.removeEventListener('mouseenter', playHoverSound);
    //     });
    //   };
    // }, [playHoverSound]);

    const onClick = useCallback((index: number)=> {
      console.log('you click on', index)
    }, []);

    const menuItems = [
      { icon: "schoolIcon", color: "#ff2972", index: 0 },
      { icon: "engineeringIcon", color: "#fee800", index: 1 },
      { icon: "contactMailIcon", color: "#fe00f1", index: 2 },
      { icon: "sportsGymnasticsIcon", color: "#00b0fe", index: 3 },
      { icon: "terminalIcon", color: "#04fc43", index: 4 },
      { icon: "bookmarksIcon", color: "#fea600", index: 5 },
      { icon: "person-outline", color: "#a529ff", index: 6 },
      { icon: "videocam-outline", color: "#01bdab", index: 7 },
    ]

    return (
      <div className="homepage-container">
       <video autoPlay loop muted className="background-video">
        <source src="/wave.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ul className="menu" ref={menuRef}>
      <div className="menuToggle" onClick={toggleMenu}>
        <IonIcon name="add-outline" />
      </div>
      {menuItems.map(({ icon, color, index }) => (
        <li key={index} style={{ '--i': index, '--clr': color } as React.CSSProperties}>
         <a href="#" onClick={() => onClick(index)}>
              {icon === "schoolIcon" ? <SchoolIcon className="mui-icon" /> : <></>}
              {icon === "engineeringIcon" ? <EngineeringIcon className="mui-icon" /> : <></>}
              {icon === "terminalIcon" ? <TerminalIcon className="mui-icon" /> : <></>}
              {icon === "contactMailIcon" ? <ContactMailIcon className="mui-icon" /> : <></>}
              {icon === "sportsGymnasticsIcon" ? <SportsGymnasticsIcon className="mui-icon" /> : <></>}
              {icon === "bookmarksIcon" ? <BookmarksIcon className="mui-icon" /> : <></>}
              {/* {icon === "sportsGymnasticsIcon" ? <SportsGymnasticsIcon className="mui-icon" /> : <></>}
              {icon === "sportsGymnasticsIcon" ? <SportsGymnasticsIcon className="mui-icon" /> : <></>} */}

            </a>
        </li>
      ))}
    </ul>
    </div>
  );
}