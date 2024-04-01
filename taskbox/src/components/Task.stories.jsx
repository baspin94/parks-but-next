import Task from './Task';

// This is the main component (there should just be one):
// This tells you 
export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
};

// These are the child stories, permutations of the component above (there can be as many as you need):
export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};