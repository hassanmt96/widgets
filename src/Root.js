import React from 'react';
import Clock from './Clock';
import Folder from './Folder';

const Root = () => {
  const folders = [
    { title: 'one', content: 'I am the first' },
    { title: 'two', content: 'I am the second' },
    { title: 'three', content: 'I am the third' }
  ];

  return (

    <div>
      <Clock />
      <Folder folders={folders}/>
    </div>

  )




}

export default Root;
