"use strict";
function make_album(artist, title, track) {
    const album = { artist, title, track };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
let album1 = make_album(" Talha Anjum ", "Agency ");
let album2 = make_album("Sidhu ", " 295 ", 295);
let album3 = make_album("Talha Anjum", "Ghumaan", 676);
console.log(album1);
console.log(album2);
console.log(album3);
