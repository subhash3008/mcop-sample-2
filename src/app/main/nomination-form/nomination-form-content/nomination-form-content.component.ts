import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatStepper } from '@angular/material';
import swal from 'sweetalert2';

@Component({
  selector: 'app-nomination-form-content',
  templateUrl: './nomination-form-content.component.html',
  styleUrls: ['./nomination-form-content.component.scss']
})
export class NominationFormContentComponent implements OnInit {
  studentDetails: any;
  studentForm: FormGroup = null;
  teacherList: string[] = [];
  formSubmitted = false;

  horizontalStepperStep1: FormGroup;
  horizontalStepperStep2: FormGroup;
  horizontalStepperStep3: FormGroup;
  basicDetailsForm: FormGroup;
  showBasicDetailsError: boolean;
  abilitiesForm: FormGroup;
  visionForm: FormGroup;
  finalForm: FormGroup;

  // @ViewChild('housePrefect') housePrefectCheckbox: ElementRef;
  // @ViewChild('schoolPrefect') schoolPrefectCheckbox: ElementRef;
  // @ViewChild('successSwal') successSwal: SwalComponent;
  @ViewChild('formStepper') formStepper: MatStepper;
  @ViewChild('scrollTop') scrollTop: ElementRef;

  constructor(
    private _fb: FormBuilder,
    // private _api: ApiService
  ) { }

  ngOnInit(): void {
    // this.getTeachersList(); 
    this.initializeStudentForms();
    // this.studentDetails = {
    //   studentName: 'DAKSH',
    //   class: 'IV A',
    //   house: 'DHEERAJ',
    //   cards: {
    //     worthy: 1,
    //     intellect: 0,
    //     stature: 1,
    //     emotion: 0
    //   },
    //   houseIncharge: 'MONIKA CHHABRA',
    //   classTeacher: 'TARVEEN KAUR'
    // };
    this.teacherList = [
      'AJAY RAI',
      'AANAND DUBEY',
      'KK DAS',
      'AMRITA SAHAY',
      'SUSHMA SINGH',
      'TANUJA H',
      'SATHISH B ASHWATH'
    ];
  }

  // getTeachersList() {
  //   const url = this._api.baseUrl + URLS.getTeacherList;
  //   this._api.getRequest(url).subscribe(
  //     (res) => {
  //       console.log('RESPONSE : ', res);
  //       // this.initializeStudentForm(res && res.data);
  //     },
  //     (err) => {
  //       console.error('ERROR TEACHER : ', err);
  //       // this.initializeStudentForm();
  //     }
  //   );
  // }

  initializeStudentForms() {
    // this.studentForm = this._fb.group({
    //   resposibilitiesHeld: ['', Validators.required],
    //   academicPerformance: this._fb.group({
    //     total: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    //     eleventhMidTermPerc: [null, Validators.required],
    //     attendancePerc: [null, [Validators.required, Validators.min(0), Validators.max(100)]]
    //   }),
    //   failedMidtermOrNot: [null, Validators.required],
    //   scholasticAchievement: ['', Validators.required],
    //   sportsAchievement: ['', Validators.required],
    //   otherAchievement: ['', Validators.required],
    //   indisciplineActions: ['', Validators.required],
    //   issue1: this._fb.group({
    //     title: ['', Validators.required],
    //     content: ['', [Validators.required, this.maxWordsValidation.bind(this)]]
    //   }),
    //   issue2: this._fb.group({
    //     title: ['', Validators.required],
    //     content: ['', [Validators.required, this.maxWordsValidation.bind(this)]]
    //   }),
    //   issue3: this._fb.group({
    //     title: ['', Validators.required],
    //     content: ['', [Validators.required, this.maxWordsValidation.bind(this)]]
    //   }),
    //   otherReferee: [null],
    //   positionApplied: ['', Validators.required]
    // });
    this.basicDetailsForm = this._fb.group({
      positionApplied: ['', Validators.required],
      studentName: ['DAKSH', Validators.required],
      class: ['IV A', Validators.required],
      house: ['DHEERAJ', Validators.required],
      cards: this._fb.group({
        worthy: [1, Validators.required],
        intellect: [3, Validators.required],
        stature: [1, Validators.required],
        emotion: [0, Validators.required]
      })
    });
    this.abilitiesForm = this._fb.group({
      resposibilitiesHeld: ['', Validators.required],
      academicPerformance: this._fb.group({
        total: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
        eleventhMidTermPerc: [null, Validators.required],
        attendancePerc: [null, [Validators.required, Validators.min(0), Validators.max(100)]]
      }),
      failedMidtermOrNot: [null, Validators.required],
      scholasticAchievement: ['', Validators.required],
      sportsAchievement: ['', Validators.required],
      otherAchievement: ['', Validators.required],
      indisciplineActions: ['', Validators.required],
    });
    this.visionForm = this._fb.group({
      issue1: this._fb.group({
        title: ['', Validators.required],
        content: ['', [Validators.required, this.maxWordsValidation.bind(this)]]
      }),
      issue2: this._fb.group({
        title: ['', Validators.required],
        content: ['', [Validators.required, this.maxWordsValidation.bind(this)]]
      }),
      issue3: this._fb.group({
        title: ['', Validators.required],
        content: ['', [Validators.required, this.maxWordsValidation.bind(this)]]
      }),
      otherReferee: [null]
    });
    this.finalForm = this._fb.group({
      houseIncharge: ['MONIKA CHHABRA'],
      classTeacher: ['TARVEEN KAUR'],
      otherReferee: [null]
    });
    this.showBasicDetailsError = false;
    console.log('INITIALIZED : ', this.basicDetailsForm.value, this.abilitiesForm.value, this.visionForm.value, this.finalForm.value);
  }

  maxWordsValidation(control: AbstractControl) {
    if (control.value) {
      if (control.value.split(/ |.|,/).length > 250) {
        return { maxWords: true };
      }
    }
    return null;
  }

  // postSelectionChange(e: any) {
  //   if (e.target.value === 'schoolPrefect') {
  //     this.housePrefectCheckbox.nativeElement.checked = false;
  //     this.studentForm.controls.positionApplied.setValue('schoolPrefect');
  //   } else if (e.target.value === 'housePrefect') {
  //     this.schoolPrefectCheckbox.nativeElement.checked = false;
  //     this.studentForm.controls.positionApplied.setValue('housePrefect');
  //   }
  // }

  onSubmit() {
    // console.log('STUDENT FORM VALUE : ', this.studentForm.value);
    // this.successSwal.fire();

    console.log('FINALIZED : ', this.basicDetailsForm.value, this.abilitiesForm.value, this.visionForm.value, this.finalForm.value);
    swal.fire({
      title: "Form Submitted",
      text: "Your nomination form has been submitted",
      icon: "success",
    }).then(this.clearStudentForm.bind(this));
  }

  clearStudentForm() {
    this.formSubmitted = true;
    this.basicDetailsForm.reset();
    this.abilitiesForm.reset();
    this.visionForm.reset();
    this.finalForm.reset();
    this.initializeStudentForms();
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    this.formStepper.selectedIndex = 0;
  }

  onBasicDetailsFormNext() {
    // console.log('BASIC DETAILS FORM : ', this.basicDetailsForm);
    this.showBasicDetailsError = true;
  }

  onFormChange() {
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    this.scrollTop.nativeElement.scrollIntoView();
    // console.log('SCROLLING TO TOP');
  }

}
