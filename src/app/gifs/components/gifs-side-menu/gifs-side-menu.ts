import { Component } from '@angular/core';
import { GifsSideMenuHeaderComponent } from "./gifs-side-menu-header/gifs-side-menu-header";
import { GifsSideMenuOptions } from "./gifs-side-menu-options/gifs-side-menu-options";

@Component({
  selector: 'app-gifs-side-menu',
  imports: [GifsSideMenuHeaderComponent, GifsSideMenuOptions],
  templateUrl: './gifs-side-menu.html',

})
export class GifsSideMenu {}
