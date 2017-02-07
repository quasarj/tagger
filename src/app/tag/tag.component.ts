import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  search: string = '';
  searchHistory: string[] = [];

  constructor(private service: PictureService) { }

  ngOnInit() {
  }

  test(keyevent) {
    if (keyevent.key == 'Enter') {
      this.applyTag(this.search);
    }
  }

  applyTag(tag: string) {
    // console.log('Applying tag: ' + tag);
    this.addToHistory(tag);
    this.service.applyTag(tag);
    console.log(this.service.getTags());
  }

  // Append to history an prune it to 10 items
  addToHistory(tag: string) {
    this.searchHistory.unshift(tag);
    if (this.searchHistory.length > 10) {
      this.searchHistory = this.searchHistory.slice(0, 10);
    }
    this.search = '';

  }

  buttonClick(event, tag: string) {
    this.applyTag(tag);
  }

}
