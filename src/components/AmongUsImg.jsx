import React from 'react';

const AmongUsImg = ({ color, size = "100px" }) => {
  const colorMap = {
    Red: '#ff0000',
    Blue: '#0000ff',
    Green: '#008000',
    Yellow: '#ffff00',
    Orange: '#ffa500',
    Pink: '#ffc0cb',
    Purple: '#800080',
    Brown: '#a52a2a',
    Cyan: '#00ffff',
    Lime: '#32cd32',
    White: '#ffffff',
    Black: '#000000'
  };

  const fill = colorMap[color] || color || "#ff0000";

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 150" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0px 8px 12px rgba(0,0,0,0.5))", margin: "0 auto", display: "block" }}
    >
      {/* Backpack */}
      <path d="M20 50C5 50 5 65 5 65V100C5 110 15 115 25 115V50H20Z" fill={fill} stroke="black" strokeWidth="8" strokeLinejoin="round"/>
      
      {/* Body */}
      <path d="M30 35C30 15 45 5 65 5C85 5 105 15 105 35V110C105 125 105 145 85 145C75 145 70 135 70 130V115H50V130C50 135 45 145 35 145C15 145 30 125 30 110V35Z" fill={fill} stroke="black" strokeWidth="8" strokeLinejoin="round"/>
      
      {/* Visor */}
      <path d="M55 25C40 25 35 35 35 45C35 55 40 65 55 65H100C110 65 115 55 115 45C115 35 110 25 100 25H55Z" fill="#95C8E8" stroke="black" strokeWidth="8" strokeLinejoin="round"/>
      
      {/* Visor Highlight */}
      <path d="M55 35C50 35 45 38 45 45C45 45 50 48 55 48H85C90 48 95 45 95 45C95 38 90 35 85 35H55Z" fill="white" opacity="0.6"/>
    </svg>
  );
};

export default AmongUsImg;
