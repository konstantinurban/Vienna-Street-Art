import { Pipe, PipeTransform } from '@angular/core';
import { Artwork, ArtworkService } from '../../_services/artwork.service';


@Pipe({
  name: 'duplicates',
})
export class DuplicatesPipe implements PipeTransform {

  transform(artwork: Artwork[], args?: any): any {
    console.log("artwork", artwork);
    const map = artwork.map(c => c.zipcode);
    console.log("artwork map", map );
    console.log("artwork filter", map.filter((code, currentIndex, allCodes) => allCodes.indexOf(code) === currentIndex));
    return artwork.map(c => c.zipcode).filter((code, currentIndex, allCodes) => allCodes.indexOf(code) === currentIndex);
  }

}
