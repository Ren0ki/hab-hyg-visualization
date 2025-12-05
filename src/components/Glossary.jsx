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
  
if(!star)
{
    return(
        <Wrapper/>
    )
}

const displayed = star;

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
                    <td>{displayed.DisplayName}</td>
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
                    <td>Gliese catalog entry number </td>
                </tr>

                <tr> 
                    <td> <b> BD </b></td>
                    <td>Bonner Durchmusterung catalog name </td>
                </tr>
                
                <tr> 
                    <td> <b> HD </b> </td>
                    <td>Henry Draper catalog number</td>
                </tr>

                <tr> 
                    <td> <b> HR </b> </td>
                    <td>Entry number in the Harvard Revised Photometry Catalogue</td>
                </tr>

                <tr> 
                    <td> <b> Proper Name </b> </td>
                    <td>{displayed.ProperName}</td>
                </tr>

                <tr> 
                    <td> <b> Spectral Class </b> </td>
                    <td>Classification of stars based on their spectral characteristics. particularly with Harvard classification</td>
                </tr>

                <tr> 
                    <td><b> Distance </b> </td>
                    <td>Distance of system with respect to Earth </td>
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