import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';
import { GifListItemComponent } from './gif-list-item/gif-list-item';

@Component({
  selector: 'app-gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListComponent {
  gifs=input.required<Gif[]>()
}
