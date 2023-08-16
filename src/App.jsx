import { Suspense } from 'react'
import { Routers } from './routers'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={'Conectando la app...'}>
        <Routers />
      </Suspense>
    </QueryClientProvider>
  )
}
