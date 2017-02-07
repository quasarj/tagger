import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PictureService {
  private pid: number = 0;
  private tags: string[] = [];

  // this is a trick to make a simple property/value into an Observable
  private _pidSource = new BehaviorSubject<number>(0);
  public pid$ = this._pidSource.asObservable();

  constructor() { }

  test() {
    console.log("PictureService test");
  }

  // Apply the given tag to the current Picture
  applyTag(tag: string) {
    //TODO: this needs to actually send a post request to the server!

    // Do nothing if this tag is already in the list
    if (this.tags.indexOf(tag) > -1) {
      return;
    }

    console.log("Pretending to add " + tag + " to PID=" + this.pid);
    this.tags.push(tag);
  }

  getTags() {
    return this.tags;
  }

  // return a list of thumbnails to be displayed in the reel component
  getReel() {

  }

  // return the current full res picture (data?)
  getPicture() {

  }

  nextPicture() {
    this.pid += 1;
    this._pidSource.next(this.pid);
  }
  prevPicture() {
    this.pid -= 1;
    this._pidSource.next(this.pid);
  }
}
