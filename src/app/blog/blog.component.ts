import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Projects } from '../helpers/models/models';
import { HelperService } from '../helpers/services/helper.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit 
{

    public filterButtons: string[] = ['All', 'Data Structures', 'Algorithms'];
    public selectedFB   : string   = this.filterButtons[0];
    public currentRoute : string | null;
    public currentURL   : string = '';
    public iframeSrc?   : string;
    public gitSrc?      : string;
    public arrProjects  : Projects[];
    private _routerSub  : Subscription = Subscription.EMPTY; //Check when the navigation ends, and then get profile info to prevent multiple requests

    constructor(public hS: HelperService, public route: ActivatedRoute, private router: Router, 
        private cfr: ComponentFactoryResolver, private dom: DomSanitizer)
    {
        this.currentRoute = this.route.snapshot.paramMap.get('title');
        this.arrProjects = 
        [
            {
                type           : ["Data Structures"],
                image          : "", 
                title          : "Union Find",
                date           : new Date("August 12, 2021"),
                subtitle       : "TypeScript, C++", 
                description    : "Notes on the Union Find Data Structure",
                link           : "unionfind",
                details        :    [
                                        { 
                                            heading   : 'What?', 
                                            notes     : `A data structure that keeps track of elements which are split into one or more sets 
                                                        (shows which elements are connected).  There are two Operations: Union & Find`,
                                        },
                                        {
                                            heading   : 'When / Where', 
                                            notes     : `KrusKal's Min Spanning Tree. Grid Percolation. Network Connectivity. Least Common Ancestors, Image Processing`
                                        },
                                        {
                                            heading   : 'Complexity', 
                                            notes     : `Construction, Union, Find, Get Component Size, Check if COnnected, Count Components`
                                        }
                                        ,
                                        {
                                            heading   : 'Practice', 
                                            notes     : `Number of Islands`
                                        }
                                    ],
                demo           :    {},
                hardware       :    [],
                software       :    [],
                references     :    [],
            }
        ];

        this._routerSub = router.events.subscribe((val) => 
        {
          if(val instanceof NavigationEnd) 
          {
                this.setiFrame(val.url);
              this.reInitialize(val.url);
          }
        });
    }

    ngOnInit(): void 
    {

    }

    public reInitialize(url: string) : void
    {
        url = url.split("/")[2];
        this.currentURL = url;
    }

    public checkCurrentURL(obj : Projects) : boolean
    {
        return (obj.link == this.currentURL) ? true : false;
    }

    setiFrame(url : string) : void
    {
        url = url.split("/")[2];
        for(let obj of this.arrProjects)
        {
            if(obj.link == url)
            {
                let isValid = (obj.link == url) ? true : false;

                if(isValid)
                {
                    this.gitSrc = obj.demo?.git;
                    this.iframeSrc = obj.demo?.video;
                }
            }
        }
        
    }

    checkFilter(obj : Projects) : boolean
    {

        return ((this.selectedFB == 'All') || (obj.type.includes(this.selectedFB))) ? true : false;
    }

    setFilter(str : string) : void
    {
        this.selectedFB = str;
    }

    ngOnDestroy()
    {
      if(!!this._routerSub)
      {
        this._routerSub.unsubscribe();
      }
    }

}
