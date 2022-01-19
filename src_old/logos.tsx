import React from 'react';

// SVG logo at https://www.squarespace.com/
export const Squarespace = ({ height }) => <img height={height} src="//static.gregoryland.com/ss.svg" />;

// https://tolicodes.com/
export const Agorafy = ({ height }) => (
	<img height={height} style={{ objectFit: 'contain' }} src="//static.gregoryland.com/agorafy.png" />
);

// SVG logo at https://live.youvisit.com/
export const YouVisit = ({ height }) => <img height={height} src="//static.gregoryland.com/yv.svg" />;

// http://www.mandmenvironmental.com/img/mme-logo.svg
export const MMEnvironmental = ({ height }) => <img height={height} src="//static.gregoryland.com/mm.svg" />;
