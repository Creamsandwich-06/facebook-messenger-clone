import './App.css';
import React,{useEffect, useState} from 'react';
import { Divider, FormControl, Input } from '@mui/material';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase/compat';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

function App() {
  const [input, setInput]= useState('');
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc =>({id:doc.id,data:doc.data()})));
    })
    },[])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  },[])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/150px-Facebook_Messenger_logo_2020.svg.png" alt="" srcset="" />
      <h1>Hello Programmers!</h1>
      <h2>Welcome {username}</h2>
      <Divider light />
      <form className='app__form' action="">
        <FormControl className='app__formControl'>
          {/* Setting the value to the input variable  */}
          <Input className='app__input' variant="standard" placeholder='Enter a message...' id="input" value={input} onChange={event => setInput(event.target.value)} type="text"/>
        
          {/* Click send to the sendMessage function  */}
          <IconButton className='app__iconButton' color='secondary' id="submit" type="submit" disabled={!input} variant="contained" onClick={sendMessage}>
          <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
      {/* Display all messages inside the messages using map function */}
      {
        messages.map(({id,data}) => 
          <Message key={id} username={username} message={data}/>
        )
      }
      </FlipMove>
    </div>
  );
}

export default App;
