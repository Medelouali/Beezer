import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { LoaderService } from '../loader.service';
import { Track } from './card/card.types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchTerm: string;
  tracksList: Track[]=[];

  constructor(private route: ActivatedRoute, public loader: LoaderService) {
    this.searchTerm="";
  }


  ngOnInit() {
    // Subscribe to the queryParams observable
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'];
      // Call the search function
      console.log("q has changed to:\t", this.searchTerm);
      this.search(this.searchTerm);
    });
  }

  search(q: string){
    this.loader.setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
      params: { q },
      headers: {
        'X-RapidAPI-Key': '60a5b91abamsh3785bc4e1c9bdbbp11b218jsn6a3ab37e7fc0',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };
    
    axios.request(options).then( ({data}) =>{
      console.log(data);
      this.tracksList=data.data;
      this.loader.setLoading(false);
    }).catch((error)=>{
      console.error(error);
      this.loader.setLoading(false);
    });
  }
}
