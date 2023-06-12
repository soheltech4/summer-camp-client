import { useEffect, useState } from "react"

const UseAllClasses = () =>{
    const [allClasses, setAllClasses] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://martial-mastery-server.vercel.app/all-classes')
        .then(res => res.json())
        .then(data => {
            setAllClasses(data)
            setLoading(false)
        })
    }, [])
    return [allClasses, loading]
}

export default UseAllClasses