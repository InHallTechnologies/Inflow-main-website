import React from "react";
import Header from "../../components/header/header.component";
import Navigation from "../../components/navigation/navigation.components";
import Services from "../../components/services/services.component";
import OurCustomers from "../../components/our-customers/our-customers.components";
import ContactUs from "../../components/contact-us/contact-us.components";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Services />
        <OurCustomers />
        <ContactUs />
      </div>
    );
  }
}

export default HomePage;
