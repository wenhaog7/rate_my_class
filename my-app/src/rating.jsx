import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import { Button, Container, Header, Menu, Segment,Linking, Form,  Rating } from "semantic-ui-react";

import "./rating.css";

class Ratings extends Component {
  constructor(props){
    super(props);
    this.state = {
      Interestingness : 0,
      Difficulty : 0,
      Usefulness : 0,
      comment: '',
      time: ''
    }
    this.getInsert = this.getInsert.bind(this);
  }

  time

  handleInsert = (e) => {
    this.getInsert(this.props.cid, this.props.professor, this.props.title, 'zhesong2', this.state.time, this.state.comment,
    this.state.Difficulty, this.state.Interestingness, this.state.Usefulness);
  }




  getInsert = (cid, professor, title, uid, time, comment, diff, interest, useful) => {
    if(diff == 0){diff = 1}
    if(interest == 0){interest = 1}
    if(useful == 0){useful = 1}
    console.log('http://localhost:5000/comments/insert?cid=' + cid +
    '&professor=' + professor + '&title=' + title + '&uid=' + uid + '&time=' + time + '&comment=' + comment +
    '&diff=' + diff + '&interst=' + interest + '&useful=' + useful)
    fetch('http://localhost:5000/comments/insert?cid=' + cid +
    '&professor=' + professor + '&title=' + title + '&uid=' + uid + '&time=' + time + '&comment=' + comment +
    '&diff=' + diff + '&interst=' + interest + '&useful=' + useful)
    .then(res => alert("Rating is submitted successfully"))
    .then(res => window.location.reload())
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Container>
        <Segment inverted vertical textAlign="center">
          <Container className="content">
          <div>
          <Header inverted as="h2">
            Difficulty
          </Header>
          <Rating icon='star' defaultRating={1} maxRating={5}
                  onRate = {(e, rating) => this.setState({Difficulty: rating.rating})}/>
          <Header inverted as="h2">
            Interestingness
          </Header>
          <Rating icon='star' defaultRating={1} maxRating={5}
                  onRate = {(e, rating) => this.setState({Interestingness: rating.rating})}/>
          <Header inverted as="h2">
            Usefulness
          </Header>
          <Rating icon='star' defaultRating={1} maxRating={5}
                  onRate = {(e, rating) => this.setState({Usefulness: rating.rating})}/>
          </div>
          <br/><br/><br/>
          <div>
            <Form>
              <p>
              <Form class="ui form"><textarea placeholder="Comment" style={{ width:"600px" }} onChange = {(e)=>{ var today = new Date(); var d = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); this.setState({comment:e.target.value, time:d})}} rows="4"></textarea></Form>

              </p>
              <br/><br/>
              <div>
                <Form.Button onClick= {this.handleInsert} >Submit</Form.Button>
              </div>
            </Form>
          </div>
          </Container>

        </Segment>
      </Container>
    );
  }
}

export default Ratings;
