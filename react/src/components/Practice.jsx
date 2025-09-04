import { useState } from 'react';

const Practice = () => {
  const [isColor, setIsColor] = useState("");

  const handleRedFunction = () => {
    setIsColor("red")
  }

  const handleBlueFunction = () => {
    setIsColor("blue")
  }

  return (
    <div className='bg-white w-screen h-screen flex justify-center items-center'>
        <div>{isColor}</div>
      <div className='space-x-2'>
        <button onClick={handleRedFunction} className='bg-red-400 w-10 h-10'>Red</button>
        <button onClick={handleBlueFunction} className='bg-blue-400 w-10 h-10'>Blue</button>
      </div>
    </div>
  );
};
export default Practice;
