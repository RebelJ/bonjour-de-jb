import React, { useCallback, useRef, useState } from 'react';
import { IonIcon } from '@ionic/react';
import SchoolIcon from "@mui/icons-material/School"
import EngineeringIcon from '@mui/icons-material/Engineering';
import TerminalIcon from '@mui/icons-material/Terminal';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import BarChartIcon from '@mui/icons-material/BarChart';
import './../css/homePageStyle.css'

export default function HomePage() {
    const menuRef = useRef<HTMLUListElement>(null);
    const [selectedIcon, setSelectedIcon] = useState<number | null>(null)

    const toggleMenu = () => {
      if (menuRef.current) {
        menuRef.current.classList.toggle('active');
      }
    };

    const onClick = useCallback((index: number)=> {
      if (menuRef.current) {
        // Set the selected icon
        setSelectedIcon(index)
        // Close the menu
        menuRef.current.classList.remove("active")
        menuRef.current.classList.add("icon-selected")
      }
    }, []);

    const resetMenu = () => {
      if (menuRef.current) {
        setSelectedIcon(null)
        menuRef.current.classList.remove("icon-selected")
      }
    }

    
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "schoolIcon":
        return <SchoolIcon className="mui-icon" />
      case "engineeringIcon":
        return <EngineeringIcon className="mui-icon" />
      case "terminalIcon":
        return <TerminalIcon className="mui-icon" />
      case "contactMailIcon":
        return <ContactMailIcon className="mui-icon" />
      case "sportsGymnasticsIcon":
        return <SportsGymnasticsIcon className="mui-icon" />
      case "bookmarksIcon":
        return <BookmarksIcon className="mui-icon" />
      case "barchart":
        return <BarChartIcon className="mui-icon" />
        case "outline":
          return <VideoCameraFrontIcon className="mui-icon" />
      default:
        return null
    }
  }
  
    const menuItems = [
      { icon: "schoolIcon", color: "#ff2972", index: 0 },
      { icon: "engineeringIcon", color: "#fee800", index: 1 },
      { icon: "contactMailIcon", color: "#fe00f1", index: 2 },
      { icon: "sportsGymnasticsIcon", color: "#00b0fe", index: 3 },
      { icon: "terminalIcon", color: "#04fc43", index: 4 },
      { icon: "bookmarksIcon", color: "#fea600", index: 5 },
      { icon: "barchart", color: "#a529ff", index: 6 },
      { icon: "videocam-outline", color: "#01bdab", index: 7 },
    ]

    return (
      <div className="homepage-container">
       <video autoPlay loop muted className="background-video">
        <source src="/wave.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {selectedIcon !== null && (
        <div
          className="selected-icon"
          style={{ "--clr": menuItems[selectedIcon].color } as React.CSSProperties}
          onClick={resetMenu}
        >
          {renderIcon(menuItems[selectedIcon].icon)}
        </div>
      )}
    
      <ul className="menu" ref={menuRef}>
      <div className="menuToggle" onClick={toggleMenu}>
        <IonIcon name="add-outline" />
      </div>
      {menuItems.map(({ icon, color, index }) => (
          <li
            key={index}
            style={{ "--i": index, "--clr": color } as React.CSSProperties}
            className={selectedIcon === index ? "selected" : ""}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onClick(index)
              }}
            >
              {renderIcon(icon)}
            </a>
          </li>
        ))}
    </ul>
    </div>
  );
}