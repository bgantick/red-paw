import svg4everybody from 'svg4everybody';
import pin from './modules/pin';

svg4everybody();

const RED = {};
RED.pin = pin;

if (!window.namespace) {
  window.PROJECT = RED;
}

Object.keys(RED).forEach(function (key) {
  if (RED[key].hasOwnProperty('init')) {
    RED[key].init();
  }
});
