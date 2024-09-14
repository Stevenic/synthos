import path from "path";
import { checkIfExists, copyFiles, ensureFolderExists, saveFile } from "./files";
import { DefaultSettings } from "./settings";

export interface ShellEConfig {
    pagesFolder: string;
    requiredPagesFolder: string;
    defaultPagesFolder: string;
}

export function createConfig(pagesFolder = '.shelle'): ShellEConfig {
    return {
        pagesFolder: path.join(process.cwd(), pagesFolder),
        requiredPagesFolder: path.join(__dirname, '../required-pages'),
        defaultPagesFolder: path.join(__dirname, '../default-pages'),
    };
}

export async function init(config: ShellEConfig, includeDefaultPages: boolean = true): Promise<boolean> {
    // Check for existing folder
    if (await checkIfExists(config.pagesFolder)) {
        return false;
    }

    console.log(`Initializing .shelle folder...`);

    // Create pages folder
    await ensureFolderExists(config.pagesFolder);

    // Create mandatory files
    await saveFile(path.join(config.pagesFolder, '.gitignore'), 'settings.json\n');
    await saveFile(path.join(config.pagesFolder, 'settings.json'), JSON.stringify(DefaultSettings, null, 4));
    await saveFile(path.join(config.pagesFolder, 'settings.json.example'), JSON.stringify(DefaultSettings, null, 4));

    // Copy pages
    if (includeDefaultPages) {
        console.log(`Copying default pages to .shelle folder...`);
        await copyFiles(config.defaultPagesFolder, config.pagesFolder);
    }

    return true;
}
    