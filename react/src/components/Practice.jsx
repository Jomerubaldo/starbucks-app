import { useState } from 'react';

const Practice = () => {
  const [Color, setColor] = useState('');

  const handleRedFunction = () => {
    return setColor(<div className="bg-red-500 w-10 h-10"></div>);
  };

  const handleBlueFunction = () => {
    return setColor(<div className="bg-blue-500 w-10 h-10"></div>);
  };

  return (
    <div className="bg-white w-screen h-screen flex justify-center items-center">
      <div>{Color}</div>
      <div className="space-x-2">
        <button onClick={handleRedFunction} className="bg-red-400 w-10 h-10">
          Red
        </button>
        <button onClick={handleBlueFunction} className="bg-blue-400 w-10 h-10">
          Blue
        </button>
      </div>
    </div>
  );
};
export default Practice;
