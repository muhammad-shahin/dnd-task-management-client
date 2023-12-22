import { FaPlus } from 'react-icons/fa6';
import TaskCard from '../../components/TaskCard/TaskCard';
import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton';
import { useState } from 'react';
import CustomModal from '../../components/CustomModal/CustomModal';
import SelectOptions from '../../shared/SelectOptions/SelectOptions';
import Input from '../../components/Input/Input';

const Dashboard = () => {
  const [modalStatus, setModalStatus] = useState(false);
  return (
    <section className='mx-[5%] lg:container lg:mx-auto py-20'>
      {/* add new task button */}
      <div className='w-fit mx-auto'>
        <PrimaryButton
          text='Add New Tasks'
          icon={<FaPlus className='text-[22px]' />}
          handleOnClick={() => setModalStatus(!modalStatus)}
        />
      </div>
      <div className='py-8 space-y-3'>
        <p className='md:text-xl text-sm md:font-medium max-w-sm group-hover:text-slate-100 text-primary duration-500 uppercase'>
          TODO Lists
        </p>
        <hr className='text-[#4c6ffa] w-full h-[4px]' />
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center flex-wrap gap-5'>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>

      {/* ongoing task */}
      <div className='py-8 space-y-3'>
        <p className='md:text-xl text-sm md:font-medium max-w-sm group-hover:text-slate-100 text-primary duration-500 uppercase'>
          Ongoing Task
        </p>
        <hr className='text-[#4c6ffa] w-full h-[4px]' />
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center flex-wrap gap-5'>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>

      {/* completed task */}
      <div className='py-8 space-y-3'>
        <p className='md:text-xl text-sm md:font-medium max-w-sm group-hover:text-slate-100 text-primary duration-500 uppercase'>
          Completed Task
        </p>
        <hr className='text-[#4c6ffa] w-full h-[4px]' />
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center flex-wrap gap-5'>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
      <CustomModal
        modalStatus={modalStatus}
        setCustomModalStatus={setModalStatus}
        title={'Add New Task'}
      >
        <form className='text-left space-y-4 md:min-w-[480px]'>
          <Input
            placeholder='Add Task Title'
            labelText='Task Title'
            isRequired={true}
          />
          <Input
            placeholder='Add Task Description'
            labelText='Task Description'
            isRequired={true}
            type='textbox'
          />
          <SelectOptions
            defaultOption='Select Priority'
            optionsData={['Low', 'Moderate', 'High']}
            className={'lg:px-5 lg:py-1 pr-5 rounded-full'}
            containerClassName={'my-0 w-auto'}
            label='Set Priority'
            isRequired={true}
          />
          <div className='w-fit mx-auto'>
            <PrimaryButton
              text='Add Task'
              type='submit'
            />
          </div>
        </form>
      </CustomModal>
    </section>
  );
};

export default Dashboard;
