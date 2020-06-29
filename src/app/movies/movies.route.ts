import { Route} from '@angular/router';
import { MoviesComponent} from './index';

export const HomeRoutes: Route[] = [
  {
    path:'',
    component: MoviesComponent
  }
];