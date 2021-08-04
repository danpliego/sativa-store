import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
import { Header } from "./header"
import { Footer } from "./footer"
import { Seo } from "./seo"
import 'bootstrap/dist/css/bootstrap.min.css';

export function Layout({ children }) {
  return (
    <div>
      <Seo />
      <SkipNavLink />
      <Header />
      <SkipNavContent>{children}</SkipNavContent>
      <Footer />
    </div>
  )
}
