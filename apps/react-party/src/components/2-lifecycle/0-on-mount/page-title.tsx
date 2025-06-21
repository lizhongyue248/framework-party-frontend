import { useEffect, useState } from "react"

export const PageTitle = () => {
  const [pageTitle, setPageTitle] = useState("")

  useEffect(() => {
    setPageTitle(document.title)
  }, [])

  return <p>Page title: {pageTitle}</p>
}
