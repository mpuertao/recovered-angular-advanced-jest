import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecoveredService } from '../../service/recovered.service';
import { Recovered } from '../../model/recovered.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recovered-detail',
  templateUrl: './recovered-detail.component.html',
  styleUrls: ['./recovered-detail.component.scss']
})
export class RecoveredDetailComponent implements OnInit {

  recovered: Recovered;
  mensajeError: any;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private recoveredService: RecoveredService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        const id = params.id;
        this.getRecoveredById(id);
      }
    );
  }

  getRecoveredById(id: number) {
    this.recoveredService.getRecoveredById(id)
    .subscribe(
      data => this.recovered = data,
      err => this.mensajeError = err,
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
