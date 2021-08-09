import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../helpers/services/helper.service';
import { SidenavService } from '../helpers/services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit 
{
  public title    : string      = 'J.S';
  public navLinks : {desc: string, link: string}[];
  public locSrc   : {desc: string, link: string}[];

  constructor(public hS: HelperService, public sidenav: SidenavService, public router: Router)
  {
    this.locSrc = 
    [
      {desc: './assets/twitter.svg',      link: 'https://twitter.com/Jset0'               },  
      {desc: './assets/github.png',       link: 'https://github.com/JLSeto'               }, 
      {desc: './assets/linkedin.png',     link: 'https://www.linkedin.com/in/jimmy-seto/' }
    ];

    this.navLinks = 
    [
      {desc: 'About',           link: '/'             }, 
      {desc: 'Projects',        link: 'projects'      }, 
      {desc: 'Web Components',  link: 'webcomponents' }, 
      {desc: 'Blog',            link: 'blog'          }
    ];
  }

  ngOnInit(): void 
  {
    
  }

  toggle()
  {
    this.sidenav.toggle();
  }

}
