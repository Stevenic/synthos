import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { server } from "./service";
import { createConfig, init } from "./init";

const dynamicImport = new Function('specifier', `return import(specifier)`);

export async function run() {
    await yargs(hideBin(process.argv))
        .scriptName('shelle')
        .command('start', `Starts ShellE's server.`, (yargs) => {
            return yargs
                .option('port', {
                    describe: `The port number to use.`,
                    type: 'number',
                    default: 4242
                })
                .option('pages', {
                    describe: `Include default pages when initializing a new .shelle folder.`,
                    type: 'boolean',
                    default: true
                })
                .demandOption([]);
        }, async (args) => {
            const config = createConfig();
            await init(config, args.pages);
            await server(config).listen(args.port, async () => {
                console.log(`ShellE server is running on http://localhost:${args.port}`);
                
                // Open using default browser
                const open = await dynamicImport('open');
                open.default(`http://localhost:${args.port}`);
            });
        })
        .help()
        .demandCommand()
        .parseAsync();
}
