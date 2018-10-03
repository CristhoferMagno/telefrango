import Index from './components/default/Index';
import Recipe from './components/default/Recipe';
import Tips from './components/default/Tips';

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/receitas',
    name: 'recipes',
    component: Recipe
  },
  {
    path: '/dicas',
    name: 'tips',
    component: Tips
  },
  {
    path: '*',
    component: Index
  },
];