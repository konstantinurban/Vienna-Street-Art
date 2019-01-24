import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  @Output() uploadcompleted = new EventEmitter<string>();

  imageAsBase64: string;
  filename: string;
  loading: boolean;

  constructor() { }

  ngOnInit() {
    this.filename = '';
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {

      this.loading = true;

      const file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageAsBase64 = reader.result.toString();
        this.filename = file.name;
        this.onSubmit();
      };

    }
  }

  onSubmit() {
    console.log(this.imageAsBase64);

    this.uploadcompleted.emit(this.imageAsBase64);
    this.loading = false;
  }

  clearFile() {
    this.imageAsBase64 = null;
    this.filename = '';
    this.onSubmit();
  }
}
