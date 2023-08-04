import React, { useContext, useState,useEffect } from "react";
import { AppContext } from "../context/app_context";
import { Link } from "react-router-dom";

const FeedItem = ({ friend, index }) => {
  let {
    mainProfile,
    getRandomIntInclusive,
    time,
    setClickedProfile,
    quotes,
    setQuotes,
    getRandomQuotes
  } = useContext(AppContext);

  const [likes, setLikes] = useState(0);

  useEffect(() => {
    console.log('it is working')
  }, [quotes])

  const hide = (what) => {
    what.classList.add("hide");
  };

  const focusOn = (who) => {
    who.focus(); // sets focus to comment clicked
  };

  return (
    <div className={`friendPost post${index}`}>
      <div className="top">
        <Link to={`/profile/${friend?.name.replaceAll(" ", "")}`}>
          <div className="left" onClick={() => setClickedProfile(friend)}>
            <img src={friend?.image} alt="" srcset="" />
            <div className="">
              <h4>{friend?.name}</h4>
              <p className="globe">{time}h 🌍</p>
              {/* updates everytime state is altered ... */}
            </div>
          </div>
        </Link>

        <div className="right">
          <div className="">
            <img
              src="https://static.thenounproject.com/png/1380510-200.png"
              alt=""
              className="dots"
            />
          </div>

          <div
            className=""
            onClick={() => hide(document.querySelector(`.post${index}`))}
          >
            <p className="exit">X</p>
          </div>
        </div>
      </div>

      <div className="textArea">
      <button onClick={getRandomQuotes} className="quotesButton"> Show Quote Of The Day </button>
      <>
  {quotes && quotes.map((quotes, index) => {
   return(
    <div key={index}>
      <h2> Author Name: {quotes.author} </h2>
      <p> {quotes.content }</p>
    </div>);
  })}
  {/* <li> {quotes && <p> {quotes}</p>} </li> */}
</>
      </div>

      <div className="reactions">
        {likes && (
          <div className="top">
            <p>👍{likes && likes}</p>
            <p>2💬</p>
          </div>
        )}
        <hr />

        <div className="options">
          <p onClick={() => setLikes(likes + 1)}>👍 Like</p>
          <p onClick={() => focusOn(document.querySelector(`.input${index}`))}>
            💬 Comment
          </p>
          <p>➦ Share</p>
        </div>

        <hr />

        <div className="comments">
          <p className="viewMore">View more comments</p>

          <div className="commentContainer">
            <img src={friend?.image} alt="" srcset="" />
            <div className="comment">
              <p className="name">{friend?.name}</p>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        <div className="addComment">
          <img src={mainProfile?.image} alt="" srcset="" />
          <input
            type="text"
            placeholder="Write a comment..."
            className={`input${index}`}
          />
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
