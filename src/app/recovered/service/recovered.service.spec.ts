import { of, throwError } from 'rxjs';

import { RecoveredService } from './recovered.service';

describe('RecoveredService', () => {
  const http = jest.fn();

  describe( 'Pruebas para metodo getAllRecovered en el servicio', () => {
    test( 'Deberia obtener recovereds de getAllRecovered', done => {
        const recovereds = [
          {id: 1, name: 'Danny Barrientos', age: 45},
          {id: 2, name: 'El Tío Bob', age: 35}
        ];
        const httpMock = {
          get: jest.fn().mockReturnValue(of(recovereds))
        };
        // tslint:disable-next-line:no-shadowed-variable
        const service = new RecoveredService(httpMock as any);
        service.getAllRecovered().subscribe( (data) => {
          expect(httpMock.get).toBeDefined();
          expect(httpMock.get).toHaveBeenCalled();
          expect(data).toEqual(recovereds);
          done();
        });
    });

    describe( 'Preuebas para el metodo getRecoveredById en el servicio', () => {
      test( 'Deberia devolver el id del recovered', done => {
          const recovered = {id: 1, name: 'Danny Barrientos', age: 45};
          const id = 1;
          const httpMock = {
            get: jest.fn().mockReturnValue(of(recovered)),
          };
          // tslint:disable-next-line:no-shadowed-variable
          const service = new RecoveredService(httpMock as any);
          service.getRecoveredById(id).subscribe( data => {
            expect(httpMock.get).toBeDefined();
            expect(httpMock.get).toHaveBeenCalled();
            expect(data).toEqual(recovered);
            done();
          });
      });
    });
  });
});
