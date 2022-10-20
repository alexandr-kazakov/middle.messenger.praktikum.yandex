import Block from './Block';

export interface BlockConstructable<P = any> {
  new(props: P): Block<P>;
}

function isEqual(lhs: string, rhs: string): boolean {
  return lhs === rhs;
}

function render(query: string, block: Block) {
  console.log('start renderrender')
  const root = document.querySelector(query);
  console.log('renderrender')
  if (root === null) {
    throw new Error(`root not found by selector "${query}"`);
  }

  root.innerHTML = '';

  root.append(block.getContent()!);

  return root;
}

class Route {
  private block: Block | null = null;

  constructor(
    private pathname: string,
    private readonly blockClass: BlockConstructable,
    private readonly query: string) {
  }

  leave() {
    this.block = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    console.log('start render base')
    if (!this.block) {
      console.log('start render base 1111')
      this.block = new this.blockClass({});
      console.log('start render base 2222')
      render(this.query, this.block);
      console.log('start render base 2222')
      return;
    }
  }
}

export class Router {
  private static __instance: Router;
  private routes: Route[] = [];
  private currentRoute: Route | null = null;
  private history = window.history;

  constructor(private readonly rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];

    Router.__instance = this;
  }

  public use(pathname: string, block: BlockConstructable) {
    const route = new Route(pathname, block, this.rootQuery);
    this.routes.push(route);

    return this;
  }

  public go(pathname: string) {
    console.log(8888888888);

    this.history.pushState({}, '', pathname);
    console.log(999999999);
    this._onRoute(pathname);
    console.log(10101010101);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  public start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window;

      this._onRoute(target.location.pathname);
    }

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    console.log(111111222222);

    if (!route) {
      return;
    }
    console.log(1111113333333);
    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave();
    }
    console.log(11111144444444);
    this.currentRoute = route;
    console.log(111111555555555);
    route.render();
    console.log(111111666666666);
  }

  private getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }
}

export default new Router('#app');
