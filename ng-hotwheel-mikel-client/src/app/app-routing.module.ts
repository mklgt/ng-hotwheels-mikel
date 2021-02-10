import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotWheelDetailComponent } from './hotwheel-detail/hotwheel-detail.component';
import { HotWheelEditComponent } from './hotwheel-edit/hotwheel-edit.component';
import { HotWheelNewComponent } from './hotwheel-new/hotwheel-new.component';

const routes: Routes = [
    {path: '',                    component: HomeComponent},
    {path: 'hotwheels/:id/new', component: HotWheelNewComponent},
    {path: 'hotwheels/:hotwheelId', component: HotWheelDetailComponent},
    {path: 'hotwheels/:id/edit', component: HotWheelEditComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], 
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
