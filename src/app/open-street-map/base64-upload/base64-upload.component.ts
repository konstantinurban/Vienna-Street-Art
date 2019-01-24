import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-base64-upload',
  templateUrl: './base64-upload.component.html',
  styleUrls: ['./base64-upload.component.css']
})
export class Base64UploadComponent  {
  form: FormGroup;
  loading: boolean;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      photo: null
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {

      const file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.form.get('photo').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result
        });

        this.onSubmit();
      };

    }
  }

  onSubmit() {
    const formModel = this.form.value;
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      console.log(formModel);
      alert('done!');
      this.loading = false;
    }, 1000);
  }

  clearFile() {
    this.form.get('photo').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
}
