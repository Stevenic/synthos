import path from "path";
import { checkIfExists, copyFile, copyFiles, ensureFolderExists, saveFile } from "./files";
import { DefaultSettings } from "./settings";

export interface SynthOSConfig {
    pagesFolder: string;
    requiredPagesFolder: string;
    defaultPagesFolder: string;
    defaultScriptsFolder: string;
}

export function createConfig(pagesFolder = '.synthos'): SynthOSConfig {
    return {
        pagesFolder: path.join(process.cwd(), pagesFolder),
        requiredPagesFolder: path.join(__dirname, '../required-pages'),
        defaultPagesFolder: path.join(__dirname, '../default-pages'),
        defaultScriptsFolder: path.join(__dirname, '../default-scripts')
    };
}

export async function init(config: SynthOSConfig, includeDefaultPages: boolean = true): Promise<boolean> {
    // Check for existing folder
    if (await checkIfExists(config.pagesFolder)) {
        return false;
    }

    console.log(`Initializing .synthos folder...`);

    // Create pages folder
    await ensureFolderExists(config.pagesFolder);

    // Create mandatory files
    await saveFile(path.join(config.pagesFolder, '.gitignore'), 'settings.json\n');
    await saveFile(path.join(config.pagesFolder, 'settings.json'), JSON.stringify(DefaultSettings, null, 4));
    await saveFile(path.join(config.pagesFolder, 'settings.json.example'), JSON.stringify(DefaultSettings, null, 4));

    // Setup default scripts
    console.log(`Copying default scripts to .synthos folder...`);
    const scriptsFolder = path.join(config.pagesFolder, 'scripts');
    await ensureFolderExists(scriptsFolder);
    switch (process.platform) {
        case 'win32':
            await copyFile(path.join(config.defaultScriptsFolder, 'windows-terminal.json'), scriptsFolder);
            break;
        case 'darwin':
            await copyFile(path.join(config.defaultScriptsFolder, 'mac-terminal.json'), scriptsFolder);
            break;
        case 'android':
            await copyFile(path.join(config.defaultScriptsFolder, 'android-terminal.json'), scriptsFolder);
            break;
        case 'linux':
        default:
            await copyFile(path.join(config.defaultScriptsFolder, 'linux-terminal.json'), scriptsFolder);
            break;
    }  

    await saveFile(path.join(scriptsFolder, 'example.sh'), '#!/bin/bash\n\n# This is an example script\n\n# You can run this script using the following command:\n# sh .synthos/scripts/example.sh\n\n# This script will print "Hello, World!" to the console\n\necho "Hello, World!"\n');
    // Copy pages
    if (includeDefaultPages) {
        console.log(`Copying default pages to .synthos folder...`);
        await copyFiles(config.defaultPagesFolder, config.pagesFolder);
    }

    return true;
}
    