import React, { useState } from 'react'

const MailWithHtml = () => {
  const [subject, setSubject] = useState('Hi Amruth')
  const [body, setBody] = useState('<h1>Hello!</h1><p>This is an example HTML email body.</p>')

  const updateSubject = (e) => {
    setSubject(e.target.value)
  }

  const updateBody = (e) => {
    setBody(e.target.value) 
  }

  return (
    <div>
      <input value={subject} onChange={updateSubject} />
      <textarea value={body} onChange={updateBody}></textarea>
      <a href={`mailto:amruthgowd91200@gmail.com?subject=${subject}&body=${body}`}>
        Send Email
      </a>
    </div>
  )
}

export default MailWithHtml