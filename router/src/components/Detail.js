import React from 'react'
import { useState } from 'react';

function Detail({ item }) {
  // let {item} = data[id];

  return (
    <section>
      <img></img>
      <p>{item.title}</p>
      <p>{item.price}원</p>
    </section>
  )
}

export default Detail