type ArticleMetadata = {
  title: string
  description: string
  tags?: string[]
  date?: Date
  growthStage?: 'evergreen' | 'budding' | 'seedling'
}

type MdxFrontmatter = {
  meta: ArticleMetadata
}

type ArticleData = {
  path: string
  slug: string
  meta?: ArticleMetadata
}

type Social = {
  label: string
  url: string
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
  let tableOfContents: () => any
  export {tableOfContents}
}

declare module '@mdx-js/react' {
  import * as React from 'react'
  type ComponentType =
    | 'a'
    | 'blockquote'
    | 'code'
    | 'del'
    | 'em'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'hr'
    | 'img'
    | 'inlineCode'
    | 'li'
    | 'ol'
    | 'p'
    | 'pre'
    | 'strong'
    | 'sup'
    | 'table'
    | 'td'
    | 'thematicBreak'
    | 'tr'
    | 'ul'
  export type Components = {
    [key in ComponentType]?: React.ComponentType<any>
  }
  export interface MDXProviderProps {
    children: React.ReactNode
    components: Components
  }
  export class MDXProvider extends React.Component<MDXProviderProps> {}
}
