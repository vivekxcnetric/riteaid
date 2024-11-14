import React from 'react';

const SHARED_CLASSES_CONTAINER = "flex items-center justify-center";
const SHARED_CLASSES_BUTTON = "bg-white hover:bg-gray-300 rounded-full py-1 px-4";
const SHARED_CLASSES_TEXT = "text-white font-bold";

const PromoComponent = () => {
  return (
    <div className={`${SHARED_CLASSES_CONTAINER} h-10 bg-indigo-800`}>
      <div className="bg-primary flex-col md:flex-row p-4 flex justify-center gap-10 items-center w-full px-32 py-2">
        <p className={`${SHARED_CLASSES_TEXT} text-center md:text-left md:flex-grow`}>
          Get great deals picked just for you with Rite Aid Rewards email and text.
        </p>
        <button className={`${SHARED_CLASSES_BUTTON} mt-4 md:mt-0 md:ml-4`}>
          Get rewarded!
        </button>
      </div>
    </div>
  );
};

export default PromoComponent;