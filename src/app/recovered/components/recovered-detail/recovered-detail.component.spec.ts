import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveredDetailComponent } from './recovered-detail.component';
import { Component } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { convertToParamMap } from '@angular/router';

describe('RecoveredDetailComponent', () => {

  let component: RecoveredDetailComponent;
  let serviceMock;
  let routerMock;
  let routeMock;
  let subscriptionMock: Subscription;

  beforeEach( () => {
    serviceMock = { getRecoveredById: jest.fn() };
    routerMock = { navigate: jest.fn() };
    routeMock = { params: of(convertToParamMap({ id: 1})) };
    subscriptionMock = new Subscription();
    component = new RecoveredDetailComponent( routeMock, serviceMock, routerMock );
    component.ngOnInit();
  });

  describe( 'Pruebas para el ngOnInit y metodo ppal getRecoverdById', () => {
    test( 'Pruebas ngOnInit', () => {
        expect(routeMock.params).toBeTruthy();
    });

    test( 'No se deberia llamar a getId sin sub', () => {
        const getRecoveredByIdSpy = jest.spyOn(component, 'getRecoveredById');
        expect(getRecoveredByIdSpy).not.toHaveBeenCalled();
    });

    test( 'Deberia llamar el metodo getRecoveredById exitosamente', () => {
        const id = 1;
        const response = { id: 1, name: 'Mao', age: 20  };
        const getRecoveredByIdSpy = jest.spyOn(serviceMock, 'getRecoveredById').mockReturnValue(of(response));
        component.getRecoveredById(id);
        expect(component.recovered).toBe(response);
        expect(getRecoveredByIdSpy).toHaveBeenCalledWith(id);
    });
  });

  describe( 'Pruebas para el route volver()', () => {
    test( 'Deberia navegar hacia /', () => {
        component.volver();
        expect(routerMock.navigate).toHaveBeenCalledWith(['/']);
    });
  });

  describe( 'Pruebas para el OnDestroy', () => {
    test( 'Deberia desubscribir con unsubscribe', () => {
        component.ngOnDestroy();
        const unsubscribeSpy = jest.spyOn(subscriptionMock, 'unsubscribe');
        expect(unsubscribeSpy).toBeDefined();
    });
  });
});
