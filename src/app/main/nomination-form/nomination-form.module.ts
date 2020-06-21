import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NominationFormComponent } from './nomination-form.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { NominationFormHeaderComponent } from './nomination-form-header/nomination-form-header.component';
import { NominationFormContentComponent } from './nomination-form-content/nomination-form-content.component';

const routes = [
  {
      path     : 'nomination-form',
      component: NominationFormComponent
  }
];

@NgModule({
  declarations: [NominationFormComponent, NominationFormHeaderComponent, NominationFormContentComponent],
  
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    FuseSharedModule
  ],
  exports: [
    NominationFormComponent
  ]
})
export class NominationFormModule { }
