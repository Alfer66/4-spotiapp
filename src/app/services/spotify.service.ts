import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }


  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCXNtsGrOKdUlWEBcx3Ik9wxN-xujVu-r0I56yLdng31hztHlJy572hUr1i2I_KfafiT4Zh0C1RXNsWSXQpJ_6g9ANJhW-RnIVBx2k8zw9ZaVSESGA5'
    });

    return this.http.get(url, { headers });
  }




  getNewReleases() {
    
    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( (data: any) => data['albums'].items));
        
  }


  getArtista( termino: string ){

    return this.getQuery(`search?query=${ termino }&type=artist&locale=es-419%2Ces%3Bq%3D0.5&offset=0&limit=15`)
              .pipe( map( (data: any) => data['artists'].items));
    
  }
  
}
