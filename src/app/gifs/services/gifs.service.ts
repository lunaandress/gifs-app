import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import type { GyphiResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gifs.interface';
import { GifMapper } from './mapper/gif.mapper';

@Injectable({providedIn: 'root'})
export class GifService {

  private http= inject(HttpClient)

  trendingGifs = signal<Gif[]>([])

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
      console.log(gifs);
    })

  }
}
