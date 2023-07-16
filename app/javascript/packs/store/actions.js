export const fetchRandomGreeting = () => {
    return (dispatch) => {
      fetch('/random_greeting')
        .then((response) => response.json())
        .then((data) => dispatch(setGreeting(data.greeting)));
    };
  };
  
  export const setGreeting = (greeting) => {
    return {
      type: 'SET_GREETING',
      payload: greeting,
    };
  };
  