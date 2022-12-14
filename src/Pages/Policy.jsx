import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../CSS/policy.css";
import { Link } from "react-router-dom";

function  Policy() {
  return (
    <div>
      <Header />
      <div className="ppContent">
        <h2 className="mainHeading mb-4 align-center">Privacy Policy</h2>
        <p className="align-center">KFC CORPORATION PRIVACY POLICY — YOUR PRIVACY RIGHTS</p>
        <p className="align-center">EFFECTIVE DATE: JUNE 9, 2014</p>
        <h6>THIS PRIVACY POLICY APPLIES TO THE SITES</h6>
        <p>This Policy describes how we treat personal information both online and offline. This includes on our websites. It also includes in phone or email interactions you have with us.</p>
        <h6>WE COLLECT INFORMATION FROM AND ABOUT YOU</h6>
        <li><p>Contact information. For example, we might collect your name and street address. We might also collect your phone number or email address.</p></li>
        <li><p>Payment and billing information. For example, we collect your credit card number and zip code when you buy one of our products.</p></li>
        <li><p>Information you submit or post. If you post content, apply for a job, or respond to a survey, we will collect the information you provide to us.</p></li>
        <li><p>Demographic information. We may collect information about our services you like or products you buy. We might collect this as part of a survey, for example.</p></li>
        <li><p>Other information. If you use our website, we may collect information about your computer location or the browser you're using. We might look at what site you came from, or what site you visit when you leave us.</p></li>
        <h6>WE USE INFORMATION AS DISCLOSED AND DESCRIBED HERE</h6>
        <li><p>We use information to respond to your requests or questions. For example, we might use your information to confirm your registration for a program or contest, or fulfill prizes or premiums in a promotion. We may use your friend's email address if you send them features on our site.</p></li>
        <li><p>We use information to improve our products and services. We might use your information to customize your experience with us. We may use your information to make our website and products better.</p></li>
        <li><p>We use information to look at site trends and customer interests. We may use your information to make our website and products better. We may combine information we get from you with information about you we get from third parties.</p></li>
        <li><p>We use information for security purposes. We may use information to protect our company, our customers, or our websites. For example, in the event of a breach, we may use your contact information to contact you about that incident.</p></li>
        <li><p>We use information for marketing purposes. For example, we might send you information about special promotions or offers. We might also tell you about new features or products. These might be our own offers or products, or third-party offers or products we think you might find interesting. To learn about your choices for these communications, read the choices section below.</p></li>
        <li><p>We use information to send you transactional communications. For example, we might send you emails about a purchase you made with us. We might also contact you about this policy or our website terms.</p></li>
        <li><p>We use information as otherwise permitted by law.</p></li>
        <h6>YOU HAVE CERTAIN CHOICES ABOUT HOW WE USE YOUR INFORMATION</h6>
        <li><p>You can opt out of receiving our marketing emails. To stop receiving our promotional emails, send a request to customercare@kfcpakistan.com or follow the instructions in any promotional message you get from us. It may take about ten (10) days to process your request. Don't worry! Even if you opt out of getting marketing messages, we will still be sure to send you transactional messages. For example, we may still contact you about your orders.</p></li>
        <li><p>You can control if we share information with third parties for their marketing purposes. To opt out of having us share your information with third parties for their promotional purposes, <Link>click here</Link>.</p></li>
        <h6>YOU CAN GET YOUR ACCOUNT INFORMATION UPDATED OR DELETED</h6>
        <li><p>Any information that you want us to change or delete, for instance, your email address, can be requested by you. These requested changes will be made only after your consent, and we will update you regarding them. For any such requests you can always contact us on our support email i.e. customercare@kfcpakistan.com.</p></li>
        <li><p>If you want to delete your Facebook social login account from KFC Web & Apps, you can remove your information by following these steps:
          <li style={{listStyle:"auto"}}>Go to your Facebook Account’s Setting & Privacy. Click “Settings”.</li>
          <li style={{listStyle:"auto"}}>Look for “Apps and Websites” and you will see all of the apps and websites you linked with your Facebook.</li>
          <li style={{listStyle:"auto"}}>Search and Click “KFC” in the search bar.</li>
          <li style={{listStyle:"auto"}}>Scroll and click “Remove”.</li>
          <li style={{listStyle:"auto"}}>Congratulations, you have successfully removed your app activities and data from the KFC platform.</li>
        </p></li>
        <li><p>Once your account has been deleted after your approval, you will lose all the information associated with that account e.g. Addresses, Past Orders.</p></li>
        <h6>THESE SITES ARE NOT INTENDED FOR CHILDREN</h6>
        <li><p>Our sites are meant for adults. We do not knowingly collect personally identifiable information from children under 13 without permission from a parent or guardian. If you are a parent or legal guardian and think your child under 13 has given us information, you can email us here. You can also write to us at the address listed at the end of this policy. Please mark your inquiries "COPPA Information Request."</p></li>
        <li><p>Parents, you can also learn more about how to protect children's privacy online here.</p></li>
        <h6>WHAT WE WILL DO IF THERE IS AN UPDATE TO THIS POLICY</h6>
        <p>From time to time we may change our privacy practices. We will notify you of any material changes to this policy as required by law. We will also post an updated copy on our website. Please check our site periodically for updates</p>
      </div>
      <Footer />
    </div>
  );
}

export default Policy;
