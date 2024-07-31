/**
 * This script adds a "Made with Replit" badge to your repl when seen in full-browser view
 */

function main() {

  // Theme is passed from the script tag, default blue
  const themes = {
    dark: { fg: '#F5F9FC', bg: '#130F26' },
    light: { fg: '#130F26', bg: '#F5F9FC' },
    red: { fg: '#F5F9FC', bg: '#FA4B4B' },
    orange: { fg: '#F5F9FC', bg: '#D96D00' },
    yellow: { fg: '#F5F9FC', bg: '#A68A00' },
    lime: { fg: '#F5F9FC', bg: '#639400' },
    green: { fg: '#F5F9FC', bg: '#00A11B' },
    teal: { fg: '#F5F9FC', bg: '#0093B0' },
    blue: { fg: '#F5F9FC', bg: '#0F87FF' },
    blurple: { fg: '#F5F9FC', bg: '#8E78FF' },
    purple: { fg: '#F5F9FC', bg: '#B266FF' },
    magenta: { fg: '#F5F9FC', bg: '#EB3BEB' },
    pink: { fg: '#F5F9FC', bg: '#F545BA' },
  };
  const color = themes[document.currentScript.getAttribute('theme') || 'blue'];

  const badge = `
  <style>
  #replit-badge {
    position: fixed;
    cursor: pointer;
    bottom: 16px;
    right: 16px;
    z-index: 1000;
  }

  #replit-badge svg {
    opacity: 0.5;
    transition-property: opacity, transform;
    transition: opacity 120ms, transform 120ms;
    transition-timing-function: ease-out;
  }

  #replit-badge:hover svg {
    transform: scale(1.05);
    opacity: 1;
  }
  </style>

  <a id="replit-badge" href="https://blindstrike.netlify.app/game/%E2%9D%A4" target="_blank">

  <svg width="158" height="36" viewBox="0 0 153 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2_22)">
<rect x="3" width="147" height="30" rx="8" fill="${color.bg}"/>
</g>

<text x="10" y="20" font-family="Arial" font-size="15" fill="${color.fg}">
    ❤️ from BlindStrike
  </text><defs>
<filter id="filter0_d_2_22" x="0" y="0" width="153" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_22"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_22" result="shape"/>
</filter>
</defs>
</svg>


  </a>
  `;

  document.body.insertAdjacentHTML('beforeend', badge);
}

main();