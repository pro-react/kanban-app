import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
  render() {
    let cards = this.props.cards.map((card) => {
      return <Card key={card.id}
                   id={card.id}
                   title={card.title}
                   description={card.description}
                   color={card.color}
                   tasks={card.tasks} />
    });

    return (
      <div className="list">
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    );
  }
};

export default List;
