// import React from 'react'
import React, { useState } from "react";
import Link from 'next/link'
import Head from 'next/head'
import { ApiPromise, WsProvider } from "@polkadot/api";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";

import Script from 'dangerous-html/react'

const Home = (props) => {

  const connectWallet = async () => {
    console.log('ffff');
    const blockchainUrl = "wss://rpc.shibuya.astar.network";
    const { web3Accounts, web3Enable} = await import(
      "@polkadot/extension-dapp"
    );
    const extensions = await web3Enable("Polk4NET");
    console.log("extensions:", extensions);
    if (extensions.length === 0) {
      return;
    }
    const accounts = await web3Accounts();
    console.log("accounts :", accounts);
    console.log("ggggg");
    const wsProvider = new WsProvider(blockchainUrl);
    const connectedApi = await ApiPromise.create({ provider: wsProvider } );
    console.log("hhhh: ", connectedApi);

  };


  return (
    <>
      <div className="home-container">
        <Head>
          <title>Heartwork</title>
          <meta property="og:title" content="Heartwork" />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar">
          <span className="home-logo">Heartwork</span>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <button className="home-button button-clean button">About</button>
              <button className="home-button1 button-clean button">
                Features
              </button>
              <button className="home-button2 button-clean button">
                Pricing
              </button>
              <button className="home-button3 button-clean button">Team</button>
              <button className="home-button4 button-clean button">Blog</button>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <div className="home-socials">
              <button className="social button">
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="home-image"
                />
              </button>
              <button className="social button">
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="home-image01"
                />
              </button>
            </div>
            <button className="button" onClick={connectWallet}>connect wallet</button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="button home-button5">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container1">
                <span className="home-logo1">Character</span>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span className="home-text">About</span>
                <span className="home-text01">Features</span>
                <span className="home-text02">Pricing</span>
                <span className="home-text03">Team</span>
                <span className="home-text04">Blog</span>
              </nav>
              <div className="home-container2">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <section className="home-hero">
          <div className="home-heading">
            <h1 className="home-header">
              Let&apos;s get started with Heartwork!
            </h1>
            <p className="home-caption">
              <span>Connect your wallet right away!</span>
              <br></br>
            </p>
          </div>
          <div className="home-buttons">
            <button className="button" onClick={connectWallet}>connect wallet</button>
          </div>
        </section>
        <section className="home-description">
          <img
            alt="image"
            src="/hero-divider-1500w.png"
            className="home-divider-image"
          />
        </section>
        <section className="home-collection">
          <div className="home-content">
            <span className="home-caption01">collection</span>
            <div className="home-heading1">
              <h2 className="home-header1">All time best collections</h2>
              <p className="home-header2">
                <span>Tired night.</span>
                <br></br>
                <span>A night of good conversation with friends.</span>
                <br></br>
                <br></br>
                <span>
                  You can&apos;t fall asleep right away, so we&apos;ll chill you
                  out and help you get a good night&apos;s sleep.
                </span>
              </p>
            </div>
          </div>
          <div className="home-main">
            <div className="home-card">
              <Link href="/details">
                <a className="home-link">
                  <div className="home-image02">
                    <img
                      alt="image"
                      src="/Characters/character-1.svg"
                      className="home-image03"
                    />
                  </div>
                </a>
              </Link>
              <div className="home-content1">
                <span className="home-caption02">Character #1</span>
                <h3 className="home-title">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card1">
              <div className="home-image04">
                <img
                  alt="image"
                  src="/Characters/character-2.svg"
                  className="home-image05"
                />
              </div>
              <div className="home-content2">
                <span className="home-caption03">Character #2</span>
                <h3 className="home-title1">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card2">
              <div className="home-image06">
                <img
                  alt="image"
                  src="/Characters/character-3.svg"
                  className="home-image07"
                />
              </div>
              <div className="home-content3">
                <span className="home-caption04">Character #3</span>
                <h3 className="home-title2">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card3">
              <div className="home-image08">
                <img
                  alt="image"
                  src="/Characters/character-4.svg"
                  className="home-image09"
                />
              </div>
              <div className="home-content4">
                <span className="home-caption05">
                  <span>Character #4</span>
                  <br></br>
                </span>
                <h3 className="home-title3">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card4">
              <div className="home-image10">
                <img
                  alt="image"
                  src="/Characters/character-5.svg"
                  className="home-image11"
                />
              </div>
              <div className="home-content5">
                <span className="home-caption06">Character #5</span>
                <h3 className="home-title4">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card5">
              <div className="home-image12">
                <img
                  alt="image"
                  src="/Characters/character-6.svg"
                  className="home-image13"
                />
              </div>
              <div className="home-content6">
                <span className="home-caption07">Character #6</span>
                <h3 className="home-title5">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card6">
              <div className="home-image14">
                <img
                  alt="image"
                  src="/Characters/character-7.svg"
                  className="home-image15"
                />
              </div>
              <div className="home-content7">
                <span className="home-caption08">Character #7</span>
                <h3 className="home-title6">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card7">
              <div className="home-image16">
                <img
                  alt="image"
                  src="/Characters/character-8.svg"
                  className="home-image17"
                />
              </div>
              <div className="home-content8">
                <span className="home-caption09">Character #8</span>
                <h3 className="home-title7">0.05 ETH</h3>
              </div>
            </div>
          </div>
        </section>
        <div>
          <Script
            html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
          ></Script>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #27272d;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-nav {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            color: #ffffff;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-button {
            color: rgb(255, 255, 255);
          }
          .home-button1 {
            color: rgb(255, 255, 255);
          }
          .home-button2 {
            color: rgb(255, 255, 255);
          }
          .home-button3 {
            color: rgb(255, 255, 255);
          }
          .home-button4 {
            color: rgb(255, 255, 255);
          }
          .home-btn-group {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image {
            width: 100px;
            object-fit: cover;
          }
          .home-image01 {
            width: 100px;
            object-fit: cover;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo1 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text01 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-heading {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            text-align: center;
            line-height: 36px;
          }
          .home-buttons {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-description {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-divider-image {
            width: 100%;
            object-fit: cover;
          }
          .home-collection {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 1502px;
            display: flex;
            max-width: 1440px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-content {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption01 {
            color: #ffcf77;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header1 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .home-header2 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-main {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(4, 1fr);
          }
          .home-card {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-link {
            display: contents;
          }
          .home-image02 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #fdea6b;
          }
          .home-image03 {
            object-fit: cover;
          }
          .home-content1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption02 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image04 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #ffcf77;
          }
          .home-image05 {
            object-fit: cover;
          }
          .home-content2 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption03 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title1 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image06 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #8fa7df;
          }
          .home-image07 {
            object-fit: cover;
          }
          .home-content3 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption04 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title2 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image08 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #9ddadb;
          }
          .home-image09 {
            object-fit: cover;
          }
          .home-content4 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption05 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title3 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image10 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #9fd8e5;
          }
          .home-image11 {
            object-fit: cover;
          }
          .home-content5 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption06 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title4 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card5 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image12 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #ec7495;
          }
          .home-image13 {
            object-fit: cover;
          }
          .home-content6 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption07 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title5 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card6 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image14 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #ffcf77;
          }
          .home-image15 {
            object-fit: cover;
          }
          .home-content7 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption08 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title6 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card7 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image16 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #fdea6b;
          }
          .home-image17 {
            object-fit: cover;
          }
          .home-content8 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption09 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title7 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .home-desktop-menu {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-button5 {
              display: flex;
              padding: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .home-logo1 {
              color: #000000;
            }
            .home-main {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-heading {
              gap: var(--dl-space-space-unit);
            }
            .home-header {
              font-size: 36px;
              max-width: 70%;
              line-height: 43px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-description {
              gap: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-collection {
              gap: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .home-header1 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .home-header2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-image02 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image04 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image06 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image08 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image10 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image12 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image14 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image16 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .home-navbar {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-main {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
