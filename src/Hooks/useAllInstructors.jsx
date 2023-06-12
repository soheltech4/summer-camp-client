import { useEffect, useState } from "react"

const useAllInstructors = () =>{
    const [allInstructors, setAllInstructors] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://martial-mastery-server.vercel.app/all-instructors')
        .then(res => res.json())
        .then(data => {
            setAllInstructors(data)
            setLoading(false)
        })
    }, [])
    return [allInstructors, loading]
}

export default useAllInstructors