class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Fernando Izazaga Martínez.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
