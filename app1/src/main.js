import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(ElementUI);

function render(props = {}) {
  const { container } = props;
  console.log('container====1', container);
  new Vue({
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  // storeTest(props);
  render(props);
}

export async function unmount() {
  console.log('[ unmount ]');
//   instance.$destroy();
//   instance.$el.innerHTML = '';
//   instance = null;
//   router = null;
}
