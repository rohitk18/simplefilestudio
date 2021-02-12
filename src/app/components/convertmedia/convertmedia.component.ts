import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-convertmedia',
  templateUrl: './convertmedia.component.html',
  styleUrls: ['./convertmedia.component.scss']
})
export class ConvertmediaComponent implements OnInit {
  mediaFile: File = null;
  validCodecs: string[] = [];
  convertedCodec:string = null;

  constructor( private appService: AppService,private mediaService:MediaService) { }

  ngOnInit(): void { }
  
  goBack(): void {
    this.appService.goHome();
  }

  mediaFileChange(file: File) {
    this.mediaFile = file;
    let ftype = this.mediaFile.type.substring(this.mediaFile.type.indexOf('/') + 1);
    this.validCodecs = this.mediaService.validCodecs(ftype);
    this.convertedCodec = this.validCodecs[0];
  }

  convertFile() {
    if (this.mediaFile && this.convertedCodec) {
      this.mediaService.convertFile(this.mediaFile, this.convertedCodec);
    }
  }  

}
