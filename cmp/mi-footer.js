class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Ariadna Aparicio Moreno.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
