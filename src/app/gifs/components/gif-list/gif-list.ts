import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifListItemComponent } from './gif-list-item/gif-list-item';

@Component({
  selector: 'app-gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListComponent {}
