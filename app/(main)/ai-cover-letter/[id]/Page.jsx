import React from 'react'


export default async function CoverLetterPage ({params})  {
    const {id} = await params;
  return (
    <div>
<h1>Cover letter :{id}</h1>
    </div>
  )
}


