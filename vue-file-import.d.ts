
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import VueRouter from "vue-router";
import { Route } from "vue-router";
import editMode from './assets/mixins'

// declare module "*.vue" {
//   import Vue from "vue";
//   export default Vue;
// }
declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    count: number
  }
  interface Vue {
    $router: VueRouter;
    $route: Route;
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}