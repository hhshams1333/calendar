"use client";

import { useRecoilValue } from 'recoil';
import { tasksState } from '../recoilState';
import { useState } from 'react';
import { Input } from 'antd';

const TasksPage = () => {
  const tasks = useRecoilValue(tasksState);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = Object.entries(tasks).filter(([date, tasks]) =>
    tasks.some(task => task.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <Input
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {filteredTasks.map(([date, tasks]) => (
            <li key={date}>
              <strong>{date}</strong>
              <ul>
                {tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TasksPage;
