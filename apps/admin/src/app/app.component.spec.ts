import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonUiModule } from '@myorg/common-ui';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonUiModule],
      declarations: [AppComponent, NxWelcomeComponent],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome admin'
    );
  });

  it(`should have as title 'admin'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('admin');
  });
});
