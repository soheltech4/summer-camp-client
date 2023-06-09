import { useEffect, useState } from "react"

const UseAllClasses = () =>{
    const [allClasses, setAllClasses] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/all-classes')
        .then(res => res.json())
        .then(data => {
            setAllClasses(data)
            setLoading(false)
        })
    }, [])
    return [allClasses, loading]
}

export default UseAllClasses