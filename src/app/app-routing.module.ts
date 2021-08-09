import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { FrontpageComponent }       from './frontpage/frontpage.component';
import { ProjectsComponent }        from './projects/projects.component';

const routes: Routes = 
[
  { path: '',                                       component: FrontpageComponent               },
  { path: 'projects',                               component: ProjectsComponent                },
  //{ path: '**',                                     component: PageNotFoundComponent,           canActivate: [NeutralGuard]   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
