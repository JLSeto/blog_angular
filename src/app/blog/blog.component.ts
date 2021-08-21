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
        this.arrProjects = this.defineProjects();


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

    public defineProjects() : Projects[]
    {         
        return [
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
                                                        (shows which elements are connected).  There are two main operations: Union & Find`,
                                        },
                                        {
                                            heading   : 'When / Where', 
                                            list      : 
                                                        [
                                                            "KrusKal's Min Spanning Tree", 
                                                            "Grid Percolation", 
                                                            "Network Connectivity", 
                                                            "Least Common Ancestors", 
                                                            "Image Processing"
                                                        ]
                                        },
                                        {
                                            heading   : 'Complexity', 
                                            tableList : 
                                                        [
                                                            {left: "Construction, Union",   right: "O(n)"},
                                                            {left: "Union",                 right: "α(n)"},
                                                            {left: "Find",                  right: "α(n)"},
                                                            {left: "Get Component Size",    right: "α(n)"},
                                                            {left: "Check if Connected",    right: "α(n)"},
                                                            {left: "Count Components",      right: "O(1)"},
                                                        ]
                                        },
                                        {
                                            heading   : 'Practice', 
                                            tagList   : [`Number of Islands`, 'Percolation']
                                        },
                                        {
                                            heading         : 'Implementation', 
                                            tagListLinks    : [
                                                                {link: "https://github.com/JLSeto/DataStructures/tree/main/tS_jS/src/unionfind", title: "TypeScript"}, 
                                                                {link: "", title: "C++"}
                                                              ]
                                        }
                                    ],
                hardware       :    [],
                software       :    [],
                references     :    [],
            },
            {
                type           : ["Data Structures"],
                image          : "", 
                title          : "Linked Lists",
                date           : new Date("August 12, 2021"),
                subtitle       : "TypeScript, C++", 
                description    : "Notes on the Linked Lists Data Structure",
                link           : "linkedlists",
                details        :    [
                                        { 
                                            heading   : 'What?', 
                                            notes     : `A sequential list of nodes that holds data which point to other 
                                                        nodes also containing data.`,
                                        },
                                        {
                                            heading   : 'When / Where', 
                                            list      : 
                                                        [
                                                            "List, Queue & Stack Implementations", 
                                                            "Circular Lists", 
                                                            "Model real world objects like trains", 
                                                            "Hash Table Implementations", 
                                                            "Adjacency lists for graphs"
                                                        ]
                                        },
                                        {
                                            heading   : 'Complexity',
                                            tableListHead: {rightHead: "Single", right2Head: "Double"},
                                            tableList : 
                                                        [
                                                            {left: "Remove head",   right: "O(1)", right2: "O(1)"},
                                                            {left: "Remove Tail",   right: "O(n) <- need to set new tail next to null", right2: "O(1)"},
                                                            {left: "Remove Middle", right: "O(n)", right2: "O(n)"}
                                                        ]
                                        },
                                        {
                                            heading   : 'Singly vs Double Linked List', 
                                            notes     : `Single - less memory, but cannot easily access previous elements. <br>
                                                        Double - can traverse backwards, but costs 2x memory`,
                                        },
                                        {
                                            heading         : 'Implementation', 
                                            tagListLinks    : [
                                                                {link: "https://github.com/JLSeto/DataStructures/tree/main/tS_jS/src/linkedlist", title: "TypeScript"},
                                                                {link: "", title: "C++"}
                                                              ]
                                        }
                                    ],
                hardware       :    [],
                software       :    [],
                references     :    [],
            },
            {
                type           : ["Data Structures"],
                image          : "", 
                title          : "Hash Table",
                date           : new Date("August 12, 2021"),
                subtitle       : "TypeScript, C++", 
                description    : "Notes on the Hash Table Data Structure",
                link           : "hashtable",
                details        :    [
                                        { 
                                            heading   : 'What?', 
                                            notes     : `A data structure that provides a mapping from keys to values
                                                        using a technique called hashing. (key, value).  How this is done is with
                                                        a Hash Function - which is a function that 
                                                        maps a key to a Whole Number in a fixed range`,
                                        },
                                        { 
                                            heading   : 'Properties of Hash Function', 
                                            notes     : `If H(x) = H(y) then objects x & y might be equal. 
                                                         If H(x) != H(y), then definetly not equal! Above is useful
                                                         to check if 2 objects are = by not checking the whole of the obj if is large.
                                                         (e.g like comparing files)`,
                                        },
                                        { 
                                            heading   : 'How Does a Hash Table Work?', 
                                            notes     : `Use a uniform Hash Function. How to handle hash Collisions? 
                                                        Separate Chaining - maintain a DS like Linked List.
                                                        Open Addressing - finding another place with the hash table by offsetting
                                                        initial location.`,
                                        },
                                        {
                                            heading   : 'Time Complexity',
                                            tableListHead: {rightHead: "Average", right2Head: "Worst"}, 
                                            tableList : 
                                                        [
                                                            {left: "Insertion",         right: "O(1)", right2: "O(n)"},
                                                            {left: "Removal",           right: "O(1)", right2: "O(n)"},
                                                            {left: "Search",            right: "O(1)", right2: "O(n)"}
                                                        ]
                                        },
                                        {
                                            heading   : 'Practice', 
                                            tagList   : [`Two Sum`]
                                        },
                                        {
                                            heading         : 'Implementation', 
                                            tagListLinks    : [
                                                                {link: "https://github.com/JLSeto/DataStructures/tree/main/tS_jS/src/hashtable", title: "TypeScript"}, 
                                                                {link: "", title: "C++"}
                                                              ]
                                        }
                                    ],
                hardware       :    [],
                software       :    [],
                references     :    [],
            },
            {
                type           : ["Data Structures"],
                image          : "", 
                title          : "Priority Queue | Min/Max Heap",
                date           : new Date("August 12, 2021"),
                subtitle       : "TypeScript, C++", 
                description    : "Notes on the Priority Queue abstract data type and the Heap data structure",
                link           : "priorityqueue",
                details        :    [
                                        { 
                                            heading   : 'What is a Priority Queue (PQ)?', 
                                            notes     : `An abstract data type that operates similar to a normal queue
                                                        except that each element has a certain priority.  The priority of the elements in the PQ
                                                        determine the order in which elements are removed from the PQ.  Data must be comparable 
                                                        (must be able to be ordered from least to greates or vice versa).`,
                                        },
                                        { 
                                            heading   : 'What is a Heap?', 
                                            notes     : `A tree based Data Strucutres that satisfies the heap invariant: If A is a parent node
                                                        of B, then A is ordered with respect to B for all nodes A & B in the Heap. 
                                                        Example: Min Heap / Max Heap`,
                                        },
                                        {
                                            heading   : 'When / Where?', 
                                            list      : 
                                                        [
                                                            "Certain Implementations of Dijkstra's Shortest Path", 
                                                            "Dynamically fetch next best or worst element", 
                                                            "Huffman Coding (loessless data compression)", 
                                                            "BFS algorithms", 
                                                            "Minimum Spanning Tree Algorithms"
                                                        ]
                                        },
                                        {
                                            heading   : 'Complexity',
                                            tableList : 
                                                        [
                                                            {left: "Construction",          right: "O(n)"},
                                                            {left: "Polling",               right: "O(log n)"},
                                                            {left: "Peeking",               right: "O(1)"},
                                                            {left: "Adding",                right: "O(log n)"},
                                                            {left: "Naive Removing",        right: "O(n)"},
                                                            {left: "Advance Remove",        right: "O(log n)"},
                                                            {left: "Naive Contains",        right: "O(n)"},
                                                            {left: "Contains Check",        right: "O(1)"},
                                                        ]
                                        },
                                        { 
                                            heading   : 'Binary Heap Representation', 
                                            notes     : `Adding - Bottom up (Swim) <br>
                                                         Removing - Bubble Down (Sink) <br><br>
                                                         left: 2*i + 1; <br>
                                                         right: 2*i + 2; <br><br>
                                                         Removing Elements - <br>
                                                         1. Swap root with last element. <br> 
                                                         2. Remove the root after swapped. <br>
                                                         3. Bubble Down <br><br>
                                                         [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]<br>
                                                         [9, 8, 7, 6, 5, 1, 2, 2, 2, 3, &nbsp;&nbsp;4, &nbsp;&nbsp;0, &nbsp;&nbsp;1, &nbsp;&nbsp;&nbsp;2, &nbsp;&nbsp;1]`,
                                            img       : '/assets/blog/binaryHeap/binaryHeap.png'
                                                
                                        },
                                        {
                                            heading   : 'Practice', 
                                            tagList   : ['Merge k Sorted Lists', 'Find Median from Data Stream', 'Top K Frequent Elements']
                                        },
                                        {
                                            heading         : 'Implementation', 
                                            tagListLinks    : [
                                                                {link: "https://github.com/JLSeto/DataStructures/tree/main/tS_jS/src/priorityqueue", title: "TypeScript"}, 
                                                                {link: "", title: "C++"}
                                                              ]
                                        }
                                    ],
                hardware       :    [],
                software       :    [],
                references     :    [],
            }
        ];
    }
}
