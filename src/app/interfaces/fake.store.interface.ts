export interface FakeStoreItem {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: FakeStoreItemRating
}

interface FakeStoreItemRating {
  rate: number
  count: number
}
