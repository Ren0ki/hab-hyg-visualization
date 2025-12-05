import data from "../local-data/data.json";
import React from "react";
import { useState } from "react";
import styles from  "../styles/glossary.module.css";
import Wrapper from "./Wrapper";

const Glossary = ({}) => {
const  glossary = [

    //array entries for terms and definitions
    ["ID","Unique identification number assigned to each star" ],
    ["HIP", "Hipparcos catalog number; entry from the Eurpoean Space Agency's astrometric mission, Hipparcos"],
    ["HAB?", "Is the system habitable? Yes (1) / No (0)"],
    [" DISPLAY NAME", "Unnoficial name; not approved by the International Astronomical Union"],
    ["HYG", "Hipparcos, Yale, and Gliese catalog numbers"],
    ["BAYER FLAMSTEED", "Flamsteed designation; a combination of numbers and constellation name for unique identification"],
    ["Gliese", "Gliese catalog entry number; a star catalog listing stars located within 25 parsecs (82 ly) of the Sun"],
    ["BD", "Bonner Durchmusterung catalog entry; an astrometric star catalog of the whole sky, published by the Bonn Observatory in Germany"],
    ["HD", "Henry Draper catalog number; catalog giving spectroscopic classifications for 225,300 stars"],
    ["HR", "Entry number in the Harvard Revised Photometry Catalogue; a catalogue of the positions, photometric magnitudes and spectra of 9110 stars"],
    ["Proper Name", "Name approved by the International Astronomic Union"],
    ["Spectral Class", " Classification of stars based on their spectral characteristics. particularly with Harvard classification"],
    ["Distance", "Distance of system with respect to the Sun "],
    ["Abs Mag", "A measure of the luminosity of a celestial object on an inverse logarithmic astronomical magnitude scale"],
    ["X", "X-coordinate"],
    ["Y", "Y-coordinate"],
    ["Z", "Z-coordinate"]
];

return(
    //assign terms and definitions to columns, including css
    <div className="glossaryCols">
        {glossary.map(([term, definition], index) =>(
            <div key={index} className={styles.row}>
                <div className={styles.term}><b>{term}</b> </div>
                <div className={styles.definition}>{definition}</div>
                </div>
        ))}
    </div>
    ) ;
};

export default Glossary;