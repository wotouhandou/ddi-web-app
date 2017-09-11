import {Component, OnInit, ViewChild} from '@angular/core';
import {AutocompleteNComponent} from "../autocomplete-n/autocomplete-n.component";
import {Router} from "@angular/router";
import {SearchService} from "../../services/search.service";
import {MdMenuTrigger} from "@angular/material";

@Component({
  selector: 'search-box-large',
  templateUrl: './search-box-large.component.html',
  styleUrls: ['./search-box-large.component.css']
})
export class SearchBoxLargeComponent implements OnInit {

  constructor(private searchService: SearchService, private router: Router) { }

  @ViewChild(AutocompleteNComponent) autocompleteComponent:AutocompleteNComponent;
  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

  ngOnInit() {
  }

  doSearch(query: string){
    this.router.navigate(["search"], { queryParams: { q: query }});
  }

  search(){
    let searchString = this.searchService.fullQuery;
    this.doSearch(searchString);
  }

  caret_class(): string{
    return this.trigger.menuOpen ? "fa-caret-up" : "fa-caret-down" ;
  }

  doNotPropagate(event){
    event.stopPropagation();
  }

  submitTestQuery(){
    alert("submitted searchbox");
  }
}