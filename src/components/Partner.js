import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { Component } from "react";
import p1 from "../assets/1-md.png";
import p2 from "../assets/4-md.png";
import p3 from "../assets/5-md.png";
import p6 from "../assets/9-xs.png";
import p4 from "../assets/15-xs.png";
import p5 from "../assets/12-xs.png";

class Partner extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <div className="py-7">
        <h1
          className="text-light"
          style={{ textAlign: "center", marginBottom: 100 }}
        >
          Our Partners
        </h1>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={2000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="container"
        >
          <img src={p1} style={{ padding: 20 }} />
          <img src={p2} style={{ padding: 20 }} />
          <img src={p3} style={{ padding: 20 }} />
          <img src={p4} style={{ padding: 20 }} />
          <img src={p5} style={{ padding: 20 }} />
          <img src={p6} style={{ padding: 20 }} />
        </Carousel>
        ;
      </div>
    );
  }
}

export default Partner;
