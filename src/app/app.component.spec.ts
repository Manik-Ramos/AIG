import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoListHeaderComponent,
        TodoListComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
    }).compileComponents();
  }));
  
  it('should create app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have title as 'AIG-TodoApp'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AIG-TodoApp');
  }));

  it('should contain title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('AIG-TodoApp');
  }));
});
