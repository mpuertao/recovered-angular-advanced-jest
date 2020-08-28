import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { ListRecoveredComponent } from './list-recovered.component';

describe('Pruebas para el component ListRecoveredComponent', () => {

  let component: ListRecoveredComponent;
  let recovereds;
  let serviceMock;

  beforeEach( () => {
    recovereds = [
      {id: 1, name: 'Danny Barrientos', age: 45},
      {id: 2, name: 'El Tío Bob', age: 35}
    ],
    serviceMock = {
      getAllRecovered: jest.fn()
    };
    component = new ListRecoveredComponent(serviceMock);
  });

  test( 'Debe cargar los recovereds en getAllRecovered', () => {
      serviceMock.getAllRecovered.mockReturnValue(of(recovereds));
      component.ngOnInit();
      expect(component.recovereds.length).toBe(2);
  });

  test( 'Deberia llamar al servicio getAllRecovered', () => {
      serviceMock.getAllRecovered.mockReturnValue(of(recovereds));
      component.getAllRecovered();
      expect(serviceMock.getAllRecovered).toHaveBeenCalled();
  });

  test( 'Deberia comparar el objeto acorde a lo recibido', () => {
      serviceMock.getAllRecovered.mockReturnValue(of(recovereds));
      component.ngOnInit();
      expect(component.recovereds[0]).toEqual({id: 1, name: 'Danny Barrientos', age: 45});
      expect(component.recovereds[0].name).toEqual('Danny Barrientos');
  });

  test( 'Deberia devolver la excepcion al error del servicio', () => {
      const miError = 'Error porque Danny lo churretio';
      serviceMock.getAllRecovered.mockImplementation( () => {
        return throwError( (miError));
      });
      component.getAllRecovered();
      expect(component.mensajeError).toBe(miError);
  });
});
