import { useEffect, useState } from "react"

const useAllInstructors = () =>{
    const [allInstructors, setAllInstructors] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/all-instructors')
        .then(res => res.json())
        .then(data => {
            setAllInstructors(data)
            setLoading(false)
        })
    }, [])
    return [allInstructors, loading]
}

export default useAllInstructors