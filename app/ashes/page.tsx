import React from 'react'
import { GetServerSideProps } from 'next'

interface Props {

}

//fetch data from api

export default async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/12')
    const data = await res.json()
    console.log(data)
    return (
        <div>
            ashedComponent
        </div>
    )
}