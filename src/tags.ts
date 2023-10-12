/**
 * List of element tagNames and types
 */

export const tags = [
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
    'math',
    'menu',
    'menuitem',
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

    'rb',
    'rp',
    'rt',
    'rtc',
    'ruby',

    's',
    'samp',
    'script',
    'search',
    'section',
    'select',
    'slot',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'svg',

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
    'track',

    'u',
    'ul',

    'var',
    'video',

    'wbr'
  ] as const;

export const voidTags = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'menuitem',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
] as const;

export const tagList = {
  tags,
  voidTags,
} as const;

export type Tag = typeof tags[number];
export type VoidTag = typeof voidTags[number];

export const tagTypes = {
  a: HTMLAnchorElement,
  abbr: HTMLElement,
  address: HTMLElement,
  area: HTMLAreaElement,
  article: HTMLElement,
  aside: HTMLElement,
  audio: HTMLAudioElement,

  b: HTMLElement,
  base: HTMLBaseElement,
  bdi: HTMLElement,
  bdo: HTMLElement,
  blockquote: HTMLQuoteElement,
  body: HTMLBodyElement,
  br: HTMLBRElement,
  button: HTMLButtonElement,

  canvas: HTMLCanvasElement,
  caption: HTMLTableCaptionElement,
  cite: HTMLElement,
  code: HTMLElement,
  col: HTMLTableColElement,
  colgroup: HTMLElement,

  data: HTMLDataElement,
  datalist: HTMLDataListElement,
  dd: HTMLElement,
  del: HTMLElement,
  details: HTMLDetailsElement,
  dfn: HTMLElement,
  dialog: HTMLDialogElement,
  div: HTMLDivElement,
  dl: HTMLDListElement,
  dt: HTMLElement,

  em: HTMLElement,
  embed: HTMLEmbedElement,

  fieldset: HTMLFieldSetElement,
  figcaption: HTMLElement,
  figure: HTMLElement,
  footer: HTMLElement,
  form: HTMLFormElement,

  h1: HTMLHeadingElement,
  h2: HTMLHeadingElement,
  h3: HTMLHeadingElement,
  h4: HTMLHeadingElement,
  h5: HTMLHeadingElement,
  h6: HTMLHeadingElement,
  head: HTMLHeadElement,
  header: HTMLElement,
  hgroup: HTMLElement,
  hr: HTMLHRElement,
  html: HTMLHtmlElement,

  i: HTMLElement,
  iframe: HTMLIFrameElement,
  img: HTMLImageElement,
  input: HTMLInputElement,
  ins: HTMLElement,

  kbd: HTMLElement,

  label: HTMLLabelElement,
  legend: HTMLLegendElement,
  li: HTMLLIElement,
  link: HTMLLinkElement,

  main: HTMLElement,
  map: HTMLMapElement,
  mark: HTMLElement,
  math: HTMLElement,
  menu: HTMLMenuElement,
  menuitem: HTMLElement,
  meta: HTMLMetaElement,
  meter: HTMLMeterElement,

  nav: HTMLElement,
  noscript: HTMLElement,

  object: HTMLObjectElement,
  ol: HTMLOListElement,
  optgroup: HTMLOptGroupElement,
  option: HTMLOptionElement,
  output: HTMLOutputElement,

  p: HTMLParagraphElement,
  // param: HTMLParamElement,  // <param> is deprecated
  param: HTMLElement,          // long live <param>!
  picture: HTMLPictureElement,
  pre: HTMLPreElement,
  progress: HTMLProgressElement,

  q: HTMLQuoteElement,
  rb: HTMLElement,
  rp: HTMLElement,
  rt: HTMLElement,
  rtc: HTMLElement,
  ruby: HTMLElement,

  s: HTMLElement,
  samp: HTMLElement,
  script: HTMLScriptElement,
  search: HTMLElement,
  section: HTMLElement,
  select: HTMLSelectElement,
  slot: HTMLSlotElement,
  small: HTMLElement,
  source: HTMLSourceElement,
  span: HTMLSpanElement,
  strong: HTMLElement,
  style: HTMLStyleElement,
  sub: HTMLElement,
  summary: HTMLElement,
  sup: HTMLElement,
  svg: HTMLElement,

  table: HTMLTableElement,
  tbody: HTMLTableSectionElement,
  td: HTMLTableCellElement,
  template: HTMLTemplateElement,
  textarea: HTMLTextAreaElement,
  tfoot: HTMLTableSectionElement,
  th: HTMLTableCellElement,
  thead: HTMLTableSectionElement,
  time: HTMLTimeElement,
  title: HTMLTitleElement,
  tr: HTMLTableRowElement,
  track: HTMLTrackElement,

  u: HTMLElement,
  ul: HTMLUListElement,

  'var': HTMLElement,
  video: HTMLVideoElement,

  wbr: HTMLQuoteElement

} as const;

export type TagType = {
  [T in keyof typeof tagTypes]: typeof tagTypes[T]
};

// const tagElements = [...Object.values(tagTypes)] as const;
// export type TagElement = typeof tagElements[number];

// export type TagMap<N> = [...Object.entries(tagMap)] as const;

// TODO: Add DOM types for tagNames

// export type TagType = keyof TagTypes;
//
// export type TagMethods<T, E> = {
//   [K in keyof T]: typeof E;
// }

// export const tagMethods = Object.entries(tagTypes).map((tag, type) => {
//   const elem: typeof type = document.createElement(tag);
// });

// export interface TagFuncs {
//   div: () => HTMLDivElement;
//   p: () => HTMLParagraphElement;
//   a: () => HTMLAnchorElement;
// }
//
// type Mapish = { [k: string]: boolean };
// type M = keyof Mapish;
//
// type OptionsFlags<O> = {
//   [P in keyof O]: boolean;
// };
