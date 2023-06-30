export class App {
  private static instance: App;

  static getInstance(): App {
    if (!App.instance) {
      App.instance = new App();
    }
    return App.instance;
  }

  run(): void {}
}
