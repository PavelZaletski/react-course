import React from 'react';

export default class TopContainer extends React.Component {
  render() {
    return (
            <div className="top-container" >
                <div className="content-wrapper">
                    <div className="content">
                        <div className="title">Netflixroulette</div>
                        {this.props.children}
                    </div>
                </div>
            </div>
    );
  }
}
