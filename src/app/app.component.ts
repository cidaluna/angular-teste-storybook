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
  screenType!: string;

  ngOnInit() {
    this.setScreenType(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    this.setScreenType(target.innerWidth);
  }

  private setScreenType(width: number): void {
    if (width < 480) {
      this.screenType = 'small < 480px';
    } else if (width < 768) {
      this.screenType = 'xs < 768px';
    } else if (width < 1024) {
      this.screenType = 'sm < 1024px';
    } else if (width < 1440) {
      this.screenType = 'md < 1440px';
    } else if (width < 1600) {
      this.screenType = 'lg < 1600px';
    } else if (width < 1920) {
      this.screenType = 'xl < 1920px';
    } else {
      this.screenType = 'ultra >= 1920px';
    }
  }
}
