import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [ 
{path: '', pathMatch: 'full', redirectTo: 'home'},
{path: 'home', component: HomeComponent},
{path: 'courses', component: CoursesComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }



