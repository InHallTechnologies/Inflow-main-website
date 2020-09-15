import React, { createRef } from "react";
import "./our-work.styles.scss";

class OurWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: [
        "https://firebasestorage.googleapis.com/v0/b/inflow-logistiks.appspot.com/o/1.jpeg?alt=media&token=503d3981-1e6a-43c8-bcfb-ec7ca7ac5045",
        "https://firebasestorage.googleapis.com/v0/b/inflow-logistiks.appspot.com/o/2.jpeg?alt=media&token=1df4ab69-45c4-4393-9e2c-bbc50f2e1d96",
        "https://firebasestorage.googleapis.com/v0/b/inflow-logistiks.appspot.com/o/3.jpeg?alt=media&token=a2984cf9-a480-41c4-b75b-c82958fcf2e1",
        "https://firebasestorage.googleapis.com/v0/b/inflow-logistiks.appspot.com/o/4.jpeg?alt=media&token=ab0df2e0-c643-4b7a-b7f2-de840b9eeebe",
        "https://firebasestorage.googleapis.com/v0/b/inflow-logistiks.appspot.com/o/5.jpeg?alt=media&token=49712e15-8ec1-4171-afb1-47459457e998",
        "https://firebasestorage.googleapis.com/v0/b/inflow-logistiks.appspot.com/o/6.jpeg?alt=media&token=aa44f477-082c-42c1-83cc-5682240e22b0",
        "https://firebasestorage.googleapis.com/v0/b/inflow-logistiks.appspot.com/o/7.jpeg?alt=media&token=dece40c6-ec09-4ac8-ac27-07dd21a298a7",
        "https://firebasestorage.googleapis.com/v0/b/inflow-logistiks.appspot.com/o/8.jpeg?alt=media&token=1f9b6152-2fe3-4f35-b4fd-5946383a3dbe",
      ],
    };

    this.caroselRef = createRef(null);
    this.caroselInterval = null;
  }

  componentDidMount() {
    var currentIndex = 0;
    const MAX_INDEX = this.state.imageList.length;

    this.caroselInterval = setInterval(() => {
      this.caroselRef.current.scrollLeft += 320;
      currentIndex++;
      if (currentIndex >= MAX_INDEX) {
        this.caroselRef.current.scrollLeft -= MAX_INDEX * 320;
        currentIndex = 0;
      }
    }, 2000);
  }

  render() {
    return (
      <div className="our-work-container">
        <h1 className="section-title">Our Work</h1>
        <div className="our-work-container" ref={this.caroselRef}>
          {this.state.imageList.map((item) => {
            return <img className="our-work-image" src={item} alt="our-work" />;
          })}
        </div>
      </div>
    );
  }
}

export default OurWork;
