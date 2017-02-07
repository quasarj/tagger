import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  private pid: number;
  constructor(private service: PictureService) { }

  ngOnInit() {
    this.service.pid$.subscribe(pid => this.pid = pid);
  }

  nextPic() {
    this.service.nextPicture();
  }
  prevPic() {
    this.service.prevPicture();
  }

}
