// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProfileComponent} from "./pages/profile/profile.component";
import {DatabaseComponent} from "./pages/database/database.component";
import {HomeComponent} from "./pages/home/home.component";
import {ApiComponent} from "./pages/api/api.component";
import {SearchComponent} from "./pages/search/search.component";
import {AboutComponent} from "./pages/about/about.component";
import {UnauthorizedComponent} from "./pages/unauthorized/unauthorized.component";
import { AuthGuardService } from './services/auth-guard.service';
import {DatasetComponent} from "./pages/dataset/dataset.component";
import {TermsComponent} from "./pages/terms/terms.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {SelectedComponent} from "./pages/selected/selected.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {DashboardSelectedComponent} from "./pages/dashboard/selected/selected.component";
import {DashboardFeedbackComponent} from "./pages/dashboard/feedback/feedback.component";
import {DashboardProfileComponent} from "./pages/dashboard/profile/profile.component";
import {DashboardUpdateComponent} from "./pages/dashboard/update/update.component";
import {DashboardClaimedComponent} from "./pages/dashboard/claimed/claimed.component";
import {DashboardPictureComponent} from "./pages/dashboard/picture/picture.component";
import {SettingsComponent} from "./pages/dashboard/settings/settings.component";

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'database', component: DatabaseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'api', component: ApiComponent },
  { path: 'search', component: SearchComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'dataset/:domain/:acc', component: DatasetComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'selected', component: SelectedComponent },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuardService]},
  { path: 'dashboard/selected', component: DashboardSelectedComponent , canActivate: [AuthGuardService]},
  { path: 'dashboard/feedback', component: DashboardFeedbackComponent , canActivate: [AuthGuardService]},
  { path: 'dashboard/profile', component: DashboardProfileComponent , canActivate: [AuthGuardService]},
  { path: 'dashboard/update', component: DashboardUpdateComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard/claimed', component: DashboardClaimedComponent , canActivate: [AuthGuardService]},
  { path: 'dashboard/picture', component: DashboardPictureComponent , canActivate: [AuthGuardService]},
  { path: 'dashboard/settings', component: SettingsComponent , canActivate: [AuthGuardService]}

];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
