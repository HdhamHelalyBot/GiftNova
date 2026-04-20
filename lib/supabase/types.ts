export interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  icon: string | null
  color: string | null
  product_count: number
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  category_id: string
  name: string
  slug: string
  description: string | null
  price: number
  original_price: number | null
  currency: string
  image_url: string | null
  color: string | null
  in_stock: boolean
  featured: boolean
  created_at: string
  updated_at: string
  category?: Category
}
