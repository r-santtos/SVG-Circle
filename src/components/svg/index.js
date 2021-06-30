import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

export default function SvgComponent(props) {
  //const kcal = (100 / 2000) * 100;
  const por = 285 - (285 * 75) / 100;

  return (
    <Svg height="100%" width="100%" viewBox="0 0 100 100" {...props}>
      <Circle 
        cx="50" 
        cy="50" 
        r="45" 
        stroke="#c6c6c6" 
        strokeWidth="10" 
        fill="none"
        strokeDasharray="0"
        strokeDashoffset="0"
      />
      <Circle 
        cx="50" 
        cy="50" 
        r="45" 
        stroke="red" 
        strokeWidth="10" 
        fill="none"
        strokeDasharray="284"
        strokeDashoffset={por}
      />
    </Svg>
  );
}