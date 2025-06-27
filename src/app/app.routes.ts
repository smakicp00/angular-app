import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { Directive } from './components/directive/directive';

export const routes: Routes = [
    {
        path: 'user',
        component: User
    },
    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'control-flow',
        component: ControlFlow
    },
    {
        path: 'directive',
        component: Directive
    },
];
