import data from "../local-data/data.json";
import React from "react";
import { useState } from "react";
import '../App.css';
import Wrapper from "./Wrapper";

const Glossary = ({star}) => {

  console.log("Table component loaded");
//   console.log("data =", data);
//   console.log("Is data an array?", Array.isArray(data));
//   console.log("First item:", data[0]);


return(
    <table>
        <tbody>
    
                <tr>
                    <td> <b> ID </b> </td>
                    <td>Unique identification number assigned to each star </td>
                </tr>

                <tr> 
                    <td> <b>HIP </b> </td>
                    <td>Hipparcos catalog number; entry from the Eurpoean Space Agency's astrometric mission, Hipparcos</td>
                </tr>

                 <tr> 
                    <td> <b> HAB? </b> </td>
                    <td>Is the system habitable? Yes (1) / No (0)</td>
                </tr>

                <tr> 
                    <td> <b> DISPLAY NAME </b> </td>
                    <td>Unnoficial name; not approved by the International Astronomical Union </td>
                </tr>

                <tr> 
                    <td> <b> HYG </b> </td>
                    <td>Hipparcos, Yale, and Gliese catalog numbers</td>
                </tr>

                <tr> 
                    <td><b> BAYER FLAMSTEED </b> </td>
                    <td>Flamsteed designation; a combination of numbers and constellation name for unique identification</td>
                </tr>

               <tr> 
                    <td>  <b>Gliese </b> </td>
                    <td>Gliese catalog entry number; a star catalog listing stars located within 25 parsecs (82 ly) of the Sun. </td>
                </tr>

                <tr> 
                    <td> <b> BD </b></td>
                    <td>Bonner Durchmusterung catalog entry; an astrometric star catalog of the whole sky, published by the Bonn Observatory in Germany </td>
                </tr>
                
                <tr> 
                    <td> <b> HD </b> </td>
                    <td>Henry Draper catalog number; catalog giving spectroscopic classifications for 225,300 stars </td>
                </tr>

                <tr> 
                    <td> <b> HR </b> </td>
                    <td>Entry number in the Harvard Revised Photometry Catalogue; a catalogue of the positions, photometric magnitudes and spectra of 9110 stars</td>
                </tr>

                <tr> 
                    <td> <b> Proper Name </b> </td>
                    <td>Name likely approved by the International Astronomic Union </td>
                </tr>

                <tr> 
                    <td> <b> Spectral Class </b> </td>
                    <td>Classification of stars based on their spectral characteristics. particularly with Harvard classification</td>
                </tr>

                <tr> 
                    <td><b> Distance </b> </td>
                    <td>Distance of system with respect to the Sun </td>
                </tr>

                <tr> 
                    <td> <b> Abs Mag </b> </td>
                    <td>A measure of the luminosity of a celestial object on an inverse logarithmic astronomical magnitude scale</td>
                </tr>
                
                <tr>
                    <td> <b> X </b> </td>
                    <td>X-coordinate </td>
                </tr>
                  <tr>
                    <td> <b> Y</b> </td>
                    <td> Y-coordinate </td>
                </tr>
                  <tr>
                    <td> <b> Z </b></td>
                    <td> Z-coordinate </td>
                </tr>

        </tbody>
    </table>
);
};

export default Glossary;