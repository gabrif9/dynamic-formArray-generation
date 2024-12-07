import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-generation-project';

  dynamicFormGroup: FormGroup = new FormGroup({
    dynamicArray: new FormArray([new FormControl('')])
  })

  addInputForm() {
    (this.dynamicFormGroup.controls["dynamicArray"] as FormArray).push(new FormControl(''))
  }

  removeInputForm(index: number) {
    (this.dynamicFormGroup.controls["dynamicArray"] as FormArray).removeAt(index)
  }

  getFormArray() {
    return this.dynamicFormGroup.controls["dynamicArray"] as FormArray
  }
}
