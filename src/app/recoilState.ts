import { atom } from 'recoil';

export const tasksState = atom<{ [key: string]: string[] }>({
  key: 'tasksState',
  default: {},
});
