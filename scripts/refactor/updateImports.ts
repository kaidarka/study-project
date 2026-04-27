import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isAbsolute(value: string) {
    return ['app', 'entities', 'features', 'widgets', 'pages', 'shared'].some((folder) =>
        value.startsWith(folder)
    );
}

files.forEach((file) => {
    const imports = file.getImportDeclarations();
    imports.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
