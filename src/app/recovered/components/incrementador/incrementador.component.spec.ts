import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incrementador Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementadorComponent ],
      imports: [ FormsModule ]
    });
    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('Debe de mostrar la leyenda', () => {
      component.leyenda = 'Progreso de carga';
      fixture.detectChanges(); // disparar la detección de cambios
      const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
      expect( elem.innerHTML ).toContain('Progreso de carga');

  });

  test( 'Debe de mostrar en el input el valor del progreso', () => {
    component.cambiarValor(5);
    fixture.detectChanges();
    fixture.whenStable().then( () => {
        const input = fixture.debugElement.query( By.css('input') );
        const elem = input.nativeElement;
        console.log( elem );
        expect( elem.value ).toBe( '55' );
    });
  });
  test( 'Debe de incrementar/decrementar en 5, con un click en el botón', () => {
      const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
      botones[0].triggerEventHandler('click', null);
      expect( component.progreso ).toBe(45);
      botones[1].triggerEventHandler('click', null);
      expect( component.progreso ).toBe(50);
  });

  test( 'En el titulo del componente, debe de mostrar el progreso', () => {
      const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
      botones[0].triggerEventHandler('click', null);
      fixture.detectChanges();
      const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
      expect( elem.innerHTML ).toContain('45');
  });
});
