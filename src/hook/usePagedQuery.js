import { useQuery } from 'react-query'

export const usePagedQuery = (key, serviceFunction, pagination) => {
  return useQuery(
    [key, pagination],
    () => serviceFunction(
      pagination.current - 1,
      pagination.pageSize,
      pagination.sortField,
      pagination.sortOrder
    ),
    { keepPreviousData: true }
  )
}

export default usePagedQuery
