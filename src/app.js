export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: './welcome/welcome', nav: true, title:'Welcome' },
      { route: 'users',         name: 'users',    moduleId: './users/users',    nav: true, title:'Github Users' },
      { route: 'metadata',         name: 'metadata',    moduleId: './metadata/metadata',    nav: true, title:'Metadata Editor' },
      { route: 'child-router',  name: 'child-router', moduleId: './child-router/child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}