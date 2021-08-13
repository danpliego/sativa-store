import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
// import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink } from "./navigation.module.css"

export function Navigation({ className }) {
  // const {
  //   allShopifyProduct: { productTypes },
  // } = useStaticQuery(graphql`
  //   query {
  //     allShopifyProduct {
  //       productTypes: distinct(field: productType)
  //     }
  //   }
  // `)

  return (
    <nav className={[navStyle, className].join(" ")}>
      <div className="d-none d-lg-flex">
        <Link
          key="All"
          className={navLink}
          to="/"
          activeClassName={activeLink}
        >
          Inicio
        </Link>
      </div>
      <Link
        key="All"
        className={navLink}
        to="/search/?s=BEST_SELLING"
        activeClassName={activeLink}
      >
        Tienda
      </Link>
      <div className="d-none d-lg-flex">
        <a 
          className={navLink}
          activeClassName={activeLink}
          href="https://www.pachefest.com"
          target="_blank"
          rel="noreferrer"
        >
          Pachefest
        </a>
      </div>
      {/* {productTypes.map((name) => (
        <Link
          key={name}
          className={navLink}
          to={`/products/${slugify(name)}`}
          activeClassName={activeLink}
        >
          {name}
        </Link>
      ))} */}
    </nav>
  )
}
