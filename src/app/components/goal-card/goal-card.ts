import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Goal {
  id: string;
  title: string;
  description: string;
  progress: number;
  category: 'Personal' | 'Work' | 'Health' | 'Finance';
  dueDate: Date;
  status: 'Active' | 'Completed' | 'Paused';
}

@Component({
  selector: 'app-goal-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="goal-card glass-panel">
      <div class="card-header">
        <div class="category-badge" [class]="goal().category.toLowerCase()">
          {{ goal().category }}
        </div>
        <div class="status-indicator" [class]="goal().status.toLowerCase()"></div>
      </div>
      
      <h3 class="title">{{ goal().title }}</h3>
      <p class="description">{{ goal().description }}</p>
      
      <div class="progress-section">
        <div class="progress-info">
          <span class="label">Progress</span>
          <span class="percentage">{{ goal().progress }}%</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" [style.width.%]="goal().progress"></div>
        </div>
      </div>

      <div class="card-footer">
        <span class="due-date">Due {{ goal().dueDate | date:'mediumDate' }}</span>
        <button class="action-btn">View Details</button>
      </div>
    </div>
  `,
  styles: [`
    .goal-card {
      padding: 1.5rem;
      transition: var(--transition-medium);
      height: 100%;
      display: flex;
      flex-direction: column;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        border-color: rgba(139, 92, 246, 0.3);
      }
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .category-badge {
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;

      &.personal { background: rgba(236, 72, 153, 0.2); color: #f9a8d4; }
      &.work { background: rgba(139, 92, 246, 0.2); color: #c4b5fd; }
      &.health { background: rgba(6, 182, 212, 0.2); color: #67e8f9; }
      &.finance { background: rgba(16, 185, 129, 0.2); color: #6ee7b7; }
    }

    .status-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      
      &.active { background-color: #10b981; box-shadow: 0 0 8px #10b981; }
      &.completed { background-color: #3b82f6; }
      &.paused { background-color: #f59e0b; }
    }

    .title {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      line-height: 1.3;
    }

    .description {
      color: var(--color-text-muted);
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
      flex: 1;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .progress-section {
      margin-bottom: 1.5rem;
    }

    .progress-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .progress-bar-bg {
      height: 6px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      overflow: hidden;
    }

    .progress-bar-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--color-accent-secondary), var(--color-accent-primary));
      border-radius: 3px;
      transition: width 1s ease-out;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .due-date {
      font-size: 0.75rem;
      color: var(--color-text-muted);
    }

    .action-btn {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--color-text-main);
      padding: 0.4rem 0.8rem;
      border-radius: var(--radius-sm);
      font-size: 0.75rem;
      cursor: pointer;
      transition: var(--transition-fast);

      &:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: var(--color-text-muted);
      }
    }
  `]
})
export class GoalCardComponent {
  goal = input.required<Goal>();
}
