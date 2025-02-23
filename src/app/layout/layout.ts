import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AiAssistantComponent } from '../components/ai-assistant/ai-assistant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, AiAssistantComponent],
  template: `
    <div class="layout-container">
      <!-- Sidebar Navigation -->
      <aside class="sidebar glass-panel">
        <div class="logo-area">
          <div class="logo-icon">✨</div>
          <span class="logo-text">AIIGM</span>
        </div>

        <nav class="nav-links">
          <a routerLink="/dashboard" routerLinkActive="active" class="nav-item">
            <span class="icon">📊</span>
            <span class="label">Dashboard</span>
          </a>
          <a routerLink="/goals" routerLinkActive="active" class="nav-item">
            <span class="icon">🎯</span>
            <span class="label">My Goals</span>
          </a>
          <a routerLink="/settings" routerLinkActive="active" class="nav-item">
            <span class="icon">⚙️</span>
            <span class="label">Settings</span>
          </a>
        </nav>

        <div class="user-profile">
          <div class="avatar">PC</div>
          <div class="user-info">
            <span class="name">Prasun C.</span>
            <span class="role">Pro Member</span>
          </div>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>

      <!-- AI Assistant -->
      <app-ai-assistant></app-ai-assistant>
    </div>
  `,
  styles: [`
    .layout-container {
      display: flex;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      background: var(--color-bg-dark);
      color: var(--color-text-main);
    }

    .sidebar {
      width: 280px;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 2rem;
      border-right: 1px solid var(--glass-border);
      z-index: 10;
    }

    .logo-area {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 3rem;
      padding-left: 0.5rem;

      .logo-icon {
        font-size: 1.5rem;
        filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.5));
      }

      .logo-text {
        font-size: 1.5rem;
        font-weight: 800;
        letter-spacing: -0.02em;
        background: linear-gradient(to right, #fff, #a5b4fc);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .nav-links {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex: 1;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-radius: 12px;
      color: var(--color-text-muted);
      text-decoration: none;
      transition: all 0.3s ease;
      font-weight: 500;

      .icon {
        font-size: 1.25rem;
        opacity: 0.7;
        transition: transform 0.3s ease;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.05);
        color: var(--color-text-main);
        
        .icon {
          transform: scale(1.1);
          opacity: 1;
        }
      }

      &.active {
        background: linear-gradient(90deg, rgba(139, 92, 246, 0.15), transparent);
        border-left: 3px solid var(--color-accent-primary);
        color: var(--color-accent-primary);
        
        .icon {
          opacity: 1;
        }
      }
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 16px;
      border: 1px solid var(--glass-border);
      margin-top: auto;
      cursor: pointer;
      transition: border-color 0.3s ease;

      &:hover {
        border-color: var(--color-accent-primary);
      }
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: white;
      font-size: 0.9rem;
    }

    .user-info {
      display: flex;
      flex-direction: column;
      
      .name {
        font-weight: 600;
        font-size: 0.95rem;
      }
      
      .role {
        font-size: 0.75rem;
        color: var(--color-text-muted);
      }
    }

    .main-content {
      flex: 1;
      padding: 2rem;
      overflow-y: auto;
      position: relative;
      
      /* Subtle background gradient orb effect */
      &::before {
        content: '';
        position: absolute;
        top: -20%;
        left: -10%;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
        pointer-events: none;
        z-index: 0;
      }
    }
  `]
})
export class LayoutComponent { }
