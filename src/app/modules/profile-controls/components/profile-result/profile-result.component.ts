import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ProfileService} from '@shared/services/profile.service';
import {Profile} from 'model/Profile';
import {AppConfig} from 'app/app.config';
import {Router} from '@angular/router';
import {DataSetService} from '@shared/services/dataset.service';
import {Observable} from 'rxjs/Rx';
import {DataSetDetail} from 'model/DataSetDetail';
import {NotificationsService} from 'angular2-notifications/dist';
import {ThorService} from '@shared/services/thor.service';
import {DataSet} from 'model/DataSet';

@Component({
    selector: 'app-profile-result',
    templateUrl: './profile-result.component.html',
    styleUrls: ['./profile-result.component.css']
})
export class ProfileResultComponent implements OnInit, OnChanges {

    dataSets: DataSetDetail[];

    @Input() profile: Profile;
    @Output() change = new EventEmitter();


    constructor(public profileService: ProfileService
        , private dataSetService: DataSetService
        , public appConfig: AppConfig
        , private router: Router
        , private notificationService: NotificationsService
        , private thorService: ThorService) {
    }

    ngOnInit() {
        // this.profileService.getDataSetDetails(this.profileService.profile);
        this.profileService.onProfileReceived.subscribe(x => this.reloadDataSets());
    }

    ngOnChanges(changes: SimpleChanges) {
        for (const propName of Object.keys(changes)) {
            const chng = changes[propName];
            const cur = JSON.stringify(chng.currentValue);
            const prev = JSON.stringify(chng.previousValue);
            // console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
            if (propName === 'profile') {
                if (null != chng.currentValue) {
                    this.reloadDataSets();
                }
            }
        }
    }

    reloadDataSets() {
        this.dataSets = [];
        if (!this.profile) {
            return;
        }
        if (!this.profile.dataSets) {
            return;
        }
        Observable.forkJoin(this.profile.dataSets.map(x => {
            return this.dataSetService.getDataSetDetail_private(x.id, x.source);
        })).subscribe(
            y => {
                this.dataSets = y;
                this.thorService.datasets = y;
            }
        );
    }


    deleteDataset(source, id) {
        const i: number = this.profile.dataSets.findIndex(x => x.source === source && x.id === id);
        if (i !== -1) {
            console.log(`deleting ${source} ${id}`);
            this.profile.dataSets.splice(i, 1);
        }
        this.change.emit({});
        this.reloadDataSets();

        this.notificationService.success('Dataset deleted', 'from your profile');
    }

    convertDataset(d) {
        const dataset = new DataSet();
        dataset.id = d.id;
        dataset.source = d.source;
        dataset.title = d.name;
        dataset.description = d.description;
        dataset.keywords = d.keywords;
        dataset.organisms = d.organisms;
        dataset.tissues = d.tissues;
        dataset.diseases = d.diseases;
        dataset.omicsType = d.omics_type;
        dataset.publicationDate = d.publicationDate;
        dataset.score = d.score;
        dataset.visitCount = d.visitCount;
        dataset.claimable = d.claimable;
        dataset.citationsCount = d.citationsCount;
        dataset.connectionsCount = d.connectionsCount;
        dataset.reanalysisCount = d.reanalysisCount;
        dataset.viewsCount = d.viewsCount;
        return dataset;
    }
}
