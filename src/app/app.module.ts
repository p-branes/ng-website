import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {Material2AppAppComponent, DialogContent} from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
	imports: [
	BrowserModule,
	MaterialModule.forRoot(),
	AppRoutingModule,
	],
	declarations: [Material2AppAppComponent,
	DialogContent,
	CoursesComponent,
	HomeComponent,
	CourseDetailComponent,
	CourseListComponent,
	HeaderComponent], 
	entryComponents: [DialogContent],
	bootstrap: [Material2AppAppComponent],
})

export class MaterialAppModule { }
