import { Component, Input, OnInit, Output } from '@angular/core';
import { Name } from '../home';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  myName: Name = {
    name: 'Joseph',
  };
  @Output() name = this.myName.name;
  @Input() myname = this.myName.name;

  constructor(private ApplicationService: ApplicationService) {}

  ngOnInit(): void {}
}
