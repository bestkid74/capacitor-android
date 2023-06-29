import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-work-fifth',
  templateUrl: './work-fifth.component.html',
  styleUrls: ['./work-fifth.component.scss']
})
export class WorkFifthComponent implements OnInit, AfterViewInit {
    @ViewChild('coloredSquare') coloredSquare: ElementRef<HTMLDivElement>;
    @ViewChild('resizableBox') resizableBox: ElementRef<HTMLDivElement>;
    someForm: FormGroup;
    colorValue = '{red: 0, green: 0, blue: 0}';
    tableData = Array(9).fill(0).map((_, i) => i+1);
    widthControl: FormControl;
    heightControl: FormControl;
    defaultWidth = 50;
    defaultHeight = 50;

    constructor(private fb: FormBuilder, private renderer: Renderer2) { }

    ngOnInit() {
        this.initForm();
        this.initSliders();
    }

    initSliders(): void {
        this.widthControl = new FormControl(this.defaultWidth, [Validators.required, Validators.min(1),
            Validators.max(100)]);
        this.heightControl = new FormControl(this.defaultHeight, [Validators.required, Validators.min(1),
            Validators.max(100)]);
        this.widthControl.valueChanges.subscribe((value) => {
            if (this.widthControl.invalid) {
                return;
            }
            this.renderer.setStyle(this.resizableBox.nativeElement, 'width', `${value}px`);
        });
        this.heightControl.valueChanges.subscribe((value) => {
            if (this.heightControl.invalid) {
                return;
            }
            this.renderer.setStyle(this.resizableBox.nativeElement, 'height', `${value}px`);
        });
    }

    initForm(): void {
        this.someForm = this.fb.group({
            red: [0, [Validators.required, Validators.min(0), Validators.max(255)]],
            green: [0, [Validators.required, Validators.min(0), Validators.max(255)]],
            blue: [0, [Validators.required, Validators.min(0), Validators.max(255)]],
        });
        this.someForm.valueChanges.subscribe((value) => {
            if (this.someForm.invalid) {
                return;
            }
            this.colorValue = JSON.stringify(value);
            this.renderer.setStyle(this.coloredSquare.nativeElement, 'background-color',
                `rgb(${+value.red}, ${+value.green}, ${+value.blue})`);
        });
    }

    ngAfterViewInit(): void {
        this.renderer.setStyle(this.coloredSquare.nativeElement, 'background-color', 'rgb(0, 0, 0)');
        this.renderer.setStyle(this.resizableBox.nativeElement, 'width', `${this.defaultWidth}px`);
        this.renderer.setStyle(this.resizableBox.nativeElement, 'height', `${this.defaultHeight}px`);
    }
}
