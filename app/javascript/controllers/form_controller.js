import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  static targets = ["button", "form"]

  display() {
    console.log("coucou")
    this.formTarget.classList.remove("d-none")
    this.buttonTarget.classList.add("d-none")
  }
}
