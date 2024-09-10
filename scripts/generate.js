// import { writeFileSync } from "fs";
const { writeFileSync, readFileSync, readdirSync, existsSync, mkdirSync } = require('fs')
const htmlAndSvgTags = [
  // HTML tags
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
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
  'embed',
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
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
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
  'source',
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
  'wbr',

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

if (!existsSync('src/lib/templates')) throw Error('Template folder not found')
if (!existsSync('src/lib/templates/ComponentTemplate.tsx'))
  throw Error('Component template not found at src/lib/templates/ComponentTemplate.tsx')
if (!existsSync('src/lib/templates/StoryTemplate.tsx'))
  throw Error('Story template not found at src/lib/templates/StoryTemplate.tsx')
if (!existsSync('src/lib/hooks')) throw Error('Hooks folder not found at src/lib/hooks')

const componentTemplate = readFileSync('src/lib/templates/ComponentTemplate.tsx', 'utf8')
const storyTemplate = readFileSync('src/lib/templates/StoryTemplate.tsx', 'utf8')

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

function writeStory(tag) {
  const componentName = tag.charAt(0).toUpperCase() + tag.slice(1)
  const story = storyTemplate.replace(/COMPONENT_NAME/g, componentName).replace('//@ts-nocheck\n', '')
  writeFileSync(`src/lib/components/${componentName}.stories.tsx`, story)
}

function writeIndex() {
  const hookDir = readdirSync('src/lib/hooks')
  const lines = []
  let index = ``
  hookDir.forEach((hook) => {
    if (hook !== 'index.ts') {
      const hookName = hook.split('.')[0]
      lines.push(`export { default as ${hookName} } from './hooks/${hookName}';\n`)
      // index += `export { default as ${hookName} } from './hooks/${hookName}'\n`
    }
  })
  htmlAndSvgTags.forEach((tag) => {
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
writeComponentIndex()
writeIndex()
