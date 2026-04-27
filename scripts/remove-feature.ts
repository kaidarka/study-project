import { Project, SyntaxKind, Node } from 'ts-morph';

const featureName = process.argv[2]; // name of feature flag in code

const featureState = process.argv[3]; // on/off

if (!featureName || !['on', 'off'].includes(featureState)) {
    console.error('Feature name and state are required');
    process.exit(1);
}

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFeatures(node: Node) {
    let isToggleFeatures = false;

    node.forEachChild((child) => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures') {
            isToggleFeatures = true;
        }
    });

    return isToggleFeatures;
}

files.forEach((file) => {
    file.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFeatures(node)) {
            const opbjectOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression
            );

            if (!opbjectOptions) return;

            const onFunctionProp = opbjectOptions?.getProperty('on');
            const offFunctionProp = opbjectOptions?.getProperty('off');
            const featureFlagNameProp = opbjectOptions?.getProperty('name');

            const onFunction = onFunctionProp?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
            const offFunction = offFunctionProp?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
            const featureFlagName = featureFlagNameProp
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            if (featureFlagName !== featureName) return;

            if (featureState === 'on') {
                node.replaceWithText(onFunction?.getBody()?.getText() ?? '');
            }

            if (featureState === 'off') {
                node.replaceWithText(offFunction?.getBody()?.getText() ?? '');
            }
        }
    });
});

project.save();
