import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    course: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]{1,}')])),
  })

  user2 = new FormControl('',Validators.required);

  objects: any = [];

  loginUser() {
    if(this.loginForm.controls['user'].valid) {
      (document.getElementById('n') as HTMLFormElement).style.color = "black";
      // return true;
    }
    else {
      (document.getElementById('n') as HTMLFormElement).style.color = "red";
      return false;
    }

    if(this.loginForm.controls['course'].valid) {
      (document.getElementById('c') as HTMLFormElement).style.color = "black";
      // return true;
    }
    else {
      (document.getElementById('c') as HTMLFormElement).style.color = "red";
      return false;
    }

    if (this.loginForm.status == 'INVALID') {
      return false;
    }
    else {
      this.objects.push(this.loginForm.value);
      console.warn(this.loginForm.value);
      console.log(this.objects);
      return true;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
