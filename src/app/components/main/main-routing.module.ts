import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main.component";
import {WorkFirstComponent} from "./components/work-first/work-first.component";
import {WorkSecondComponent} from "./components/work-second/work-second.component";
import {WorkThirdComponent} from "./components/work-third/work-third.component";
import {WorkFourthComponent} from "./components/work-fourth/work-fourth.component";
import {WorkFifthComponent} from "./components/work-fifth/work-fifth.component";
import {WorkSixthComponent} from "./components/work-sixth/work-sixth.component";
import {WorkSeventhComponent} from "./components/work-seventh/work-seventh.component";
import {WorkEighthComponent} from "./components/work-eighth/work-eighth.component";
import {WorkNinethComponent} from "./components/work-nineth/work-nineth.component";
import {WorkTenthComponent} from "./components/work-tenth/work-tenth.component";

const routes: Routes = [
    { path: '', component: MainComponent,
        children: [
            {path: '', redirectTo: 'work-1', pathMatch: 'full'},
            {path: 'work-1', component: WorkFirstComponent},
            {path: 'work-2', component: WorkSecondComponent},
            {path: 'work-3', component: WorkThirdComponent},
            {path: 'work-4', component: WorkFourthComponent},
            {path: 'work-5', component: WorkFifthComponent},
            {path: 'work-6', component: WorkSixthComponent},
            {path: 'work-7', component: WorkSeventhComponent},
            {path: 'work-8', component: WorkEighthComponent},
            {path: 'work-9', component: WorkNinethComponent},
            {path: 'work-10', component: WorkTenthComponent},
            {path: '**', redirectTo: 'work-1'}
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
