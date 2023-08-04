import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)

    window.onresize = () => {
        // console.log('window is resizing')
        setWindowWidth(window.innerWidth)
        // console.log(windowWidth)
    }

    // window.addEventListener('resize', () => {
    //     console.count('window is resizing')
    //     console.log(window.screen.width)
    //     // setWindowWidth(screen.width)

    //     // console.log(windowWidth)
    // })

    // ideal data structure
    const person = {
        profilePic: 'rick and morty api pic',
        name: "name generate api/// or morty api",
        posts: [
            {
                text: 'random quotes',
            }
        ],
        homePlanet: 'nasa pics for'
    }
    
    // JENNA API-----------------------------------
    const [ characters, setCharacters ] = useState([])
    const [ mainProfile, setMainProfile ] = useState({})
    const [ limitCharacters, setLimitCharacters ] = useState([])
    const [ pageMount, setPageMount ] = useState(false)

    const array = []

    const fetchRick = async (URL) => {
        const response = await axios.get(URL)
        // console.log(response)
        const data = response.data.results
        // console.log(data)
        URL = response.data.info.next
        // console.log(URL)

        array.push(...data)
        if(URL){
            URL = response.data.info.next
            // console.log("url exists")
            fetchRick(URL)
        }
        // console.log(array)
    }
    
    
    useEffect(() => {
        setCharacters(array)
        
        return () => {
            fetchRick('https://rickandmortyapi.com/api/character?page=1')
            // console.log('unmount')
            // console.log(array)
        }
    }, [pageMount])
    
    useEffect(() => {
        // console.log(`CHARACTERS ARRAY`, characters)
        setMainProfile(characters[0])
    }, [array])
    
    
    const grabCharacters = (howMany) => {

        let charactersArray = []
        for(let i = 0; i < howMany; i++){
            // setLimitCharacters(characters[i])
            charactersArray.push( characters[i] )
        }
        // console.log(limitCharacters)
        return charactersArray
    }
    const grabRandomCharacters = (howMany) => {

        let charactersArray = []
        for(let i = 0; i < howMany; i++){
            // setLimitCharacters(characters[i])
            charactersArray.push( characters[getRandomIntInclusive(0,characters.length-1)] )
        }
        // console.log(limitCharacters)
        return charactersArray
    }
    // --------------------------------------------

    // GENERAL STATE------------------------------------------------------
    const [ showSearch, setShowSearch ] = useState(false) // search bar pop up
    const [ search, setSearch ] = useState(null) // for search bar names
    const [ time, setTime ] = useState(getRandomIntInclusive(1, 23))
    const [ count, setCount ] = useState(0)


    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
      } // from mdn


    //   tracking clicked profile from search bar
      const [ clickedProfile, setClickedProfile ] = useState({})

    // ---------------------------------------------

    // DOUGS API------------------------------------     
        const [galacticHome, setGalacticHome] = useState("")
        
        const getGalacticHome = async () => {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=VMV9vIgFB7Mfpe28RjcFSDyawICxwznNYKIYYQCS&count=20
        `)
        // console.log('GALACTIC RESPONSE',response); 
        setGalacticHome(response.data)
        }
        
        useEffect(()=>{
            getGalacticHome()
        },[])
        // getGalacticHome();
    // --------------------------------------------

    // ANN API------------------------------------
    const [quotes, setQuotes] = useState([]);

    const getRandomQuotes = async () => {
        // console.log('getting quotes')
        await axios
            .get('https://api.quotable.io/quotes/random?limit=15')
            .then((response) => {
            console.log(response.data);
            setQuotes(response.data);
        // console.log(getRandomQuotes)
        })
        .catch((err) => {
        console.log(err);
        });
    };
 
    useEffect(() => {
    //  trigger the getRandomQuotes function
     getRandomQuotes();
    }, []);


    // temp api Ann
    const [ kQuote, setKQuote ] = useState("")
    const getQuote =  async () => {
        let response =  await axios.get(`https://api.themotivate365.com/stoic-quote`)
        setKQuote(response.data.quote)
        console.log(response.data.quote)
        return response.data.quote
    }

    useEffect(() => {
        // console.log('QUOTES 2')
        // getQuote()
    }, [])
    // --------------------------------------------

    return(
        <AppContext.Provider value={{
            windowWidth, setPageMount, setCharacters, fetchRick,
            characters, grabCharacters, grabRandomCharacters, mainProfile, showSearch, setShowSearch, search, setSearch, getRandomIntInclusive, time, clickedProfile, setClickedProfile, count, setCount,

            
            galacticHome, setGalacticHome, getGalacticHome,

            quotes, setQuotes, getRandomQuotes,

            //temp api
            kQuote, getQuote, setKQuote

        }}>
            {props.children}
        </AppContext.Provider>

    )
}

export default AppContextProvider