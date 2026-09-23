import { useEffect, useState } from 'react'

export function StudentsPage() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/students')
        .then(response => response.json())
        .then(data => setStudents(data.students))
    }, [])


    return (
        <div>
            <ul>
                {students.map(student => {
                    return <li key={student.id}>{student.name}</li>
                })}
            </ul>
        </div>
    )
}
