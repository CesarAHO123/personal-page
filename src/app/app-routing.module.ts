import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';

const routes: Routes = [
  {  path: '', component: MainPageComponent},
  {  path: 'projects', component: ProjectsPageComponent},
  {  path: 'experience', component: ExperiencePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
