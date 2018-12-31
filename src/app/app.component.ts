import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private readonly http: HttpClient) {
  }

  title = 'grid-list';

  public rowData = this.http.get('https://api.myjson.com/bins/jizqo');

}
