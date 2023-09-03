const fs = require('fs');
let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 680" fill="none" style="width:100%;background:black;">
<defs>
	<path id="check" fill-rule="evenodd" d="M21.36 9.886A3.933 3.933 0 0 0 18 8c-1.423 0-2.67.755-3.36 1.887a3.935 3.935 0 0 0-4.753 4.753A3.933 3.933 0 0 0 8 18c0 1.423.755 2.669 1.886 3.36a3.935 3.935 0 0 0 4.753 4.753 3.933 3.933 0 0 0 4.863 1.59 3.953 3.953 0 0 0 1.858-1.589 3.935 3.935 0 0 0 4.753-4.754A3.933 3.933 0 0 0 28 18a3.933 3.933 0 0 0-1.887-3.36 3.934 3.934 0 0 0-1.042-3.711 3.934 3.934 0 0 0-3.71-1.043Zm-3.958 11.713 4.562-6.844c.566-.846-.751-1.724-1.316-.878l-4.026 6.043-1.371-1.368c-.717-.722-1.836.396-1.116 1.116l2.17 2.15a.788.788 0 0 0 1.097-.22Z"/>
	<path id="oval" fill-rule="evenodd" d="M21.36 9.886A3.933 3.933 0 0 0 18 8c-1.423 0-2.67.755-3.36 1.887a3.935 3.935 0 0 0-4.753 4.753A3.933 3.933 0 0 0 8 18c0 1.423.755 2.669 1.886 3.36a3.935 3.935 0 0 0 4.753 4.753 3.933 3.933 0 0 0 4.863 1.59 3.953 3.953 0 0 0 1.858-1.589 3.935 3.935 0 0 0 4.753-4.754A3.933 3.933 0 0 0 28 18a3.933 3.933 0 0 0-1.887-3.36 3.934 3.934 0 0 0-1.042-3.711 3.934 3.934 0 0 0-3.71-1.043Zm-3.958 11.713"/>
	<rect id="square" width="36" height="36" stroke="#191919"/>
</defs>
<rect width="680" height="680" fill="black"/>
<rect x="188" y="152" width="304" height="376" fill="#6FA804"/>
<g id="grid" x="196" y="160">
	<use href="#row" y="0"/>
	<use href="#row" y="36"/>
	<use href="#row" y="72"/>
	<use href="#row" y="108"/>
	<use href="#row" y="144"/>
	<use href="#row" y="180"/>
	<use href="#row" y="216"/>
	<use href="#row" y="252"/>
	<use href="#row" y="288"/>
	<use href="#row" y="324"/>
</g>`;

let x = 196;
let y = 160;

let rows = 10;
let cols = 8;
let angle = 0;

let offsetX = 0;
let offsetY = 1;

for (let i = 0; i < rows; i++) {
	for (let j = 0; j < cols; j++) {
		svg += `
		<g transform="translate(${x}, ${y}) scale(1) rotate(${angle - 30}, 18, 20.5)">
			<use href="#oval" fill="#000">
				<animate attributeName="fill" values="#FF9193;#EA3A2D;#D41515;#E8424E;#DB2F96;#6C31D7;#322F92;#2E4985;#60B1F4;#81D1EC;#5ABAD3;#3EB8A1;#5FCD8C;#94E337;#FAE663;#F9DA4D;#F6CB45;#FFB340;#F9A45C;#EF9933;#FF9193" dur="40s" begin="animation.begin" repeatCount="indefinite"/>
			</use>
		</g>
		<g transform="translate(${x}, ${y}) scale(1) rotate(${angle + 90}, 20.5, 17.5)">
			<use href="#oval" fill="#fff">
				<animate attributeName="fill"/>
			</use>
		</g>
		<g transform="translate(${x}, ${y}) scale(1)">
		<use href="#check" fill="#0000FF">
			<animate attributeName="fill" values="#FF9193;#EA3A2D;#D41515;#E8424E;#DB2F96;#6C31D7;#322F92;#2E4985;#60B1F4;#81D1EC;#5ABAD3;#3EB8A1;#5FCD8C;#94E337;#FAE663;#F9DA4D;#F6CB45;#FFB340;#F9A45C;#EF9933;#FF9193" dur="40s" begin="animation.begin" repeatCount="indefinite"/>
		</use>
	</g>
	
	`;
		if (j == (cols -1)) {
			x = 196;
			y += 36;
		}
		else {
			x += 36;
		}
		angle += 5;
		angle %= 360;
	}
}

svg += `</svg>`;

fs.writeFileSync('illusioncheck.svg', svg);