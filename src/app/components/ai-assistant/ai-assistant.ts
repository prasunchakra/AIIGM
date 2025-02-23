import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ai-assistant-container" [class.open]="isOpen()">
      <div class="chat-window glass-panel" *ngIf="isOpen()">
        <div class="chat-header">
          <div class="header-info">
            <span class="ai-icon">✨</span>
            <span class="title">AI Goal Coach</span>
          </div>
          <button class="close-btn" (click)="toggleChat()">×</button>
        </div>
        
        <div class="chat-messages">
          <div class="message ai">
            <div class="avatar">AI</div>
            <div class="content">
              Hello Prasun! I noticed you have a deadline coming up for "Master Angular 18". Would you like me to break down the remaining tasks for you?
            </div>
          </div>
          
          <div class="message user">
            <div class="content">
              Yes, please! That would be helpful.
            </div>
          </div>

           <div class="message ai">
            <div class="avatar">AI</div>
            <div class="content">
              Great! Based on your progress (45%), here's a suggested plan for this week:
              <br><br>
              1. Deep dive into Signals (2 days)
              <br>
              2. Build the "Task Manager" demo app (3 days)
              <br>
              3. Review SSR hydration concepts (1 day)
            </div>
          </div>
        </div>

        <div class="chat-input-area">
          <input type="text" placeholder="Ask for advice..." class="chat-input">
          <button class="send-btn">➤</button>
        </div>
      </div>

      <button class="toggle-btn" (click)="toggleChat()" [class.hidden]="isOpen()">
        <span class="icon">✨</span>
        <span class="label">Ask AI</span>
      </button>
    </div>
  `,
  styles: [`
    .ai-assistant-container {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .toggle-btn {
      background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 30px;
      color: white;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
      transition: var(--transition-medium);
    }

    .toggle-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(139, 92, 246, 0.6);
    }

    .toggle-btn.hidden {
      display: none;
    }

    .chat-window {
      width: 350px;
      height: 500px;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      overflow: hidden;
      animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .chat-header {
      padding: 1rem;
      border-bottom: 1px solid var(--glass-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(255, 255, 255, 0.05);
    }

    .header-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
    }

    .close-btn {
      background: none;
      border: none;
      color: var(--color-text-muted);
      font-size: 1.5rem;
      cursor: pointer;
      line-height: 1;
    }
    
    .close-btn:hover { 
      color: var(--color-text-main); 
    }

    .chat-messages {
      flex: 1;
      padding: 1rem;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .message {
      display: flex;
      gap: 0.75rem;
      max-width: 90%;
    }
      
    .message.ai {
      align-self: flex-start;
    }

    .message.ai .content { 
      background: rgba(255, 255, 255, 0.05); 
      border-top-left-radius: 2px; 
    }
      
    .message.user {
      align-self: flex-end;
      flex-direction: row-reverse;
    }

    .message.user .content { 
      background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-tertiary));
      color: white;
      border-top-right-radius: 2px;
    }

    .avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--color-accent-secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.6rem;
      font-weight: 700;
      flex-shrink: 0;
    }

    .content {
      padding: 0.75rem;
      border-radius: 12px;
      font-size: 0.875rem;
      line-height: 1.4;
    }

    .chat-input-area {
      padding: 1rem;
      border-top: 1px solid var(--glass-border);
      display: flex;
      gap: 0.5rem;
    }

    .chat-input {
      flex: 1;
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid var(--glass-border);
      border-radius: 20px;
      padding: 0.5rem 1rem;
      color: var(--color-text-main);
      outline: none;
    }
      
    .chat-input:focus {
      border-color: var(--color-accent-primary);
    }

    .send-btn {
      background: none;
      border: none;
      color: var(--color-accent-primary);
      cursor: pointer;
      font-size: 1.25rem;
      padding: 0 0.5rem;
    }
      
    .send-btn:hover { 
      color: var(--color-accent-secondary); 
    }
  `]
})
export class AiAssistantComponent {
  isOpen = signal(false);

  toggleChat() {
    this.isOpen.update(v => !v);
  }
}
