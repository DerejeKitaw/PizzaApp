import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.scss']
})
export class PizzaItemComponent implements OnInit {
  constructor() { }
  @Input() pizza: any;

  ngOnInit() {
  }

}
