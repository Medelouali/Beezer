import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{

  constructor(public loader: LoaderService) { }
  
  ngOnInit(): void {
    this.loader.setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/infos',
      headers: {
        'X-RapidAPI-Key': '60a5b91abamsh3785bc4e1c9bdbbp11b218jsn6a3ab37e7fc0',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };
    
    axios.request(options).then((response) => {
      console.log(response.data);
      this.loader.setLoading(false);
    }).catch((error)=>{
      this.loader.setLoading(false);
      console.error(error);
    });
  }

}
