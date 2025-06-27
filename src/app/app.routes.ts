import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { Directive } from './components/directive/directive';
import { LifeCycle } from './components/life-cycle/life-cycle';

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
    {
        path: 'life-cycle',
        component: LifeCycle
    },
];
