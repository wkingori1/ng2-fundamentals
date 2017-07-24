export interface IEvent {
  id: number
  name: string
  date: Date
  time: string
  price: number
  imageUrl: string
  //`?` denotes that this property can be null
  location?: {
    address: string
    city: string
    country: string
  }
  //`?` denotes that this property can be null
  onlineUrl?: string
  sessions: ISession[]
}

export interface ISession {
  id: number
  name: string
  presenter: string
  duration: number
  level: string
  abstract: string
  voters: any[]
}
