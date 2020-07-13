import './App.css';

import React, {useLayoutEffect, useRef, useState} from 'react';

const App: React.FC = () => {
  const [showSibling, setShowSibling] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setShowSibling(false);
    }, 1000);
  }, []);

  return (
    <div className="container">
      {showSibling && <div className="sibling" />}
      <HeightLogger siblingShown={showSibling} />
    </div>
  );
};

export default App;

interface HeightLoggerProps {
  siblingShown: boolean;
}

const HeightLogger: React.FC<HeightLoggerProps> = ({siblingShown}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  console.log('siblingShown', siblingShown);
  if (ref.current != null) {
    console.log(ref.current.clientHeight);
    console.log(ref.current.parentElement!.children);
  } else {
    console.log('ref not attached yet');
  }
  console.log('');

  useLayoutEffect(() => {
    console.log('in useLayoutEffect');
    console.log('siblingShown', siblingShown);
    if (ref.current != null) {
      console.log(ref.current.clientHeight);
      console.log(ref.current.parentElement!.children);
    } else {
      console.log('ref not attached yet');
    }
    console.log('');
  });

  return <div className="height-logger" ref={ref} />;
};
