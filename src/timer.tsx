import { useEffect,useState } from 'react';
interface CountDownProps{ initialTime: number}

function CountDown({ initialTime }: CountDownProps): JSX.Element {
   /* State Variable to store the current time */
   const [remainingTime,setRemainingTime]=useState(initialTime);
   
useEffect(()=>{
    const intervalId=setInterval(()=>{
        setRemainingTime((prevTime)=>(prevTime>0?prevTime-1:0));
    },1000);
    return () => clearInterval(intervalId);
},[initialTime]);
const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

   const countedTime=(value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };
   return(
    <>
    <h2>Count Down:</h2>
    <p>{`${countedTime(hours)}:${countedTime(minutes)}:${countedTime(seconds)}`}</p>
    
    </>
   );
    
}
export default CountDown