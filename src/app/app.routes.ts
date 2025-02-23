import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { DashboardComponent } from './dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            // Add other routes here as we build them
            // { path: 'goals', component: GoalsComponent },
            // { path: 'settings', component: SettingsComponent },
        ]
    }
];
