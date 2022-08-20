import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {FakeStoreItem} from "../../../interfaces/fake.store.interface";
import {SearchService} from "../../../services/search/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  fakeStoreDataSearch: any;
  searchField: FormControl = new FormControl
  fakeStoreData: FakeStoreItem[] = []

  constructor(public _FakeStore: SearchService) {}

  ngOnInit() {
    this._FakeStore.getFakeStoreItems()
      .subscribe(response => this.fakeStoreData = response)

    this.searchField.valueChanges
      .pipe(
        debounceTime(350),
        distinctUntilChanged()
      )
      .subscribe(value => console.log(value))
  }

  //
  // ngOnInit(): void {
  //   this.searchField.valueChanges
  //     .pipe(
  //       debounceTime(500),
  //       distinctUntilChanged()
  //     )
  //   //   .switchMap()
  //     .subscribe(value => console.log(value))
  //
  //   this._FakeStore.getFakeStoreItems()
  //     .subscribe(fakeStoreResponse => {
  //       this.fakeStoreData = fakeStoreResponse
  //     })
  // }

}
