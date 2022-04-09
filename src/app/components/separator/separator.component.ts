import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss'],
})
export class SeparatorComponent {
  @Input() appearance: 'plus' | 'dots' | 'lines' = 'plus';
}
