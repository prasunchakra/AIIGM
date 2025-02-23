import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalService } from '../services/goal';
import { GoalCardComponent } from '../components/goal-card/goal-card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, GoalCardComponent],
  template: `
    <div class="dashboard-container">
      <header class="dashboard-header">
        <div class="header-content">
          <h1 class="text-gradient">Dashboard</h1>
          <p>Track your progress and achieve your dreams!</p>
        </div>
        <button class="btn-primary">
          <span class="icon">+</span> New Goal
        </button>
      </header>

      <div class="stats-grid">
        <div class="stat-card glass-panel">
          <div class="stat-icon">🎯</div>
          <div class="stat-info">
            <span class="label">Total Goals</span>
            <span class="value">{{ goalService.totalGoals() }}</span>
          </div>
        </div>

        <div class="stat-card glass-panel">
          <div class="stat-icon">🔥</div>
          <div class="stat-info">
            <span class="label">Active</span>
            <span class="value">{{ goalService.activeGoalsCount() }}</span>
          </div>
        </div>

        <div class="stat-card glass-panel">
          <div class="stat-icon">✅</div>
          <div class="stat-info">
            <span class="label">Completed</span>
            <span class="value">{{ goalService.completedGoalsCount() }}</span>
          </div>
        </div>
      </div>

      <div class="goals-section">
        <h2>Your Goals</h2>
        <div class="goals-grid">
          @for (goal of goalService.goals(); track goal.id) {
            <app-goal-card [goal]="goal"></app-goal-card>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .dashboard-header h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .dashboard-header p {
      color: var(--color-text-muted);
      font-size: 1.1rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .stat-card {
      padding: 1.5rem;
      display: flex;
      align-items: center;
      gap: 1.5rem;
      transition: transform 0.3s ease;
    }

    .stat-card:hover {
      transform: translateY(-5px);
    }

    .stat-icon {
      font-size: 2.5rem;
      background: rgba(255, 255, 255, 0.05);
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
    }

    .stat-info {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .stat-info .label {
      color: var(--color-text-muted);
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .stat-info .value {
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-text-main);
    }

    .goals-section h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      color: var(--color-text-main);
    }

    .goals-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 2rem;
    }
  `]
})
export class DashboardComponent {
  goalService = inject(GoalService);
}
