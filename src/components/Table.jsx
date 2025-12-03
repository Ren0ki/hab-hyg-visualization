import data from "../local-data/data.json";
import React from "react";
import { useState } from "react";
import '../App.css';
import Wrapper from "./Wrapper";

const Table = ({selectedStar}) => {

  console.log("Table component loaded");
  console.log("data =", data);
  console.log("Is data an array?", Array.isArray(data));
  console.log("First item:", data[0]);
  
if(!selectedStar)
{
    return(
        <Wrapper/>
    )
}

return(
    <table>
        <tbody>
    
                <tr>
                    <td> ID: </td>
                    <td>{selectedStar.ID}</td>
                </tr>

                <tr> 
                    <td> Hip: </td>
                    <td>{selectedStar.Hip}</td>
                </tr>

                 <tr> 
                    <td> Hab?: </td>
                    <td>{selectedStar.Hab}</td>
                </tr>

                <tr> 
                    <td> Display Name: </td>
                    <td>{selectedStar.DisplayName}</td>
                </tr>

                <tr> 
                    <td> Hyg: </td>
                    <td>{selectedStar.Hyg}</td>
                </tr>

                <tr> 
                    <td> Bayer Flamsteed: </td>
                    <td>{selectedStar.BayerFlamsteed}</td>
                </tr>

               <tr> 
                    <td>  Gliese: </td>
                    <td>{selectedStar.Gliese}</td>
                </tr>

                   <tr> 
                    <td> BD: </td>
                    <td>{selectedStar.BD}</td>
                </tr>
                
                   <tr> 
                    <td> HD: </td>
                    <td>{selectedStar.HD}</td>
                </tr>

                   <tr> 
                    <td> HR: </td>
                    <td>{selectedStar.HR}</td>
                </tr>

                   <tr> 
                    <td> Proper Name: </td>
                    <td>{selectedStar.ProperName}</td>
                </tr>

                       <tr> 
                    <td> Spectral Class: </td>
                    <td>{selectedStar.SpectralClass}</td>
                </tr>

                       <tr> 
                    <td> Distance: </td>
                    <td>{selectedStar.Distance}</td>
                </tr>

                   <tr> 
                    <td> Abs Mag: </td>
                    <td>{selectedStar.AbsMag}</td>
                </tr>

        </tbody>
    </table>

);

};

export default Table;