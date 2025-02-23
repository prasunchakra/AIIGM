import { Injectable, signal, computed } from '@angular/core';
import { Goal } from '../components/goal-card/goal-card';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  private goalsSignal = signal<Goal[]>([
    {
      id: '1',
      title: 'Master Angular 18',
      description: 'Build 3 complex projects using Signals, Standalone Components, and SSR.',
      progress: 45,
      category: 'Work',
      dueDate: new Date('2024-12-31'),
      status: 'Active'
    },
    {
      id: '2',
      title: 'Run a Marathon',
      description: 'Train for 16 weeks and complete a full marathon under 4 hours.',
      progress: 20,
      category: 'Health',
      dueDate: new Date('2025-03-15'),
      status: 'Active'
    },
    {
      id: '3',
      title: 'Save $10,000',
      description: 'Emergency fund savings goal for the year.',
      progress: 75,
      category: 'Finance',
      dueDate: new Date('2024-11-01'),
      status: 'Active'
    },
    {
      id: '4',
      title: 'Read 24 Books',
      description: 'Read 2 books per month to improve general knowledge.',
      progress: 90,
      category: 'Personal',
      dueDate: new Date('2024-12-31'),
      status: 'Active'
    }
  ]);

  readonly goals = this.goalsSignal.asReadonly();

  readonly totalGoals = computed(() => this.goalsSignal().length);
  readonly activeGoalsCount = computed(() => this.goalsSignal().filter(g => g.status === 'Active').length);
  readonly completedGoalsCount = computed(() => this.goalsSignal().filter(g => g.status === 'Completed').length);

  addGoal(goal: Goal) {
    this.goalsSignal.update(goals => [...goals, goal]);
  }

  updateProgress(id: string, progress: number) {
    this.goalsSignal.update(goals =>
      goals.map(g => g.id === id ? { ...g, progress } : g)
    );
  }
}
