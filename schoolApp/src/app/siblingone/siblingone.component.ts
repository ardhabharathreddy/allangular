import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-siblingone',
  templateUrl: './siblingone.component.html',
  styleUrls: ['./siblingone.component.css']
})
export class SiblingoneComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }

}
