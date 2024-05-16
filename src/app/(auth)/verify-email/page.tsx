import React from 'react'

interface PageProps {
    searchParams: {
      [key: string]: string | string[] | undefined
    }
}

const VerifyEmailPage = ({ searchParams }: PageProps) => {
    const token = searchParams.token
    const toEmail = searchParams.to
    
    return (
        <div>page</div>
    )
}

export default VerifyEmailPage