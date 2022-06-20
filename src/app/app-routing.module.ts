import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'index', component: ComponentsComponent },
    { path: 'nucleoicons', component: NucleoiconsComponent },
    { path: 'examples/landing', component: LandingComponent },
    { path: 'examples/login', component: LoginComponent },
    { path: 'examples/profile', component: ProfileComponent },
    { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
    { path: 'calendar', loadChildren: () => import('./components/pages/calendar/calendar.module').then(m => m.CalendarModule) },
    { path: 'profile', loadChildren: () => import('./components/pages/profile/profile.module').then(m => m.ProfileModule) },
    { path: 'rickAndMorty', loadChildren: () => import('./components/pages/rickAndMorty/rick-and-morty.module').then(m => m.RickAndMortyModule) },
    { path: 'checkList', loadChildren: () => import('./components/pages/checkList/checkList.module').then(m => m.CheckListModule) },
    { path: 'nbaPlayers', loadChildren: () => import('./components/pages/nbaPlayers/nbaPlayers.module').then(m => m.NbaPlayersModule) },
    { path: 'OrgChart', loadChildren: () => import('./components/pages/Org-chart/org-chart.module').then(m => m.OrgChartModule) },
    { path: 'knowledge', loadChildren: () => import('./components/pages/knowledge/knowledge.module').then(m => m.KnowledgeModule) },
    { path: 'gallery', loadChildren: () => import('./components/pages/gallery/gallery.module').then(m => m.GalleryModule) },
    { path: 'react', loadChildren: () => import('./components/pages/react/react.module').then(m => m.ReactModule) },
    { path: 'test-laravel', loadChildren: () => import('./components/pages/test-laravel/test-laravel.module').then(m => m.TestLaravelModule) },
    { path: '**', loadChildren: () => import('./components/pages/notFound/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
