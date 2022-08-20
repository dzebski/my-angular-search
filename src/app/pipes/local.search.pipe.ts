import { Pipe, PipeTransform } from '@angular/core';
import {FakeStoreItem} from "../interfaces/fake.store.interface";

@Pipe({
  name: 'localSearch'
})
export class LocalSearchPipe implements PipeTransform {

  transform(items: FakeStoreItem[], search: string = ''): FakeStoreItem[] {
    if (!search.trim()) {
      return items
    }
    return items.filter(item => {
      return item.title.toLowerCase().includes(search.toLowerCase())
    })
  }

}
