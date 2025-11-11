import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Register } from './Pages/register/register';
import { Events } from './Pages/events/events';
import { Dashboard } from './Pages/dashboard/dashboard';
import { RegisterEvent } from './Pages/register-event/register-event';
import { ProjectSubmissions } from './Pages/project-submissions/project-submissions';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: Home

    },
    {
        path: 'register',
        component: Register
    },
    {
        path:'events',
        component:Events
    },
     {
        path:'dashboard',
        component:Dashboard
    },
    {
        path:'projectsubmit/:id',
        component:RegisterEvent
    },
    {
        path:'submissions/:id',
        component:ProjectSubmissions
    }
];
