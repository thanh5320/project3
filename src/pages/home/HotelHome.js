import React, { Component } from 'react';
import styles from './HotelHome.module.css';


export default class HotelHome extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className={styles.main}>
        <img className={styles.img} src={'https://'+this.props.value.imgs[0]}></img>
        <p className={styles.name}><b>{this.props.value.name}</b></p>
        <div className={styles.footer}>
        <span>{this.props.value.address}</span>
        <span>{this.props.value.reviewScore.score}</span>
        <i className="fa fa-star" style={{color: 'gold'}} aria-hidden="true"></i>
        </div>
      </div>
    )
  };
}

