import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
const useSelectClass = () => {
    const {user} = useContext(AuthContext)
    const { refetch, data : select = [] } = useQuery({
        queryKey: ['select', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://martial-mastery-server.vercel.app/select?email=${user?.email}`)
            return res.json()
        }, 
      })
      return [select, refetch]
}

export default useSelectClass