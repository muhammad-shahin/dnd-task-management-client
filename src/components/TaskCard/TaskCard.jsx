import PropTypes from 'prop-types';
import { useState } from 'react';

const TaskCard = ({ cardData, icon }) => {
  const [priority, setPriority] = useState('Low' || cardData?.taskPriority);
  return (
    <div className='rounded-lg border-2 border-primary gradient-anim p-5 w-fit space-y-3 bg-transparent max-w-[450px] cursor-pointer flex justify-center items-start flex-col hover:text-white gradient-text duration-300 group'>
      {/* <div className='round-bg mx-auto'>{icon}</div> */}
      <h2 className='md:text-3xl text-xl font-semibold duration-500 w-fit mx-auto capitalize'>
        {cardData?.taskTitle}
      </h2>
      <p className='md:text-md text-sm  md:font-medium max-w-sm group-hover:text-slate-100 text-primary duration-500'>
        {cardData?.taskDesc}
      </p>
      <hr className='text-[#4c6ffa] w-full h-[4px]' />
      <div className='flex justify-between items-center w-full'>
        <p className='md:text-base text-sm md:font-medium max-w-sm group-hover:text-slate-100 text-primary duration-500'>
          Deadline : 14 Dec, 2023
        </p>
        <select
          name=''
          className={`px-3 py-1 text-white rounded-full outline-none cursor-pointer ${
            (cardData?.taskPriority === 'Low' && 'bg-primary') ||
            (cardData?.taskPriority === 'Moderate' && 'bg-orange-400') ||
            (cardData?.taskPriority === 'High' && 'bg-red-500')
          }`}
          onChange={(e) => setPriority(e.target.value)}
        >
          {cardData?.taskPriority && (
            <option value={cardData?.taskPriority}>
              {cardData?.taskPriority}
            </option>
          )}
          <option value='Low'>Low</option>
          <option value='Moderate'>Moderate</option>
          <option value='High'>High</option>
        </select>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  cardData: PropTypes.object,
  icon: PropTypes.object,
};

export default TaskCard;
