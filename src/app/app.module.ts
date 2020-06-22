import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { NominationFormModule } from './main/nomination-form/nomination-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuidelinesComponent } from './main/guidelines/guidelines.component';
import { ImportantDatesComponent } from './main/important-dates/important-dates.component';

const appRoutes: Routes = [
    {
        path: 'important-dates',
        pathMatch: "full",
        component: ImportantDatesComponent
    },
    {
        path: 'guidelines-faq',
        pathMatch: "full",
        component: GuidelinesComponent
    },
    {
        path      : '**',
        redirectTo: 'nomination-form'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        GuidelinesComponent,
        ImportantDatesComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        NominationFormModule,

    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
