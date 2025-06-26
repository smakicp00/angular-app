import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';

export const routes: Routes = [
    {
        path: 'user',
        component: User
    },
    {
        path: 'admin',
        component: Admin
    },
];
