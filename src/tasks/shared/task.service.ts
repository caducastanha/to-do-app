import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'Tarefa 1', completed: false },
    { id: 2, description: 'Tarefa 2', completed: true },
    { id: 3, description: 'Tarefa 3', completed: false },
    { id: 4, description: 'Tarefa 4', completed: true },
    { id: 5, description: 'Tarefa 5', completed: false },
    { id: 6, description: 'Tarefa 6', completed: false },
    { id: 7, description: 'Tarefa 7', completed: false },
    { id: 8, description: 'Tarefa 8', completed: false },
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    return this.tasks.find(task => task.id == id);
  }

  create(task: Task) {
    let lastId = 0;

    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }
    task.id = lastId + 1;

    this.tasks.push(task);

    return task;
  }

  update(task: Task) {
    const oldTask = this.getById(task.id);

    if (oldTask) {
      oldTask.description = task.description;
      oldTask.completed = task.completed;
    }
    return oldTask;
  }

  delete(id: number) {
    const index = this.tasks.findIndex(task => task.id == id);
    this.tasks.splice(index, 1);
    return;
  }
}
