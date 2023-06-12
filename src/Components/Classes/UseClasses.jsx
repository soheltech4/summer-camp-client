import { useEffect, useState } from "react"

const UseClasses = () =>{
    const [classes, setClasses] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(classes)
    useEffect(()=>{
        fetch('https://martial-mastery-server.vercel.app/classes')
        .then(res => res.json())
        .then(data => {
            setClasses(data)
            setLoading(false)
        })
    }, [])
    return [classes, loading]
}

export default UseClasses