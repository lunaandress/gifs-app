import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list';
import { GifService } from '../../services/gifs.service';


@Component({
  selector: 'app-trending-page',
  imports: [  GifListComponent],
  templateUrl: './trending-page.html',
})

export default class TrendingPageComponent {

  gifsService= inject(GifService);
}
