'use client'
import { useEffect, useRef, useState } from 'react';
import { Calendar, Modal, Input, InputRef } from 'antd';
import { useRecoilState } from 'recoil';
import { tasksState } from '../recoilState';
import { useTasks } from '@/api';

const assignTasksToJune = (tasks:any) => {
  const julyTasks:any = {};
  tasks.forEach((task:any, index:number) => {
    const day = (index % 30) + 1; 
    const date = `2024-08-${String(day).padStart(2, '0')}`;
    if (!julyTasks[date]) {
      julyTasks[date] = [];
    }
    julyTasks[date].push(task.title);
  });
  console.log({julyTasks})
  return julyTasks;
};

const CalendarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useRecoilState(tasksState);
  const { data: fetchedTasks, isLoading } = useTasks(); // Fetching tasks with React Query

  const inputRef = useRef<InputRef>(null);
 

  const onSelectDate = (value:any , {source}:{source:any}) => {
    if (value && value.isValid() && value.date() !== null && source === 'date') { 
      setSelectedDate(value.format('YYYY-MM-DD'));
      setIsModalOpen(true);
    }
  };

  const handleOk = () => {
    if (selectedDate && task) {
      setTasks((prev) => {
        const newTasks = {
          ...prev,
          [selectedDate]: [...(prev[selectedDate] || []), task],
        };
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        return newTasks;
      });
      setTask('');
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dateCellRender = (date: any) => {
    const tasksForDate = tasks[date.format('YYYY-MM-DD')] || [];
    return (
      <ul className="list-disc ml-4">
        {tasksForDate.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    if (fetchedTasks && !isLoading) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '{}');
      const combinedTasks = { ...assignTasksToJune(fetchedTasks), ...storedTasks };
      setTasks(combinedTasks);
    }
  }, [fetchedTasks, isLoading, setTasks]);



  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isModalOpen) {
        if (event.key === 'Enter') {
          handleOk();
        } else if (event.key === 'Escape') {
          handleCancel();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, task, selectedDate]);

  


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">June Calendar</h1>
      <div className="rounded-lg border p-4 shadow-lg">
        <Calendar  onSelect={onSelectDate} dateCellRender={dateCellRender}/>
      </div>
      <Modal
        title={`Add Task for ${selectedDate}`}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          ref={inputRef}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
        />
      </Modal>
    </div>
  );
};

export default CalendarPage;
