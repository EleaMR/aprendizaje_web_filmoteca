import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { routes } from '../../app.routes';
import { Selector } from './selector';

describe('Selector', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selector],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should render a link for each person', () => {
    const fixture = TestBed.createComponent(Selector);
    fixture.detectChanges();

    const links = fixture.nativeElement.querySelectorAll('a');

    expect(links.length).toBe(4);
    expect(Array.from(links, (link: HTMLAnchorElement) => link.textContent?.trim())).toEqual([
      'Persona 1',
      'Persona 2',
      'Persona 3',
      'Persona 4',
    ]);
  });

  it('should route each person to their home page', async () => {
    const harness = await RouterTestingHarness.create();

    for (const person of ['persona1', 'persona2', 'persona3', 'persona4']) {
      await harness.navigateByUrl(`/${person}`);

      expect(harness.routeNativeElement?.textContent).toContain('home works!');
    }
  });
});
