

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


declare module "@goodthnx/metalsmith-webpack" {
    import webpack from 'webpack'
    
    type Plugin = (...args: any[]) => void;
    
    type Config = Partial<Omit<webpack.Configuration, "entry" | "output">>;
    
    interface Options {
        pattern?: string;
        config?: true | string | Config | null;
    }
    
    function plugin(options?: Options): Plugin;
    export = plugin;
}

declare module "@goodthnx/metalsmith-postcss" {
    import postcss from 'postcss'
    
    type Plugin = (...args: any[]) => void;
    
    type Config = Partial<postcss.ProcessOptions>;
    
    interface Options {
        pattern?: string;
        config?: true | string | Config | null;
    }
    
    function plugin(options?: Options): Plugin;
    export = plugin;
}

declare module "@goodthnx/metalsmith-handlebars" {
    import handlebars from 'handlebars'
    
    type Plugin = (...args: any[]) => void;
    
    type Config = Partial<handlebars.RuntimeOptions>;
    
    interface Options {
        pattern?: string;
        extension?: string;
        partials?: string | null;
        helpers?: string | null;
        layouts?: string | null;
        config?: Config | null;
    }
    
    function plugin(options?: Options): Plugin;
    export = plugin;
}