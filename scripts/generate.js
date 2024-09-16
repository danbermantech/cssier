// import { writeFileSync } from "fs";
const { writeFileSync, readFileSync, readdirSync, existsSync, mkdirSync } = require('fs')
const htmlAndSvgTags = [
  // HTML tags
  'a',
  'abbr',
  'address',
  // 'area',
  'article',
  'aside',
  'b',
  'bdi',
  'bdo',
  'blockquote',
  'body',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'html',
  'i',
  'iframe',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'main',
  'map',
  'mark',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'u',
  'ul',
  'var',
  'video',

  // SVG tags
  'svg',
  'animate',
  'animateTransform',
  'circle',
  'clipPath',
  'defs',
  'desc',
  'ellipse',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDistantLight',
  'feFlood',
  'feGaussianBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'filter',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'metadata',
  'mpath',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'switch',
  'symbol',
  'text',
  'textPath',
  'tspan',
  'use',
  'view',
]

const childless = [
  'area',
  'audio',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'wbr',
]

if (!existsSync('src/lib/templates')) throw Error('Template folder not found')
if (!existsSync('src/lib/templates/ComponentTemplate.tsx'))
  throw Error('Component template not found at src/lib/templates/ComponentTemplate.tsx')
if (!existsSync('src/lib/templates/StoryTemplate.tsx'))
  throw Error('Story template not found at src/lib/templates/StoryTemplate.tsx')
if (!existsSync('src/lib/templates/ChildlessComponentTemplate.tsx'))
  throw Error('Childless Component template not found at src/lib/templates/ChildlessComponentTemplate.tsx')
if (!existsSync('src/lib/templates/ChildlessStoryTemplate.tsx'))
  throw Error('Childless Story template not found at src/lib/templates/ChildlessStoryTemplate.tsx')
if (!existsSync('src/lib/templates/InputStoryTemplate.tsx'))
  throw Error('Input Story template not found at src/lib/templates/InputStoryTemplate.tsx')
if (!existsSync('src/lib/hooks')) throw Error('Hooks folder not found at src/lib/hooks')

const componentTemplate = readFileSync('src/lib/templates/ComponentTemplate.tsx', 'utf8')
const storyTemplate = readFileSync('src/lib/templates/StoryTemplate.tsx', 'utf8')
const childlessComponentTemplate = readFileSync('src/lib/templates/ChildlessComponentTemplate.tsx', 'utf8')
const childlessStoryTemplate = readFileSync('src/lib/templates/ChildlessStoryTemplate.tsx', 'utf8')
const inputStoryTemplate = readFileSync('src/lib/templates/InputStoryTemplate.tsx', 'utf8')

if (!existsSync('src/lib/components')) mkdirSync('src/lib/components')
let componentIndex = ``
function writeComponent(tag) {
  const componentName = tag.charAt(0).toUpperCase() + tag.slice(1)
  const component = componentTemplate
    .replace(/COMPONENT_NAME/g, componentName)
    .replace(/TAG/g, tag)
    .replace('//@ts-nocheck\n', '')
  writeFileSync(`src/lib/components/${componentName}.tsx`, component)
  componentIndex += `export { default as ${componentName} } from './${componentName}'\n`
}

function writeChildlessComponent(tag) {
  const componentName = tag.charAt(0).toUpperCase() + tag.slice(1)
  const component = childlessComponentTemplate
    .replace(/COMPONENT_NAME/g, componentName)
    .replace(/TAG/g, tag)
    .replace('//@ts-nocheck\n', '')
  writeFileSync(`src/lib/components/${componentName}.tsx`, component)
  componentIndex += `export { default as ${componentName} } from './${componentName}'\n`
}

function writeChildlessStory(tag) {
  const componentName = tag.charAt(0).toUpperCase() + tag.slice(1)
  const story = childlessStoryTemplate
    .replace(/COMPONENT_NAME/g, componentName)
    .replace(/TAG/g, tag)
    .replace('//@ts-nocheck\n', '')
  writeFileSync(`src/lib/components/${componentName}.stories.tsx`, story)
  // componentIndex += `export { default as ${componentName} } from './${componentName}'\n`
}

function writeStory(tag) {
  const componentName = tag.charAt(0).toUpperCase() + tag.slice(1)
  const story = storyTemplate.replace(/COMPONENT_NAME/g, componentName).replace('//@ts-nocheck\n', '')
  writeFileSync(`src/lib/components/${componentName}.stories.tsx`, story)
}

function writeInputStory(tag = 'input') {
  const componentName = tag.charAt(0).toUpperCase() + tag.slice(1)
  const story = inputStoryTemplate.replace(/COMPONENT_NAME/g, componentName).replace('//@ts-nocheck\n', '')
  writeFileSync(`src/lib/components/${componentName}.stories.tsx`, story)
}

function writeIndex() {
  const hookDir = readdirSync('src/lib/hooks')
  const lines = []
  let index = ``
  hookDir.forEach((hook) => {
    if (hook !== 'index.ts') {
      if (hook.split('.').length > 2) return
      const hookName = hook.split('.')[0]
      lines.push(`export { default as ${hookName} } from './hooks/${hookName}';\n`)
      // index += `export { default as ${hookName} } from './hooks/${hookName}'\n`
    }
  })
  ;[...htmlAndSvgTags, ...childless].forEach((tag) => {
    const componentName = tag.charAt(0).toUpperCase() + tag.slice(1)
    lines.push(`export { default as ${componentName} } from './components/${componentName}';\n`)
  })
  const body = lines.join('')
  writeFileSync(`src/lib/index.ts`, body)
}

function writeComponentIndex() {
  writeFileSync(`src/lib/components/index.ts`, componentIndex)
}

htmlAndSvgTags.forEach((tag) => {
  writeComponent(tag)
  writeStory(tag)
})
childless.forEach((tag) => {
  writeChildlessComponent(tag)
  writeChildlessStory(tag)
})
// writeC()
writeInputStory()
writeComponentIndex()
writeIndex()
