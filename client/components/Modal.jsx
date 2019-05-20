/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import GridModal from './GridModal.jsx';
import SlideshowModal from './SlideshowModal.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: '',
      currSlide: 0,
    };

    const { images } = this.props;
    this.n = images.length - 1;

    this.changeView = this.changeView.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount() {
    const { view, currSlide } = this.props;
    this.setState({
      view,
      currSlide,
    });
  }

  changeView() {
    let { view } = this.state;
    view = view === 'grid' ? 'slideshow' : 'grid';
    this.setState({
      view,
    });
  }

  prevSlide() {
    const { currSlide } = this.state;
    if (currSlide === 0) {
      this.setState({
        currSlide: this.n,
      });
    } else {
      const prevSlide = currSlide - 1;
      this.setState({
        currSlide: prevSlide,
      });
    }
  }

  nextSlide() {
    const { currSlide } = this.state;
    const nextSlide = (currSlide + 1) % (this.n + 1);
    this.setState({
      currSlide: nextSlide,
    });
  }

  render() {
    const { view, currSlide } = this.state;
    const { name, images } = this.props;
    return (
      <div className="modal" id="gallery-modal">
        {view === 'slideshow' && (
          <SlideshowModal
            name={name}
            images={images}
            changeView={this.changeView}
            currSlide={currSlide}
            prevSlide={this.prevSlide}
            nextSlide={this.nextSlide}
          />
        )}
        {view === 'grid' && <GridModal name={name} changeView={this.changeView} />}
      </div>
    );
  }
}

Modal.propTypes = {
  name: PropTypes.string,
  view: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  currSlide: PropTypes.number,
};

export default Modal;
