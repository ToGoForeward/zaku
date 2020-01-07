import {
  identifier,
  jsxOpeningElement,
  jsxClosingElement,
  jsxAttribute,
  jsxIdentifier,
  blockStatement,
  returnStatement,
  binaryExpression,
  expressionStatement,
  jsxExpressionContainer,
  jsxElement,
  functionExpression,
  jsxMemberExpression,
  jsxEmptyExpression,
  stringLiteral
} from '@babel/types'

function createJSXelement() {
  return functionExpression(
    identifier('functionName'),
    [],
    blockStatement([
      returnStatement(element('Button', [{ name: 'name1', value: 'value1' }]))
    ])
  )
}

function element(name, attributes?) {
  return jsxElement(
    jsxOpeningElement(
      jsxIdentifier(name),
      attributes.map(({ name, value }) => attribute(name, value))
    ),
    jsxClosingElement(jsxIdentifier(name)),
    [],
    true
  )
}

function attribute(name, value) {
  return jsxAttribute(jsxIdentifier(name), stringLiteral(value))
}

function createAttribute(name, value) {
  return {}
}

export default {
  createAttribute,
  createJSXelement
}
