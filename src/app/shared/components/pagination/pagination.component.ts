import {
  Component,
  computed,
  input,
  linkedSignal,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  imports: [RouterLink],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  public pages = input<number>(0);
  public currentPage = input<number>(1);

  public activePage = linkedSignal(this.currentPage);

  public getPagesList = computed(() => {
    return Array.from({ length: this.pages() }, (_, index) => index + 1);
  });
}
