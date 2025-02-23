import React, { useCallback, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import SchoolIcon from "@mui/icons-material/School"
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
      { icon: "settings-outline", color: "#fee800", index: 1 },
      { icon: "mail-outline", color: "#04fc43", index: 2 },
      { icon: "key-outline", color: "#fe00f1", index: 3 },
      { icon: "camera-outline", color: "#00b0fe", index: 4 },
      { icon: "game-controller-outline", color: "#fea600", index: 5 },
      { icon: "person-outline", color: "#a529ff", index: 6 },
      { icon: "videocam-outline", color: "#01bdab", index: 7 },
    ]

    return (
      <>
      <h1>Home Page</h1>
      <ul className="menu" ref={menuRef}>
      <div className="menuToggle" onClick={toggleMenu}>
        <IonIcon name="add-outline" />
      </div>
      {menuItems.map(({ icon, color, index }) => (
        <li key={index} style={{ '--i': index, '--clr': color } as React.CSSProperties}>
         <a href="#" onClick={() => onClick(index)}>
              {icon === "schoolIcon" ? <SchoolIcon className="mui-icon" /> : <IonIcon icon={icon} />}
            </a>
        </li>
      ))}
    </ul>
    </>
  );
}