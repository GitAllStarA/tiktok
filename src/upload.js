import db from './firebase';
import React from 'react';
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      form: [],
    };
  }

  userData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentWillMount() {
    let formref = db
      .collection('users')
      .onSnapshot((snapshot) =>
        this.setState({ form: snapshot.docs.map((doc) => doc.data()) })
      );
  }
  resetForm() {
    this.refs.contactForm.reset();
  }

  addUsersData = (e) => {
    e.preventDefault();
    const params = {
      url: this.inputurl.value,
      channel: this.inputchannel.value,
      description: this.inputdescription.value,
      song: this.inputsong.value,
      likes: this.inputlikes.value,
      messages: this.inputmessages.value,
      shares: this.inputshares.value,
    };
    const insert = db;
    insert.settings({
      timestampsInSnapshots: true,
    });
    const uereff = insert
      .collection('users')
      .add(params)
      .then(() => {
        alert('success', 'Your data is added at firebase firestore');
      });
this.resetForm()
    this.setState({
      form: [],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
       
            <div className="col-sm-4">
              <h2>upload videos</h2>
              <form onSubmit={this.addUsersData}   ref='contactForm'>
        
                <div className="form-group">
                  <label htmlFor="url">url</label>
                  <input
                    type="text"
                    name="url"
                    placeholder="paste url here "
                    onChange={this.userData}
                    value={this.state.url}
                    ref={(url) => (this.inputurl = url)}
                    className="form-control"
                  />
                </div>

             
                <div className="form-group">
                  {' '}
                  <label htmlFor="exampleInputEmail1">channel</label>
                  <input
                    type="text"
                    name="channel"
                    placeholder="channel name"
                    onChange={this.userData}
                    value={this.state.channel}
                    ref={(channel) => (this.inputchannel = channel)}
                    className="form-control"
                  />
                </div>

            
                <div className="form-group">
                  {' '}
                  <label htmlFor="city">description</label>
                  <input
                    type="text"
                    name="description"
                    placeholder="description "
                    onChange={this.userData}
                    value={this.state.description}
                    ref={(description) => (this.inputdescription = description)}
                    className="form-control"
                  />
                </div>

             
                <div className="form-group">
                  {' '}
                  <label htmlFor="song">song</label>{' '}
                  <input
                    type="text"
                    name="song"
                    placeholder="song name"
                    onChange={this.userData}
                    value={this.state.song}
                    ref={(song) => (this.inputsong = song)}
                    className="form-control"
                  />
                </div>

               
                <div className="form-group">
                  {' '}
                  <label htmlFor="likes">likes</label>
                  <input
                    type="number"
                    name="likes"
                    placeholder="likes"
                    onChange={this.userData}
                    value={this.state.likes}
                    ref={(likes) => (this.inputlikes = likes)}
                    className="form-control"
                  />
                </div>

       
                <div className="form-group">
                  {' '}
                  <label htmlFor="messages">messages</label>
                  <input
                    type="number"
                    name="messages"
                    placeholder="messages "
                    onChange={this.userData}
                    value={this.state.messages}
                    ref={(messages) => (this.inputmessages = messages)}
                    className="form-control"
                  />
                </div>

          
                <div className="form-group">
                  {' '}
                  <label htmlFor="shares">shares</label>
                  <input
                    type="number"
                    name="shares"
                    placeholder="shares"
                    onChange={this.userData}
                    value={this.state.shares}
                    ref={(shares) => (this.inputshares = shares)}
                    className="form-control"
                  />
                </div>
                <button type="submit" className='btn btn-primary'>Submit</button>
              </form>
              </div>
      
          
          <div className="col-sm-8">
            <div className="row">
              {this.state.form.map((form) => (
                <div
                  className="col-sm-6"
                  key={form.channel}
                  style={{ margin: `0px 0px 30px 0px` }}
                >
                  <div className="card">
                    <div className="card-body">
                    <h4 className='card-title'>{form.song}</h4>
                        <h6 className='card-subtitle mb-2 text-muted'>{form.channel}</h6>
                        <h6 className='card-subtitle mb-2 text-muted'>{form.song}</h6>
                        <div className="container">
                         
              <h6  className='card-subtitle mb-2 text-muted mt-2 mb-1 mr-2 pr-5 '>{<FavoriteBorderIcon/>} {form.likes}  <MessageIcon  /> {form.messages}  <ShareIcon/> {form.shares}</h6> 
              </div>
             
                        <p className='card-text'>{form.channel}</p>
                        <a href={`tel:${form.song}`} className='card-link'>{form.song}</a>
                        <a href={`mailto:${form.channel}`} className='card-link'>{form.channel}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    );
  }
}
export default User;
