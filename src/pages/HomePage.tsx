import React, { useCallback, useEffect, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import './../css/homePageStyle.css'

export default function HomePage() {

    // const toggleSoundRef = useRef(new Audio('audio/close.mp3'));
    // const openSoundRef = useRef(new Audio('audio/open.mp3'));
    const hoverSoundRef = useRef(new Audio('audio/beep.mp3'));
    const menuRef = useRef<HTMLUListElement>(null);
  
    const toggleMenu = () => {
      if (menuRef.current) {
        menuRef.current.classList.toggle('active');
        // toggleSoundRef.current.currentTime = 0; // Reset the audio
        // toggleSoundRef.current.play();
      }
    };
  
    const playHoverSound = useCallback(() => {
      hoverSoundRef.current.currentTime = 0; // Reset the audio
      hoverSoundRef.current.play();
    }, [hoverSoundRef]);
  
    useEffect(() => {
      const links = document.querySelectorAll('.menu a');
      links.forEach(link => {
        link.addEventListener('mouseenter', playHoverSound);
      });
      
      return () => {
        links.forEach(link => {
          link.removeEventListener('mouseenter', playHoverSound);
        });
      };
    }, [playHoverSound]);

    return (
      <>
      <ul className="menu" ref={menuRef}>
      <div className="menuToggle" onClick={toggleMenu}>
        <IonIcon name="add-outline" />
      </div>
      {[
        { icon: "home-outline", color: "#ff2972", index: 0 },
        { icon: "settings-outline", color: "#fee800", index: 1 },
        { icon: "mail-outline", color: "#04fc43", index: 2 },
        { icon: "key-outline", color: "#fe00f1", index: 3 },
        { icon: "camera-outline", color: "#00b0fe", index: 4 },
        { icon: "game-controller-outline", color: "#fea600", index: 5 },
        { icon: "person-outline", color: "#a529ff", index: 6 },
        { icon: "videocam-outline", color: "#01bdab", index: 7 }
      ].map(({ icon, color, index }) => (
        <li key={index} style={{ '--i': index, '--clr': color } as React.CSSProperties}>
          <a href="#">
            <IonIcon name={icon} />
          </a>
        </li>
      ))}
    </ul>
    </>
  );
}