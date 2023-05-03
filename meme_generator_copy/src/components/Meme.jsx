import React from "react";
import image from "./image.png";
//import memesData from "../memesData"; 3.comment this out

export default function Meme() {
  //const [memeImg, setMemeImg] = React.useState("http://i.imgflip.com/1bij.jpg")
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]); 
  // 1.remove (memesData) and replace w empty obj or in this case arr? YES :)

  // 2. 
  React.useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => setAllMemes(data.data.memes)) //need to get nested memes arr
  }, [])  //empty array - no dep bc don't need to rerun api call, just cycle through it randomly


 /**useEffect takes a function as its parameter. If that function returns something, 
  * it needs to be a cleanup function. Otherwise, it should return nothing. If we make 
  * it an async function, it automatically retuns a promise instead of a function or nothing. 
  * Therefore, if you want to use async operations inside of useEffect, you need to define 
  * the function separately inside of the callback function, as seen below: */
    
  //   React.useEffect(() => {
  //     async function getMemes() {
  //         const res = await fetch("https://api.imgflip.com/get_memes")
  //         const data = await res.json()
  //         setAllMemes(data.data.memes)
  //     }
  //     getMemes()
      //     return () => {
      //           
      //     }  this return is where the clenup function would go, but we don't need one for this project
  // }, [])


  
  function getMemeImg() {
    //console.log("Clicked");
    const memesArr = allMemes; //then was: allMemes.data.memes; //was: memesData.data.memes
    const randomNum = Math.floor(Math.random() * memesArr.length); //can just delete the above and replace memesArr with allMemes
    console.log(randomNum);
    const url = memesArr[randomNum].url;
    console.log(url);
    //setMemeImg(memesArr[randomNum].url)
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }


  return (
    <main>

      <div className="form">
        <input 
          type="text" 
          className="form-input" 
          placeholder="Top text"
          name="topText"
          value={meme.topText} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          className="form-input" 
          placeholder="Bottom text" 
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImg} className="form-button">
          Get a new meme image <img src={image} className="button-image" />
        </button>
      </div>
      <br />

      <div className="meme">
        <img src={meme.randomImage} alt="new img" className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>

    </main>
    //img src was {memeImage}
  );
}

/** Challenge: Update our state to save the meme-related
 * data as an object called `meme`. It should have the
 * following 3 properties:
 * topText, bottomText, randomImage.
 *
 * The 2 text states can default to empty strings for now,
 * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
 *
 * Next, create a new state variable called `allMemeImages`
 * which will default to `memesData`, which we imported above
 *
 * Lastly, update the `getMemeImage` function and the markup
 * to reflect our newly reformed state object and array in the
 * correct way. */

/** Challenge: 
* 1. Set up the text inputs to save to the `topText` and `bottomText` 
* state variables.
* 2. Replace the hard-coded text on the image with the text being saved 
* to state. */

/** Challenge: 
 * As soon as the Meme component loads the first time,
 * make an API call to "https://api.imgflip.com/get_memes".
 * 
 * When the data comes in, save just the memes array part
 * of that data to the `allMemes` state
 * 
 * Think about if there are any dependencies that, if they
 * changed, you'd want to cause to re-run this function.
 * 
 * Hint: for now, don't try to use an async/await function.
 * Instead, use `.then()` blocks to resolve the promises
 * from using `fetch`. We'll learn why after this challenge. */
