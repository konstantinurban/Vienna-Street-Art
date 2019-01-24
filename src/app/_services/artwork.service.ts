import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Artwork {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  streetname: string;
  streetnumber: number;
  zipcode: string;
  longitude: number;
  latitude: number;
  imageBase64: string;
  filename: string;
}

const ARTWORK_RESOURCE_URL = 'http://localhost:8080/streetart/rest/artwork';


@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  constructor(private httpClient: HttpClient) { }

  create(artwork: Artwork): Promise<any> {
    return this.httpClient.post(ARTWORK_RESOURCE_URL, artwork).toPromise();
  }

  retrieve(id: number): Promise<Artwork> {
    return this.httpClient.get<Artwork>(ARTWORK_RESOURCE_URL + '/' + id).toPromise();
  }

  update(artwork: Artwork): Promise<any> {
    return this.httpClient.put(ARTWORK_RESOURCE_URL + '/' + artwork.id, artwork).toPromise();
  }

  delete(id: number): Promise<any> {
    return this.httpClient.delete(ARTWORK_RESOURCE_URL + '/' + id).toPromise();
  }

  retrieveAll(): Promise<Artwork[]> {
    return this.httpClient.get<Artwork[]>(ARTWORK_RESOURCE_URL + '/list').toPromise();
  }
}
