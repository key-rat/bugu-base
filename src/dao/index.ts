export interface IBuguRoutesData {
  sort: number
  name?: string
  path: string
  redirect?: string
  component: string
  label: string
  icon?: string
  children?: Array<IBuguRoutesData>
  hidden?: boolean
}
