import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenu } from "../../components/gifs-side-menu/gifs-side-menu";
import { GifsSideMenuHeaderComponent } from "../../components/gifs-side-menu/gifs-side-menu-header/gifs-side-menu-header";
import { GifsSideMenuOptions } from "../../components/gifs-side-menu/gifs-side-menu-options/gifs-side-menu-options";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenuHeaderComponent, GifsSideMenuOptions, GifsSideMenu],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPageComponent {}
