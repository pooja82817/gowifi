import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [
    {
      icon:'<i class="fa-solid fa-file-lines"></i>',
      color:'rgb(255, 154, 65)',
      about:'Fill out the Membership request form. This can Take 2 business days for approval.'
    },
    {
      icon:'<i class="fa-solid fa-arrow-pointer"></i>',
      color:'aqua',
      about:'Choose the device or plan for you.'
    },
    {
      icon:'<i class="fa-solid fa-envelope"></i>',
      color:'rgb(126, 56, 255)',
      about:'We mail you your start up package'
    },
    {
      icon:'<i class="fa-solid fa-circle-check"></i>',
      color:'rgb(255, 65, 236)',
      about:'You are good to go!'
    },
  ]

}
