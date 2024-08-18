'use client'
import { useState } from 'react';
import { Calendar, Modal, Input } from 'antd';
import { useRecoilState } from 'recoil';
import { tasksState } from '../recoilState';

const CalendarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useRecoilState(tasksState);

  const onSelectDate = (value: any) => {
    setSelectedDate(value.format('YYYY-MM-DD'));
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (selectedDate && task) {
      setTasks((prev) => ({
        ...prev,
        [selectedDate]: [...(prev[selectedDate] || []), task],
      }));
      setTask('');
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">June Calendar</h1>
      <Calendar fullscreen={false} onSelect={onSelectDate} />
      <Modal
        title={`Add Task for ${selectedDate}`}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
        />
      </Modal>
    </div>
  );
};

export default CalendarPage;
