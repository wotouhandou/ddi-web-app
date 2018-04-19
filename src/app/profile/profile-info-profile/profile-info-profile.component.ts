import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FileUploader} from 'ng2-file-upload';
import {Profile} from "../../model/Profile";
import {AppConfig} from "../../app.config";
import {DataSetService} from "../../services/dataset.service";
import {ProfileService} from "../../services/profile.service";
import {DataSetDetail} from "../../model/DataSetDetail";

@Component({
  selector: 'app-profile-info-profile',
  templateUrl: './profile-info-profile.component.html',
  styleUrls: ['./profile-info-profile.component.css']
})
export class ProfileInfoProfileComponent implements OnInit, OnChanges {

  public name: String;
  form: FormGroup;
  editMode: boolean = false;
  facebookConnected: boolean = false;
  orcidConnected: boolean = false;
  dataSetDetails:DataSetDetail[] = new Array<DataSetDetail>();
  profileImageUrl: string = "";
  coauthors: string[];
  userId: string = "";

  public uploader:FileUploader;

  @Input() profile: Profile = new Profile();
  @Output() change = new EventEmitter();

  constructor(private profileService: ProfileService
    ,private dataSetService: DataSetService
    ,private formBuilder: FormBuilder
    ,private appConfig: AppConfig) {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      //console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      if(propName=="profile"){
        if(null!=chng.currentValue){
          console.log(`profile-info ngOnChanges: ${chng.currentValue.userId}`);
          this.profile = chng.currentValue;
          this.profileImageUrl = this.getProfileImageUrl();
          this.uploader = new FileUploader({url: this.appConfig.getProfileUploadImageUrl(this.profile.userId)});
          this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            this.profileImageUrl = this.getProfileImageUrl();
          };
        }
      }
    }
  }

  editClicked() {
    this.editMode = true;
  }




  getProfileImageUrl(): string{
    return this.appConfig.getProfileImageUrl(this.profile.userId);
  }




}
