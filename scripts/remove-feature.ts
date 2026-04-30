import { Project, SyntaxKind, Node, JsxAttribute } from 'ts-morph';

const featureName = process.argv[2]; // name of feature flag in code

const featureState = process.argv[3]; // on/off

const toggleFunctionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeatures';

if (!featureName || !['on', 'off'].includes(featureState)) {
    console.error('Feature name and state are required');
    process.exit(1);
}

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFeaturesFunc(node: Node) {
    let isToggleFeatures = false;

    node.forEachChild((child) => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === toggleFunctionName) {
            isToggleFeatures = true;
        }
    });

    return isToggleFeatures;
}

function isToggleFeaturesComponent(node: Node) {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
    return identifier?.getText() === toggleComponentName;
}

function replaceToggleFunction(node: Node) {
    const opbjectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

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

function getAttributeNodeByName(attributes: JsxAttribute[], name: string) {
    return attributes.find((attribute) => attribute.getNameNode().getText() === name);
}

function replaceToggleComponent(node: Node) {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    const onAttribute = getAttributeNodeByName(attributes, 'on');
    const offAttribute = getAttributeNodeByName(attributes, 'off');
    const featureNameAttribute = getAttributeNodeByName(attributes, 'name');

    const componentFeatureName = featureNameAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        ?.slice(1, -1);

    if (componentFeatureName !== featureName) return;

    const offValue = offAttribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression();
    const onValue = onAttribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression();

    if (featureState === 'on' && onValue) {
        node.replaceWithText(onValue.getText());
    }

    if (featureState === 'off' && offValue) {
        node.replaceWithText(offValue.getText());
    }
}

files.forEach((file) => {
    const toggleFunctionNodes = file
        .getDescendantsOfKind(SyntaxKind.CallExpression)
        .filter(isToggleFeaturesFunc);
    const toggleComponentNodes = file
        .getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement)
        .filter(isToggleFeaturesComponent);

    // Replace from bottom to top to avoid invalidating following nodes.
    [...toggleFunctionNodes].reverse().forEach((node) => {
        replaceToggleFunction(node);
    });

    [...toggleComponentNodes].reverse().forEach((node) => {
        replaceToggleComponent(node);
    });
});

project.save();
