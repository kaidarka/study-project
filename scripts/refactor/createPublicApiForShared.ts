import { Project } from 'ts-morph';
import path from 'path';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const sharedDir = project.getDirectory(path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui'));

const componentsDirs = sharedDir?.getDirectories();


componentsDirs?.forEach((dir) => {
    const indexFilePath = dir.getPath() + '/index.ts';
    const indexFile = dir.getSourceFile(indexFilePath);
    if (!indexFile) {
        const content = `export * from './${dir.getBaseName()}';\n`;
        
        const file = dir.createSourceFile(indexFilePath, content, { overwrite: true });
        file.save();
    }
});

function isAbsolute(value: string) {
    return ['app', 'entities', 'features', 'widgets', 'pages', 'shared']
        .some((folder) => value.startsWith(folder));
}

files.forEach((file) => {
    const imports = file.getImportDeclarations();
    imports.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAliases = value.replace('@/', '');

        const segments = valueWithoutAliases.split('/');

        const isShared = segments?.[0] === 'shared';
        
        if (!isShared) return;

        const isSharedUi = isShared && segments?.[1] === 'ui';
        
        if (!isSharedUi) return;

        if (isAbsolute(valueWithoutAliases)) {
            const res = valueWithoutAliases.split('/').slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${res}`);
        }
    });
});

project.save();
