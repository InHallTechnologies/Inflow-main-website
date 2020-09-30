import React, { createRef } from "react";
import "./our-work.styles.scss";

class OurWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: [
        "https://firebasestorage.googleapis.com/v0/b/inflow-logistiks.appspot.com/o/1.jpeg?alt=media&token=503d3981-1e6a-43c8-bcfb-ec7ca7ac5045",
        "https://firebasestorage.googleapis.com/v0/b/inflow-logistiks.appspot.com/o/5.jpeg?alt=media&token=49712e15-8ec1-4171-afb1-47459457e998",
        "https://firebasestorage.googleapis.com/v0/b/inflow-logistiks.appspot.com/o/new1.jpg?alt=media&token=1ea1a053-7b95-47f9-9cdf-f40c3f51aed8",
        "https://firebasestorage.googleapis.com/v0/b/inflow-logistiks.appspot.com/o/new2.jpg?alt=media&token=3c045c09-6e4f-4f99-9d09-9ab292874c50",
        "https://firebasestorage.googleapis.com/v0/b/inflow-logistiks.appspot.com/o/new3.jpg?alt=media&token=cae022f4-d3f5-4f0f-a3cf-b76e08e93f29",
        "https://firebasestorage.googleapis.com/v0/b/inflow-logistiks.appspot.com/o/new4.jpg?alt=media&token=a9de39b8-aaa5-47d7-a9ab-0fd58787417a",
        "https://firebasestorage.googleapis.com/v0/b/inflow-logistiks.appspot.com/o/new5.jpg?alt=media&token=93eeed26-4abc-454e-a35a-c487a3166425",
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
