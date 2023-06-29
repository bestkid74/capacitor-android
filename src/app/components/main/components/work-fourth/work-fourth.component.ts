import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import KeenSlider from 'keen-slider';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {PopupDialogComponent} from "../popup-dialog/popup-dialog.component";

@Component({
  selector: 'app-work-fourth',
  templateUrl: './work-fourth.component.html',
  styleUrls: ['./work-fourth.component.scss']
})
export class WorkFourthComponent implements OnInit, AfterViewInit {
    @ViewChild('sliderRef') sliderRef: ElementRef<HTMLElement>;
    @ViewChild('formDirective') private formDirective: NgForm;
    slides:{text: string, color: string}[] = [
        {color: '#007bff', text: 'Slider 1'},
        {color: '#6c757d', text: 'Slider 2'},
        {color: '#17a2b8', text: 'Slider 3'},
        {color: '#28a745', text: 'Slider 4'},
        {color: '#dc3545', text: 'Slider 5'},
        {color: '#ffc107', text: 'Slider 6'}
    ];
    slider: any = null;
    textForView = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.'
    textArray: string[] = [];
    someForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        this.textArray = Array(25).fill(this.textForView);
        this.initForm();
    }

    openDialog(): void {
        if (!this.someForm.valid) {
            return;
        }
        const data = {
            title: 'Form-data',
            message: `Email: ${this.someForm.value.email} Password: ${this.someForm.value.password}`,
        };
        this.dialog.open(PopupDialogComponent, {
            width: '400px',
            data
        }).afterClosed().subscribe(result => {
            if (result) {
                this.someForm.reset();
                this.formDirective.resetForm();
            }
        });
    }

    initForm(): void {
        this.someForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    ngAfterViewInit(){
        this.slider = new KeenSlider(this.sliderRef.nativeElement, {
            loop: true,
            mode: 'snap',
            slides: 6,
        });
    }

    ngOnDestroy(){
        if (this.slider) {
            this.slider.destroy();
        }
    }
}
