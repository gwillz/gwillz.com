
declare module "metalsmith-watch" {
    
    import type { Plugin } from 'metalsmith';
    
    function plugin(options?: any): Plugin;
    export = plugin;
}
