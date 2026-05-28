import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import type { GyphiResponse } from '../interfaces/giphy.interfaces';

@Injectable({providedIn: 'root'})
export class GifService {

  private http= inject(HttpClient)

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs(){
    this.http.get<GyphiResponse>(`${environment.giphyUrl}/gifs/trending`,{
      params:{
        api_key:environment.giphyapiKey,
        limit:20,
      },
    });

  }
}
