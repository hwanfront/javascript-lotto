const Controller = require('./controller/Controller');

class App {
  #controller;

  play() {
    this.#controller = Controller.create();
    this.#controller.start();
  }
}

module.exports = App;
