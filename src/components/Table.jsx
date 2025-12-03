import data from "../local-data/data.json";
import React from "react";
import { useState } from "react";
import '../App.css';
import Wrapper from "./Wrapper";

const Table = ({star}) => {

  console.log("Table component loaded");
//   console.log("data =", data);
//   console.log("Is data an array?", Array.isArray(data));
//   console.log("First item:", data[0]);
  
// if(!selectedStar)
// {
//     return(
//         <Wrapper/>
//     )
// }

const displayed = star || data[0];

return(
    <table>
        <tbody>
    
                <tr>
                    <td> ID: </td>
                    <td>{displayed.ID}</td>
                </tr>

                <tr> 
                    <td> Hip: </td>
                    <td>{displayed.Hip}</td>
                </tr>

                 <tr> 
                    <td> Hab?: </td>
                    <td>{displayed.Hab}</td>
                </tr>

                <tr> 
                    <td> Display Name: </td>
                    <td>{displayed.DisplayName}</td>
                </tr>

                <tr> 
                    <td> Hyg: </td>
                    <td>{displayed.Hyg}</td>
                </tr>

                <tr> 
                    <td> Bayer Flamsteed: </td>
                    <td>{displayed.BayerFlamsteed}</td>
                </tr>

               <tr> 
                    <td>  Gliese: </td>
                    <td>{displayed.Gliese}</td>
                </tr>

                <tr> 
                    <td> BD: </td>
                    <td>{displayed.BD}</td>
                </tr>
                
                <tr> 
                    <td> HD: </td>
                    <td>{displayed.HD}</td>
                </tr>

                <tr> 
                    <td> HR: </td>
                    <td>{displayed.HR}</td>
                </tr>

                <tr> 
                    <td> Proper Name: </td>
                    <td>{displayed.ProperName}</td>
                </tr>

                <tr> 
                    <td> Spectral Class: </td>
                    <td>{displayed.SpectralClass}</td>
                </tr>

                <tr> 
                    <td> Distance: </td>
                    <td>{displayed.Distance}</td>
                </tr>

                <tr> 
                    <td> Abs Mag: </td>
                    <td>{displayed.AbsMag}</td>
                </tr>
                
        </tbody>
    </table>
);
};

export default Table;