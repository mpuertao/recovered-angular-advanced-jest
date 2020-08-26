import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecoveredService } from '../../service/recovered.service';
import { Recovered } from '../../model/recovered.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recovered-detail',
  templateUrl: './recovered-detail.component.html',
  styleUrls: ['./recovered-detail.component.scss']
})
export class RecoveredDetailComponent implements OnInit {

  recovered: Recovered = null;

  constructor(
    private route: ActivatedRoute,
    private recoveredService: RecoveredService,
    private toastrService: ToastrService,
    private router: Router,
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.recoveredService.getRecoveredById(id).subscribe(
      data => {
        this.recovered = data;
      },
      err => {
        this.toastrService.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
