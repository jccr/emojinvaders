'use strict';

const ioHook = require('iohook');

ioHook.on('keyup', event => {
  console.log(event); // { type: 'mousemove', x: 700, y: 400 }
});

ioHook.on('keydown', event => {
  console.log(event); // { type: 'mousemove', x: 700, y: 400 }
});
// Register and start hook
ioHook.start();
