import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private fb: FormBuilder, private userservice: UserService) {}

  postForm: FormGroup;
  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      body: ['', [Validators.required, Validators.minLength(10)]],
      userId: ['', [Validators.required]],
    });
  }
  get f() {
    return this.postForm.controls;
  }

  submit() {
    console.log(this.postForm.value);
    this.userservice.setPosts(this.postForm.value).subscribe((data) => {
      console.log(data);
      this.setForm();
    });
  }
}
