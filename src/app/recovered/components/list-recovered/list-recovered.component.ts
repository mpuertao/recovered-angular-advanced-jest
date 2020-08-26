import { Component, OnInit } from '@angular/core';
import { RecoveredService } from '../../service/recovered.service';
import { Recovered } from '../../model/recovered.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-recovered',
  templateUrl: './list-recovered.component.html',
  styleUrls: ['./list-recovered.component.scss']
})
export class ListRecoveredComponent implements OnInit {

  recovereds: Recovered[] = [];

  constructor(
    private recoveredService: RecoveredService,
    private toastrService: ToastrService,
    ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getAllRecovered();
  }

  getAllRecovered(): void {
    this.recoveredService.getAllRecovered().subscribe(
      data => {
        console.log(data);
        this.recovereds = data;
      },
      err => {
        this.toastrService.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }
}
