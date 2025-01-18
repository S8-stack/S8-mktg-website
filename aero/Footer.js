import { AeroElement } from "./AeroElement.js";



const CONTENT = `
<div class="aero-footer-row">
  <div class="aero-footer-column">
    <h4 class="marketing-site-footer-name">Stay tuned!</h4>
    <p>We push news from time to time, follow us on:</p>
    <div class="aero-footer-social">
          <a href="https://www.linkedin.com/company/alphaventor"><img src="aero/icons/LinkedIn-icon.svg"></a>
          <a href="https://twitter.com/alphaventor256"><img src="aero/icons/Twitter-icon.svg"></a>
  </div>
  </div>
  <div class="aero-footer-column">
     <h4 class="marketing-site-footer-title">Contact Info</h4>
    <div class="marketing-site-footer-block">
      <p>20-22 place Charles de Gaulle, 78100 Saint Germain en Laye, France</p>
    </div>
    <div class="marketing-site-footer-block">
      <p>contact@octofan.com</p>
    </div>
  </div>
</div>
<div class="aero-footer-bottom">
<a href="">Website Terms & Conditions</a>
<a href="">Cookies Policy</a>
<a href="">Disclaimer</a>
</div>`;


export class Footer extends AeroElement {

  /** @type{HTMLElement} */
  footerNode;


  props;

  constructor(props) {
    super();
    this.props = props;
  }

  /**
    * 
    * @param {WebPage} page 
    * @returns {HTMLElement}
    */
  build(page) {

    /* CSS requirements */
    page.css_requireStylesheet("aero/Footer.css");

    /* build nodes */
    this.footerNode = document.createElement('footer');
    this.footerNode.classList.add('aero-footer');
    this.footerNode.innerHTML = CONTENT;
    //this.draw();


    /* logo node */
    const logoNode = document.createElement('div');
    this.footerNode.classList.add('aero-footer');
    this.footerNode.innerHTML = CONTENT;

    /* return wrapper node */
    return this.footerNode;
  }

  /**
    * 
    * @param {WebPage} page 
    */
  render(page) {

  }
}


