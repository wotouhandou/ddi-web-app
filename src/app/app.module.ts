// <reference path="..node_modules/@angular/forms/src/form_providers.d.ts"/>
// <reference path="services/ontology.service.ts"/>
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import { AppComponent } from './app.component';
import {HomeComponent} from 'pages/home/home.component';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatMenuModule} from '@angular/material';
import {AlertModule} from 'ngx-bootstrap';
import {NguiAutoCompleteModule} from '@ngui/auto-complete';
import {DisqusModule} from 'ngx-disqus';
import {DropdownModule} from 'ng2-dropdown';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {NgxPaginationModule} from 'ngx-pagination';
import {ClipboardModule} from 'ngx-clipboard/dist';
import {TooltipModule} from 'ng2-tooltip';
import {UiSwitchModule} from 'angular2-ui-switch';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SimpleNotificationsModule} from 'angular2-notifications/dist';
import {routing} from './app.routes';
import {RouterModule} from '@angular/router';
import {ProfileService} from 'services/profile.service';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {AuthService} from 'services/auth.service';
import {AuthGuardService} from 'services/auth-guard.service';
import {SearchService} from 'services/search.service';
import {DataSetService} from 'services/dataset.service';
import {EnrichmentService} from 'services/enrichment.service';
import {SimilarityService} from 'services/similarity.service';
import {OntologyService} from 'services/ontology.service';
import {PublicationService} from 'services/publication.service';
import {DatabaseListService} from 'services/database-list.service';
import {AppConfig} from './app.config';
import {SimilarMoleculeService} from 'services/similar-molecule.service';
import {FeedbackService} from 'services/feedback.service';
import {StatisticsService} from 'services/statistics.service';
import {AltmetricService} from 'services/altmetric.service';
import {SelectedService} from 'services/selected.service';
import {ScoreService} from 'services/score.service';
import {DialogService} from 'services/dialog.service';
import {InviteService} from 'services/invite.service';
import {UnauthorizedComponent} from 'pages/unauthorized/unauthorized.component';
import {NotfoundComponent} from 'pages/notfound/notfound.component';
import {SearchBoxLargeComponent} from 'controls/search-box-large/search-box-large.component';
import {HotwordsComponent} from 'pages/home/charts/hotwords/hotwords.component';
import {MostAccessedComponent} from 'pages/home/charts/most-accessed/most-accessed.component';
import {ReposOmicsComponent} from 'pages/home/charts/repos-omics/repos-omics.component';
import {HomeAboutComponent} from 'pages/home/charts/home-about/home-about.component';
import {StatisticsPanelComponent} from 'pages/home/charts/statistics-panel/statistics-panel.component';
import {LatestDatasetsComponent} from 'pages/home/charts/latest-datasets/latest-datasets.component';
import {AnnualOmicstypeComponent} from 'app/pages/home/charts/annual-omicstype/annual-omicstype.component';
import {TweetsNewsComponent} from 'pages/home/charts/tweets-news/tweets-news.component';
import {TissuesOrganismsComponent} from 'pages/home/charts/tissues-organisms/tissues-organisms.component';
import {AutocompleteNComponent} from 'controls/autocomplete-n/autocomplete-n.component';
import {QueryBuilderComponent} from 'controls/query-builder/query-builder.component';
import {MegaNumberPipe} from './pipes/mega-number.pipe';
import {DropDownComponent} from 'controls/drop-down/drop-down.component';
import {LoginLauncherComponent} from 'controls/login-launcher/login-launcher.component';
import {LoginComponent} from 'controls/login/login.component';
import {DialogServiceMerge} from './merge/dialog-merge.service';
import {CitationDialogSearchComponent} from 'search/citation-dialog-search/citation-dialog-search.component';
import {SearchBoxComponent} from 'controls/search-box/search-box.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {CitationDialogDashboardprofileComponent} from 'profile-dashboard/citation-dialog-dashboardprofile.component';
import {CitationDialogComponent} from 'pages/dataset/citation-dialog/citation-dialog.component';
import {TermsComponent} from 'pages/terms/terms.component';
import {SelectedComponent} from 'pages/selected/selected.component';
import {SearchComponent} from 'pages/search/search.component';
import {SearchTotalComponent} from 'pages/search/search-total/search-total.component';
import {SearchFacetComponent} from 'pages/search/search-facet/search-facet.component';
import {SearchPagerComponent} from 'pages/search/search-pager/search-pager.component';
import {SearchResultComponent} from 'pages/search/search-result/search-result.component';
import {FeedbackComponent} from 'controls/feedback/feedback.component';
import {FacetOmicsComponent} from 'controls/facet-omics/facet-omics.component';
import {FacetComponent} from 'controls/facet/facet.component';
import {DatasetwidgetSearchComponent} from 'search/datasetwidget-search/datasetwidget-search.component';
import {ThorService} from 'services/thor.service';
import {ScoreSearchComponent} from 'search/datasetwidget-search/score-search/score-search.component';
import {CommonModule} from '@angular/common';
import {ControlsModule} from 'controls/controls.module';
import {PipesModule} from './pipes/pipes.module';


export function getParameterByName(name): string {
  const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenName: 'id_token',
        tokenGetter: (() => localStorage.getItem('id_token')),
        globalHeaders: [{'Content-Type': 'application/json'}],
        headerName: 'X-AUTH-TOKEN',
        noTokenScheme: true,
        noJwtError: true
    }), http, options);
}


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UnauthorizedComponent,
        NotfoundComponent,
        SearchBoxLargeComponent,
        HotwordsComponent,
        TissuesOrganismsComponent,
        ReposOmicsComponent,
        LatestDatasetsComponent,
        MostAccessedComponent,
        AnnualOmicstypeComponent,
        TweetsNewsComponent,
        StatisticsPanelComponent,
        HomeAboutComponent,
        AutocompleteNComponent,
        QueryBuilderComponent,
        MegaNumberPipe,
        DropDownComponent,
        LoginLauncherComponent,
        LoginComponent,
        CitationDialogDashboardprofileComponent,
        CitationDialogSearchComponent,
        CitationDialogComponent,
        TermsComponent,
        NotfoundComponent,
        SelectedComponent,
        SearchComponent,
        SearchTotalComponent,
        SearchFacetComponent,
        SearchPagerComponent,
        SearchResultComponent,
        FeedbackComponent,
        FacetOmicsComponent,
        FacetComponent,
        DatasetwidgetSearchComponent,
        ScoreSearchComponent,
        SearchBoxComponent
    ],
    imports: [
        CommonModule,
        PipesModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        MatDialogModule,
        MatMenuModule,
        MatButtonModule,
        MatCheckboxModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        NguiAutoCompleteModule,
        DisqusModule.forRoot('omicsdi'),
        AlertModule.forRoot(),
        DropdownModule,
        SlimLoadingBarModule.forRoot(),
        NgxPaginationModule,
        TooltipModule,
        UiSwitchModule,
        BrowserAnimationsModule,
        SimpleNotificationsModule.forRoot(),
        ClipboardModule,
        ControlsModule
    ],
    exports: [
        RouterModule,
        SearchComponent,
        SearchTotalComponent,
        SearchFacetComponent,
        SearchPagerComponent,
        SearchResultComponent,
        FeedbackComponent,
        FacetOmicsComponent,
        FacetComponent,
        DatasetwidgetSearchComponent,
        ScoreSearchComponent,
    ],
    providers: [ProfileService
        , {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        },
        {provide: LocationStrategy, useClass: HashLocationStrategy}
        , AuthService
        , AuthGuardService
        , SearchService
        , DataSetService
        , PublicationService
        , SimilarityService
        , EnrichmentService
        , OntologyService
        , DatabaseListService
        , SimilarMoleculeService
        , FeedbackService
        , AppConfig
        , DialogServiceMerge
        , StatisticsService
        , AltmetricService
        , SelectedService
        , DialogService
        , ScoreService
        , ThorService
        , MatDialogModule
        , MatMenuModule
        , MatButtonModule
        , InviteService],
    entryComponents: [
        // ConfirmDialogComponent
        //   CitationDialogSearchComponent
        // in some case dialog will not be loaded in lazy-load module,so we'd better put those component in here
        CitationDialogDashboardprofileComponent,
        CitationDialogSearchComponent,
        CitationDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
