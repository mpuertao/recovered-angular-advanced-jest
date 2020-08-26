import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recovered } from '../model/recovered.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecoveredService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllRecovered(): Observable<Recovered[]> {
    return this.httpClient.get<Recovered[]>(environment.url_api)
    .pipe(
      catchError(this.handleError),
    );
  }

  public getRecoveredById(id: number): Observable<Recovered> {
    return this.httpClient.get<Recovered>(`${environment.url_api}/${id}`)
    .pipe(
      catchError(this.handleError),
    );
  }

  public createRecovered(recovered: Recovered): Observable<Recovered> {
    return this.httpClient.post<Recovered>(environment.url_api, recovered)
    .pipe(
      catchError(this.handleError),
    );
  }

  public updateRecovered(id: number, recovered: Recovered): Observable<Recovered> {
    return this.httpClient.put<Recovered>(`${environment.url_api}${id}`, recovered)
    .pipe(
      catchError(this.handleError),
    );
  }

  public deleteRecovered(id: number): Observable<Recovered> {
    return this.httpClient.delete<Recovered>(`${environment.url_api}${id}`)
    .pipe(
      catchError(this.handleError),
    );
  }

  // tslint:disable-next-line:typedef
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Algo salió mal, favor verificar la solicitud, o contactar al admin del servicio');
  }
}
