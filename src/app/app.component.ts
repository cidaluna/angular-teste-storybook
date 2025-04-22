import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-teste-storybook';
  screenType: 'small' | 'tablet' | 'desktop' = 'desktop';

  ngOnInit() {
    this.setScreenType(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    this.setScreenType(target.innerWidth);
  }

  private setScreenType(width: number): void {
    if (width <= 599) {
      this.screenType = 'small';
    } else if (width >= 600 && width < 1024) {
      this.screenType = 'tablet';
    } else {
      this.screenType = 'desktop';
    }
  }
}
