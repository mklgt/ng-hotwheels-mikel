import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { HotWheel } from '../shared/hotwheel';
import {  HotWheelService } from '../shared/hotwheel.service';

@Component({
  templateUrl: './hotwheel-edit.component.html'
})
export class HotWheelEditComponent implements OnInit{

  pageTitle = 'Car Edit';
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
    this.getHotWheel(this.carId);
  }

  getHotWheel(id: number): void {
    this.hotwheelService.getHotWheelById(id)
      .subscribe(
        (hotwheel: HotWheel) => this.displayHotWheel(hotwheel),
        (error: any) => this.errorMessage = <any>error
      );
  }

  displayHotWheel(hotwheel: HotWheel): void {
    if (this.hotwheelForm) {
      this.hotwheelForm.reset();
    }
    this.hotwheel = hotwheel;
    this.pageTitle = `Edit Car: ${this.hotwheel.nombre}`;

    // Update the data on the form
    this.hotwheelForm.patchValue({
      nombre: this.hotwheel.nombre,
      price: this.hotwheel.price,
      description: this.hotwheel.description,
      image: this.hotwheel.image
    });
  }

  deleteHotWheel(): void {
    if (this.hotwheel.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the car: ${this.hotwheel.nombre}?`)) {
        this.hotwheelService.deleteHotWheel(this.hotwheel.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }


  saveHotWheel(): void {
    if (this.hotwheelForm.valid) {
      if (this.hotwheelForm.dirty) {
        this.hotwheel = this.hotwheelForm.value;
        this.hotwheel.id = this.carId;
        
        this.hotwheelService.updateHotWheel(this.hotwheel)
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
