import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";


interface MenuOpcion{
  label:string;
  sublabel:string;
  router:string;
  icon: string;
}


@Component({
  selector: 'app-gifs-side-menu-options',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './gifs-side-menu-options.html',
})


export class GifsSideMenuOptions {

  menuOptions:MenuOpcion[]=[
    {
      icon:'fa-solid fa-chart-line',
      label:'Trending',
      sublabel:'Gifs Populary',
      router:'/dashboard/trending'
    },
        {
      icon:'fa-solid fa-magnifying-glass',
      label:'Buscdor',
      sublabel:'Buscador gifs',
      router:'/dashboard/search'
    },
];
}
