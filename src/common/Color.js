// @flow

import {
  desaturate,
  lighten,
  adjustHue
} from 'polished';

// This might be moved to a specfic flow doc attached
// to readme
// https://flow.org/en/docs/types/objects/#toc-objects-as-maps

const colors: {[color_property: string]: string} = {
  red: 'red',
  warning: {
    background: '#fff3cd',
    border: '#856404'
  },
  error: {
    background: '#f8d7da',
    border: '#721c24'
  },
  success: {
    background: '#d4edda',
    border: '#155724'
  },
  green: '#93A8AC',
  yellow: 'yellow',
  beige: '#A59E8C',
  wood: '#66635B',
  eggshell: '#D7CEB2',
  blue: 'blue',
  martinique: '#3D3A57',
  white: '#fafafa',
  lightGray: '#fff',
  mediumGray: '#eee',
  darkGray: '#4C5760',
  darkGrayDesaturated: '#222',

  get primary() {
    return this.martinique
  },

  get secondary() {
    return adjustHue(100, this.martinique);
  },

  get headerBg() {
    return desaturate(0.1, this.martinique);
  },
  get border() {
    return this.darkGray;
  },
  get borderLighter() {
    return lighten(0.3, this.darkGray);
  },
  get primaryBg() {
    return this.white;
  },
  get sidebarBg() {
    return this.martinique;
  },
  get sidebarHover() {
    return lighten(0.1, this.martinique);
  },
  get primaryText() {
    return this.darkGray;
  },
  get secondaryText() {
    return this.darkGray;
  },
  get invertedText() {
    return this.white;
  },
  get accent() {
    return this.green;
  },
  get warningBackground() {
    return this.warning.background;
  },
  get warningBorder() {
    return this.warning.border;
  },
  get errorBackground() {
    return this.error.background;
  },
  get errorBorder() {
    return this.error.border;
  },
  get successBackground() {
    return this.success.background;
  },
  get successBorder() {
    return this.success.border;
  },
};

export default colors;
