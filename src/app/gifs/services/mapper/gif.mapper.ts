import { Gif } from "../../interfaces/gifs.interface";
import { GiphyItem } from "../../interfaces/giphy.interfaces";

export class GifMapper{
  static mapGiphyItemToGif(item:GiphyItem):Gif{
    return{
      id:item.id,
      tittle:item.title,
      url: item.images.original.url,
    }
  };

  //Funcion de Sereializacion
  static mapGiphyItemToGifArray(items:GiphyItem[ ]):Gif[]{
    return items.map(this.mapGiphyItemToGif);

  }
}
