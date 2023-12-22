import PropTypes from 'prop-types';
import SelectOptions from '../../shared/SelectOptions/SelectOptions';
import { useState } from 'react';

const TaskCard = ({ cardData, icon }) => {
  // const { Title, Description } = cardData;
  const [priority, setPriority] = useState('Low');
  return (
    <div className='rounded-lg border-2 border-primary gradient-anim p-5 w-fit space-y-3 bg-transparent max-w-[450px] cursor-pointer flex justify-center items-start flex-col hover:text-white gradient-text duration-300 group'>
      {/* <div className='round-bg mx-auto'>{icon}</div> */}
      <h2 className='md:text-3xl text-xl font-semibold duration-500 w-fit mx-auto'>
        Complete DND Task Management
      </h2>
      <p className='md:text-md text-sm  md:font-medium max-w-sm group-hover:text-slate-100 text-primary duration-500'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        corporis vitae aut explicabo eligendi eveniet nobis autem iste pariatur
        enim hic, saepe doloremque unde accusantium veniam quo possimus corrupti
        iusto.
      </p>
      <hr className='text-[#4c6ffa] w-full h-[4px]' />
      <div className='flex justify-between items-center w-full'>
        <p className='md:text-base text-sm md:font-medium max-w-sm group-hover:text-slate-100 text-primary duration-500'>
          Deadline : 14 Dec, 2023
        </p>
        <select
          name=''
          className={`px-3 py-1 text-white rounded-full outline-none cursor-pointer ${
            (priority === 'Low' && 'bg-primary') ||
            (priority === 'Moderate' && 'bg-orange-400') ||
            (priority === 'High' && 'bg-red-500')
          }`}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value='Low'>Low</option>
          <option value='Moderate'>Moderate</option>
          <option value='High'>High</option>
        </select>
        {/* <SelectOptions
          defaultOption='Low'
          className={'lg:px-5 lg:py-1 pr-5 rounded-full'}
          containerClassName={'my-0 w-auto'}
        /> */}
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  cardData: PropTypes.object,
  icon: PropTypes.object,
};

export default TaskCard;
