import React, {Component} from 'react';

class SubRatingTotal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var rating = this.props.rating;
    return (
      <div>
        <span>{rating.category}</span>
        <span>LIIIINE</span>
        <span>{rating.rating}</span>
      </div>
    )
  }
}

export default SubRatingTotal;