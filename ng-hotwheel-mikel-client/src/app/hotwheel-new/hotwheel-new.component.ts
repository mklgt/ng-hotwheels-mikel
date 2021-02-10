import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HotWheel } from '../shared/hotwheel';
import { ActivatedRoute, Router } from '@angular/router';
import { HotWheelService } from '../shared/hotwheel.service';

@Component({
  selector: 'app-hotwheel-new',
  templateUrl: './hotwheel-new.component.html',
  styleUrls: ['./hotwheel-new.component.css']
})
export class HotWheelNewComponent implements OnInit {

  pageTitle = 'HotWheel New';
  errorMessage: string;
  hotwheelForm: FormGroup;

  carId:number;
  hotwheel: HotWheel;

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private hotwheelService: HotWheelService) {  }

  ngOnInit(): void {
    this.hotwheelForm = this.fb.group({
      nombre: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],
      price: '',
      description: '',
      image: ''
    });

    this.carId = parseInt(this.activatedroute.snapshot.params['id']);
  }

  saveHotWheel(): void {
    if (this.hotwheelForm.valid) {
      if (this.hotwheelForm.dirty) {
        this.hotwheel = this.hotwheelForm.value;
        this.hotwheel.id = this.carId;
        
        this.hotwheelService.createHotWheel(this.hotwheel)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
        
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.hotwheelForm.reset();
    this.router.navigate(['']);
  }
  
}
