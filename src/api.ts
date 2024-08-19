import axios from 'axios';
import { useQuery } from 'react-query';

const fetchTasks = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return data.slice(0,10);
  };
  
  export const useTasks = () => {
    return useQuery('tasks', fetchTasks);
  };