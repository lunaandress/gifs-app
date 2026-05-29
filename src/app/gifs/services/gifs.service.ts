import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import type { Gif } from '../interfaces/gifs.interface';
import type { GyphiResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from './mapper/gif.mapper';

@Injectable({providedIn: 'root'})
export class GifService {

  private http= inject(HttpClient)

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoadings=signal(true);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs(){
    this.http.get<GyphiResponse>(`${environment.giphyUrl}/gifs/trending`,{
      params:{
        api_key:environment.giphyapiKey,
        limit:20,
      },
    }).subscribe((resp)=>{
      const gifs = GifMapper.mapGiphyItemToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoadings.set(false);
      console.log(gifs);
    })

  }


  searchGifs(query:string){
    this.http.get<GyphiResponse>(`${environment.giphyUrl}/gifs/search`,{
      params:{
        api_key:environment.giphyapiKey,
        limit:20,
        q:query,
      },
    }).subscribe((resp)=>{
      const gifs = GifMapper.mapGiphyItemToGifArray(resp.data);
      console.log({search:gifs});
    })
  }

}
