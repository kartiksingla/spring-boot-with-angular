import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MigrateFileComponent } from './migrate-file/migrate-file.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path : 'home', component: HomeComponent, pathMatch: 'full' },
  { path : 'migration-ui', component: MigrateFileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
