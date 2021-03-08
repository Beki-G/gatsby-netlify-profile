import * as React from "react"
import { Link } from "gatsby"
import Search from "./search"
const searchIndices = [{ name: `Pages`, title: `Pages` }]

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="w-4/5 mx-auto min-h-9/10 p-3 rounded-md text-aquamarine" data-is-root-path={isRootPath}>
      <div className="md:w-11/12 mx-auto mb-4 flex justify-between mt-8  bg-eagleGreen p-4 rounded-md">
        <header className="text-2xl font-semibold align-text-top tracking-wide">{header}</header>
        <Search indices={searchIndices} />
      </div>

      <main>{children}</main>
      {/* <footer className="w-11/12 mx-auto mb-4 ">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout
