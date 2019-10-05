import svg4everybody from 'svg4everybody';
import module from './modules/module';

svg4everybody();

const RED = {};
RED.module = module;

if (!window.namespace) {
  window.PROJECT = RED;
}

Object.keys(RED).forEach(function (key) {
  if (RED[key].hasOwnProperty('init')) {
    RED[key].init();
  }
});
