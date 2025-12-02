import data from "../local-data/data.json";
import React from "react";
import { useState } from "react";
import '../App.css';

const Table = () => {

  console.log("Table component loaded");
  console.log("data =", data);
  console.log("Is data an array?", Array.isArray(data));
  console.log("First item:", data[0]);
  
return(
    <table>

        <tbody>
           
           {data.slice(0, 10).map (data => ( 
            <tr key = {data.ID}>

                <tr>
                    <td> ID: </td>
                    <td>{data.ID}</td>
                </tr>

                <tr> 
                    <td> Hip: </td>
                    <td>{data.Hip}</td>
                </tr>

                 <tr> 
                    <td> Hab?: </td>
                    <td>{data.Hab}</td>
                </tr>

                <tr> 
                    <td> Display Name: </td>
                    <td>{data.DisplayName}</td>
                </tr>

                <tr> 
                    <td> Hyg: </td>
                    <td>{data.Hyg}</td>
                </tr>

                <tr> 
                    <td> Bayer Flamsteed: </td>
                    <td>{data.BayerFlamsteed}</td>
                </tr>

               <tr> 
                    <td>  Gliese: </td>
                    <td>{data.Gliese}</td>
                </tr>

                   <tr> 
                    <td> BD: </td>
                    <td>{data.BD}</td>
                </tr>
                
                   <tr> 
                    <td> HD: </td>
                    <td>{data.HD}</td>
                </tr>

                   <tr> 
                    <td> HR: </td>
                    <td>{data.HR}</td>
                </tr>

                   <tr> 
                    <td> Proper Name: </td>
                    <td>{data.ProperName}</td>
                </tr>

                       <tr> 
                    <td> Spectral Class: </td>
                    <td>{data.SpectralClass}</td>
                </tr>

                       <tr> 
                    <td> Distance: </td>
                    <td>{data.Distance}</td>
                </tr>

                   <tr> 
                    <td> Abs Mag: </td>
                    <td>{data.AbsMag}</td>
                </tr>

            <tr/>
        </tr>

            ))}

        </tbody>
    </table>

);

};

export default Table;