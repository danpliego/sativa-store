import * as React from "react"
import Cupid from "../images/home/cupid.png"
import { EmailListForm } from "./suscribe-form"

export function Suscribe() {

  return (
    <div className="section section-gradient">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h1 className="display text-shadow text-light">
              Suscríbete al newsletter
            </h1>
            <p>Enterarte de todo lo nuevo que está por llegar y recibir acceso a eventos y lanzamientos exclusivos</p>
            <div className="mt-4">
              <EmailListForm />
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img src={Cupid} className="img-fluid mx-auto" width="550" />
          </div>
        </div>
      </div>
    </div>
  )
}