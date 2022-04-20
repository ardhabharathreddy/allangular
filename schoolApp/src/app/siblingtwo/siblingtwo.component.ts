import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-siblingtwo',
  templateUrl: './siblingtwo.component.html',
  styleUrls: ['./siblingtwo.component.css']
})
export class SiblingtwoComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }

}
