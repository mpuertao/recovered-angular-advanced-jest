import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-recovered',
  templateUrl: './edit-recovered.component.html',
  styleUrls: ['./edit-recovered.component.scss']
})
export class EditRecoveredComponent implements OnInit {

  recoveredControl = new FormControl('', [], []);

  constructor() { }

  ngOnInit(): void {
  }

}
