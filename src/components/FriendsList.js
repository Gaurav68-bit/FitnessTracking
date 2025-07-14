// src/components/FriendsList.js
import React, { useEffect, useRef, useState } from 'react';
import './styles/FriendsList.css';
import { FaUserFriends, FaAngleRight } from "react-icons/fa";
import Kangkan from './Assets/gauravpuri.png';
import Bhargav from './Assets/gauravpuri.png';
import Juman from './Assets/gauravpuri.png';
import Rahul from './Assets/gauravpuri.png';

const FriendsList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // ✅ Only trigger once
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const friends = [
    { name: "Kangkan kalita", activity: "Skipping", time: "10 min ago", image: Kangkan },
    { name: "Bhargav Deka", activity: "Slow Jogging", time: "22 min ago", image: Bhargav },
    { name: "Juman Boro", activity: "Hiking", time: "32 min ago", image: Juman },
    { name: "Rahul", activity: "Quick Sprint", time: "37 min ago", image: Rahul },
  ];

  return (
    <div 
      className={`friends-list ${isVisible ? 'visible' : ''}`} 
      ref={containerRef}
    >
      <div className="header-section">
        <h2><FaUserFriends /> Friends</h2>
        <button className="view-all-button">View All <FaAngleRight /></button>
      </div>
      <div className="activity-tabs">
        <button className="active">Activities</button>
        <button>Online</button>
      </div>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>
            <img className="friend-image" src={friend.image} alt={friend.name} />
            <div className="friend-info">
              <span className="friend-name">{friend.name}</span>
              <span className="friend-activity">{friend.activity}</span>
              <span className="friend-time">{friend.time}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="fitness-progress">
        <h2>Progress</h2>
        <div className="progress-chart">
          <div className="chart-circle">
            <div className="chart-segment stretching"></div>
            <div className="chart-segment cardio"></div>
            <div className="chart-segment treadmill"></div>
            <div className="chart-segment strength"></div>
            <div className="chart-center"></div>
          </div>
          <ul className="progress-details">
            <li><span className="dot cardio-dot"></span>Cardio | 30 hrs</li>
            <li><span className="dot stretching-dot"></span>Stretching | 40 hrs</li>
            <li><span className="dot treadmill-dot"></span>Treadmill | 30 hrs</li>
            <li><span className="dot strength-dot"></span>Strength | 20 hrs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
