import { Component } from '@angular/core';
import { GifsSideMenuOptions } from "../../components/gifs-side-menu/gifs-side-menu-options/gifs-side-menu-options";
import { GifListComponent } from '../../components/gif-list/gif-list';

@Component({
  selector: 'app-trending-page',
  imports: [GifsSideMenuOptions , GifListComponent],
  templateUrl: './trending-page.html',

})
export default class TrendingPageComponent {}
