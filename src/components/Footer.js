// src/components/Footer.js
import React from 'react';
import arrow from '../assets/images/right-arrow.png';
const Footer = () => {
// A simple function to prevent the form from reloading the page on submit
const handleNewsletterSubmit = (event) => {
event.preventDefault();
alert('Thank you for subscribing!');
// Here you would typically handle the form submission
};
return (
<footer className="footer-section">
{/* <div className="footer-grid"> */}
  <div className="container">
    <div className="footer_footerContent ">
      <div className="footer_contactMail enquiries-block">
        <p >FOR ALL ENQUIRIES</p>
        {/* <a href="mailto:hello@tonic.co" className="footer-email">hello@tonic.co</a> */}
        <a href="mailto:hello@tonic.co" >hello@tonic.co</a>
      </div>


      <div className='connect-block'>
        <p>LET'S CONNECT</p>
        

        <div class="footer_footerSocial">
        <a target="_blank" aria-label="Know more about tonic in behance" rel="noopener noreferrer" href="https://www.behance.net/cgibytonic"><svg width="32" height="32" viewBox="0 0 32 32" fill="#939598" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_7310_34860)"><path d="M16.484 19.9293C16.484 17.4653 15.312 15.644 12.8907 14.9613C14.6573 14.12 15.5787 12.8453 15.5787 10.8627C15.5787 6.95333 12.656 6 9.284 6H0V25.628H9.544C13.1227 25.628 16.484 23.9173 16.484 19.9293ZM4.328 9.35067H8.38933C9.95067 9.35067 11.356 9.788 11.356 11.5933C11.356 13.26 10.2627 13.9307 8.716 13.9307H4.328V9.35067ZM4.32667 22.2947V16.8893H9.044C10.9493 16.8893 12.1547 17.6813 12.1547 19.692C12.1547 21.6747 10.716 22.2947 8.95467 22.2947H4.32667ZM25.0613 26C28.4667 26 30.672 24.4707 31.7333 21.22H28.2773C27.9053 22.4333 26.372 23.0747 25.1827 23.0747C22.888 23.0747 21.6827 21.7347 21.6827 19.4573H31.9667C32.292 14.9 29.7533 11.016 25.06 11.016C20.7147 11.016 17.7653 14.272 17.7653 18.5373C17.7653 22.964 20.56 26 25.0613 26ZM24.9387 13.9653C26.9053 13.9653 27.8947 15.1173 28.06 17.0013H21.688C21.8173 15.1333 23.0613 13.9653 24.9387 13.9653ZM20.8893 7.03067H28.8733V8.964H20.8893V7.03067Z" fill="#939598"></path></g><defs><clipPath id="clip0_7310_34860"><rect width="32" height="32" fill="#939598"></rect></clipPath></defs></svg></a>
        <a target="_blank" aria-label="Know more about tonic in instagram" rel="noopener noreferrer" href="https://www.instagram.com/tonicpost"><svg width="32" height="32" viewBox="0 0 32 32" fill="#939598" xmlns="http://www.w3.org/2000/svg"><path d="M21.4996 5H10.4999C7.47521 5 5 7.47521 5 10.4999V21.5001C5 24.524 7.47521 27 10.4999 27H21.4996C24.5243 27 26.9995 24.524 26.9995 21.5001V10.4999C26.9995 7.47521 24.5243 5 21.4996 5ZM25.1661 21.5001C25.1661 23.5213 23.5219 25.1666 21.4996 25.1666H10.4999C8.4784 25.1666 6.83338 23.5213 6.83338 21.5001V10.4999C6.83338 8.47813 8.4784 6.83338 10.4999 6.83338H21.4996C23.5219 6.83338 25.1661 8.47813 25.1661 10.4999V21.5001Z" fill="#939598"></path><path d="M21.959 11.414C22.7183 11.414 23.3339 10.7984 23.3339 10.039C23.3339 9.27966 22.7183 8.66406 21.959 8.66406C21.1996 8.66406 20.584 9.27966 20.584 10.039C20.584 10.7984 21.1996 11.414 21.959 11.414Z" fill="#939598"></path><path d="M15.9999 10.5C12.9617 10.5 10.5 12.962 10.5 15.9999C10.5 19.0366 12.9617 21.5003 15.9999 21.5003C19.0371 21.5003 21.4997 19.0366 21.4997 15.9999C21.4997 12.962 19.0371 10.5 15.9999 10.5ZM15.9999 19.6669C13.9751 19.6669 12.3334 18.0252 12.3334 15.9999C12.3334 13.9745 13.9751 12.3334 15.9999 12.3334C18.0247 12.3334 19.6664 13.9745 19.6664 15.9999C19.6664 18.0252 18.0247 19.6669 15.9999 19.6669Z" fill="#939598"></path></svg></a>
        <a target="_blank" rel="noopener noreferrer" aria-label="Know more about tonic in linkedin" href="https://www.linkedin.com/company/tonic3d"><svg width="32" height="32" viewBox="0 0 32 32" fill="#939598" xmlns="http://www.w3.org/2000/svg"><path d="M27 28V19.5762C27 15.4363 26.1087 12.2737 21.2787 12.2737C18.95 12.2737 17.3975 13.5388 16.765 14.7463H16.7075V12.6475H12.1362V28H16.9088V20.3812C16.9088 18.3687 17.2825 16.4425 19.755 16.4425C22.1988 16.4425 22.2275 18.7138 22.2275 20.4963V27.9712H27V28ZM4.37375 12.6475H9.14625V28H4.37375V12.6475ZM6.76 5C5.23625 5 4 6.23625 4 7.76C4 9.28375 5.23625 10.5487 6.76 10.5487C8.28375 10.5487 9.52 9.28375 9.52 7.76C9.52 6.23625 8.28375 5 6.76 5Z" fill="#939598"></path></svg></a>
        </div>
      </div>

      <div class="desktop newsletter-block">
        <p className="footer_mobileSpace">NEWSLETTER</p>
        <form className="footer_footerLetter">
          <input type="mail" placeholder="email address"  /> 
          <img alt="Email" loading="lazy" width="18" height="13" decoding="async" data-nimg="1"  src={arrow}></img>
          <label>Submitted</label>
          <button type="submit"> ENTER
          </button>
        </form>
      </div>
    </div>
  </div>
</footer>

);
};
export default Footer;