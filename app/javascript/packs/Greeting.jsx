import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/random_greeting')
      .then((response) => response.json())
      .then((data) => setGreeting(data.greeting));
  }, []);

  return <h1>{greeting}</h1>;
};

export default Greeting;
