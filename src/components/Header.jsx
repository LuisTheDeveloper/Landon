import React, { useEffect, useState } from 'react';
import { useGetMenuLinksQuery } from "../services/landonApi";

const Header = () => {
  const { data, isFetching } = useGetMenuLinksQuery();

  if(isFetching) return "Loading..."

  const menuLinksData = data;

  return (
    <header id="intro">
    <article className="fullheight">
      <div className="hgroup">
        <h1>Landon Hotel</h1>
        <h2>West London</h2>
        <p><a href="#welcome"><img src="images/misc/arrow.png" alt="down arrow" /></a></p>
      </div>
    </article>

    <nav id="nav">
      <div className="navbar">
        <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
        <ul>
            {
                menuLinksData.map((link) => {
                    return (<li key={link.href}><a className={`icon ${link.class}`} href={`${link.href}`}><span>{link.text}</span></a></li>)
                })
            }
        </ul>
      </div>
    </nav>
  </header>
  )
}

export default Header