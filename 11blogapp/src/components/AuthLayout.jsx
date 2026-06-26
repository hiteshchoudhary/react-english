import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const shouldRedirect = authentication ? !authStatus : authStatus

    if (shouldRedirect) {
      navigate(authentication ? '/login' : '/')
    }

    setLoader(false)
  }, [authStatus, authentication, navigate])

  if (loader) {
    return <div className="p-6 text-center text-gray-600">Checking access...</div>
  }

  return <>{children}</>
}

export default Protected