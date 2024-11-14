import React from 'react';
import { FaTruck } from 'react-icons/fa';
const sharedClasses = {
  textZinc: 'text-zinc-800 dark:text-zinc-200',
  bgZinc: 'bg-zinc-100 dark:bg-zinc-800',
};

const HeaderTop = () => {
  return (
    <div className={`p-2 rounded-t-lg flex items-center justify-center align-center ${sharedClasses.bgZinc}`}>
     
       {/* <FaTruck className="mr-2" /> */}
      <span className={`${sharedClasses.textZinc} font-semibold`}>$5 off pickup or delivery when you spend $35 on vitamins & supplements: VIT5 </span>
      <a href="#" className={`ml-2 underline ${sharedClasses.textZinc}`}>Shop Now</a>
    </div>
  );
};

export default HeaderTop;
