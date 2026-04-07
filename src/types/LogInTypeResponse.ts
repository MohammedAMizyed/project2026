export interface LogInTypeResponse {
  status: boolean
  message: string
  data: Data
  guard: null
  errors: null
  response_code: number
  request_body: RequestBody
}

export interface Data {
  token: string
  item: Item
  ip: string
  guard: null
}

export interface Item {
  id: string
  email: string
  mobile: string
  passport: string
  first_name: string
  last_name: string
  full_name: string
  deleted_at: null
}

export interface RequestBody {
  mobile: string
  password: string
}
