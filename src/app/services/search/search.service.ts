import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FakeStoreItem} from "../../interfaces/fake.store.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(public _Http: HttpClient) {}

  getFakeStoreItems(): Observable<FakeStoreItem[]> {
    return this._Http.get<FakeStoreItem[]>('https://fakestoreapi.com/products?limit=20')
  }
}
