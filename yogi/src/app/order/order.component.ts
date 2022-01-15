import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  loginForm: FormGroup | any;
  submitted= false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required, Validators.name],
      number: ['', Validators.required, Validators.nullValidator]
     
    })
  }
  onTapOfSubmit(loginForm: FormGroup){
    this.submitted= true;
  }

}
