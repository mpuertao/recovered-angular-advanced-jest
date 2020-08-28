import { Component, OnInit } from '@angular/core';
import { RecoveredService } from '../../service/recovered.service';
import { Recovered } from '../../model/recovered.model';


@Component({
  selector: 'app-list-recovered',
  templateUrl: './list-recovered.component.html',
  styleUrls: ['./list-recovered.component.scss']
})
export class ListRecoveredComponent implements OnInit {

  recovereds: Recovered[] = [];
  mensajeError: any;

  constructor(
    private recoveredService: RecoveredService,
    ) { }

  ngOnInit() {
    this.getAllRecovered();
  }

  getAllRecovered(): void {
    this.recoveredService.getAllRecovered()
    .subscribe(
      data => this.recovereds = data,
      err => this.mensajeError = err,
    );
  }
}
