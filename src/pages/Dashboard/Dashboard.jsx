import { FaPlus } from 'react-icons/fa6';
import TaskCard from '../../components/TaskCard/TaskCard';
import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton';
import { useContext, useState } from 'react';
import CustomModal from '../../components/CustomModal/CustomModal';
import SelectOptions from '../../shared/SelectOptions/SelectOptions';
import Input from '../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';

const Dashboard = () => {
  const secureAxios = useAxios();
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [modalStatus, setModalStatus] = useState(false);
  const onSubmit = (data) => {
    const newTask = { taskOf: user?.uid, status: 'todo', ...data };
    console.log(newTask);
    secureAxios
      .post('/add-task', newTask)
      .then((res) => {
        if (res.data.success) {
          setModalStatus(false);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'New Task Added Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
      {/* todo list */}
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='text-left space-y-4 md:min-w-[480px]'
        >
          <Input
            placeholder='Add Task Title'
            labelText='Task Title'
            isRequired={true}
            register={{ ...register('taskTitle') }}
          />
          <Input
            placeholder='Add Task Description'
            labelText='Task Description'
            isRequired={true}
            type='textbox'
            register={{ ...register('taskDesc') }}
          />
          <Input
            placeholder='Add Task Deadline'
            labelText='Deadline'
            isRequired={true}
            type='date'
            register={{ ...register('taskDeadline') }}
          />
          <SelectOptions
            defaultOption='Select Priority'
            optionsData={['Low', 'Moderate', 'High']}
            className={'lg:px-5 lg:py-1 pr-5 rounded-full'}
            containerClassName={'my-0 w-auto'}
            label='Set Priority'
            isRequired={true}
            register={{ ...register('taskPriority') }}
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
