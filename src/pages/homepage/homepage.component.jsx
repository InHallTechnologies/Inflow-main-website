import React, { createRef, useRef } from "react";
import Header from "../../components/header/header.component";
import Navigation from "../../components/navigation/navigation.components";
import Services from "../../components/services/services.component";
import OurCustomers from "../../components/our-customers/our-customers.components";
import ContactUs from "../../components/contact-us/contact-us.components";
import OurWork from "../../components/our-work-container/our-work.component";
import Reviews from "../../components/reviews/reviews.components";
import TrustedBy from "../../components/trusted-by/trusted-by.components";

class HomePage extends React.Component {
  constructor() {
    super();

    const Header = createRef(null);
    const Services = createRef(null);
    const Customers = createRef(null);
    const ContactUs = createRef(null);

    this.state = {
      contactUs: ContactUs,
      services: Services,
      header: Header,
      customers: Customers,
    };
  }

  render() {
    return (
      <div>
        <Navigation
          contactUs={this.state.contactUs}
          header={this.state.header}
          services={this.state.services}
          customers={this.state.customers}
        />
        <Header
          reference={this.state.header}
          contactUs={this.state.contactUs}
        />
        <Services
          reference={this.state.services}
          contactUs={this.state.contactUs}
        />
        <OurWork />

        {/* <Reviews /> */}

        {/* <OurCustomers reference={this.state.customers} /> */}
        <TrustedBy />
        <ContactUs reference={this.state.contactUs} />
      </div>
    );
  }
}

export default HomePage;
