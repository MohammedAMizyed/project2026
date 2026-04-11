export interface BlogsResponse {
  status: boolean
  message: string
  data: Data
  guard: null
  errors: null
  response_code: number
  request_body: RequestBody
}

export interface Data {
  helpers: null
  items: Items
  guard: null
}

export interface Items {
  data: Datum[]
  links: Links
  meta: Meta
}

export interface Datum {
  id: string
  title_ar: string
  title_en: string
  title: string
  short_description_ar: string
  short_description_en: string
  short_description: string
  content_ar: string
  content_en: string
  content: string
  publish_date: Date
  logo: string
  is_active: string
  created_at: Date
  updated_at: Date
  deleted_at: null
  tags: Tag[]
}

export interface Tag {
  id: number
  name: string
  slug: string
  color: null
  created_at: Date
  updated_at: Date
  pivot: Pivot
}

export interface Pivot {
  taggable_type: TaggableType
  taggable_id: number
  tag_id: number
}

export type TaggableType = "App\\Models\\Blog";

export interface Links {
  first: string
  last: string
  prev: null
  next: string
}

export interface Meta {
  current_page: number
  from: number
  last_page: number
  links: Link[]
  path: string
  per_page: number
  to: number
  total: number
}

export interface Link {
  url: null | string
  label: string
  active: boolean
}

export interface RequestBody {
  per_page: number
  page: number
  sort_direction: string
  date_from: Date
  date_to: Date
  name: null
  dateFrom: Date
  dateTo: Date
  sortDirection: string
}
