import { Component, EventEmitter, Input, Output } from '@angular/core';

type Variant = 'submit' | 'reset' | 'goBack';
type Size = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text = '';
  @Input() variant: Variant = 'submit';
  @Input() disabled: boolean = false;
  @Input() size: Size = 'medium';
  @Output() btnClick = new EventEmitter<string>();

  handleClick(){
    this.btnClick.emit('Botao clicado');
  }

  getClasses(){
    return `${this.variant} ${this.size}`;
  }

}
