import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { Directive } from './components/directive/directive';
import { LifeCycle } from './components/life-cycle/life-cycle';
import { GetApi } from './components/get-api/get-api';
import { Users } from './components/users/users';
import { ReactiveUser } from './components/reactive-user/reactive-user';
import { PipeEx } from './components/pipe-ex/pipe-ex';
import { ResourceApi } from './components/resource-api/resource-api';

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
    {
        path: 'get-api',
        component: GetApi
    },
    {
        path: 'users',
        component: Users
    },
    {
        path: 'reactive-user',
        component: ReactiveUser
    },
    {
        path: 'pipe',
        component: PipeEx
    },
     {
        path: 'resourceApi',
        component: ResourceApi
    },
];
