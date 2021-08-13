import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { FroggerComponent } from './frogger/frogger.component';

import { FrontpageComponent }       from './frontpage/frontpage.component';
import { ProjectsComponent }        from './projects/projects.component';

const routes: Routes = 
[
  { path: '',                                       component: FrontpageComponent               },
  { path: 'projects',                               component: ProjectsComponent                },
  { path: 'projects/:title',                        component: ProjectsComponent                },
  { path: 'test',                                   component: FroggerComponent                 }
  //{ path: '**',                                     component: PageNotFoundComponent,           canActivate: [NeutralGuard]   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
