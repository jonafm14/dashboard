import { useQuery } from 'react-query'
import { fetchDataApi } from './useService'

export const usePagedQuery = (key, baseUrl, pagination) => {
  return useQuery(
    [key, pagination],
    () => fetchDataApi(
      baseUrl,
      pagination.current - 1,
      pagination.pageSize,
      pagination.sortField,
      pagination.sortOrder
    ),
    { keepPreviousData: true }
  )
}

export default usePagedQuery
