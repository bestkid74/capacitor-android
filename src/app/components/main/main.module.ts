import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {WorkFirstComponent} from './components/work-first/work-first.component';
import {WorkSecondComponent} from './components/work-second/work-second.component';
import {WorkThirdComponent} from './components/work-third/work-third.component';
import {WorkFourthComponent} from './components/work-fourth/work-fourth.component';
import {WorkFifthComponent} from './components/work-fifth/work-fifth.component';
import {WorkSixthComponent} from './components/work-sixth/work-sixth.component';
import {WorkSeventhComponent} from './components/work-seventh/work-seventh.component';
import {WorkEighthComponent} from './components/work-eighth/work-eighth.component';
import {WorkNinethComponent} from './components/work-nineth/work-nineth.component';
import {WorkTenthComponent} from './components/work-tenth/work-tenth.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatMenuModule} from "@angular/material/menu";
import {MatChipsModule} from "@angular/material/chips";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatStepperModule} from "@angular/material/stepper";
import {MatRadioModule} from "@angular/material/radio";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDividerModule} from "@angular/material/divider";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSliderModule} from "@angular/material/slider";
import {MatBadgeModule} from "@angular/material/badge";
import {MatToolbarModule} from "@angular/material/toolbar";
import { PopupDialogComponent } from './components/popup-dialog/popup-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        MainComponent,
        WorkFirstComponent,
        WorkSecondComponent,
        WorkThirdComponent,
        WorkFourthComponent,
        WorkFifthComponent,
        WorkSixthComponent,
        WorkSeventhComponent,
        WorkEighthComponent,
        WorkNinethComponent,
        WorkTenthComponent,
        PopupDialogComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule,

        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatProgressBarModule,
        MatMenuModule,
        MatChipsModule,
        MatDialogModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatListModule,
        MatSortModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        MatRadioModule,
        MatTooltipModule,
        MatDividerModule,
        MatSnackBarModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatCardModule,
        MatGridListModule,
        MatSidenavModule,
        MatAutocompleteModule,
        MatSliderModule,
        MatBadgeModule,
        MatToolbarModule,
        ReactiveFormsModule
    ]
})
export class MainModule {
}
