import data from "../local-data/data.json";
import React from "react";
import { useState } from "react";
//import '../styles/styles.css';
import '../App.css';

const Table = () => {

  console.log("Table component loaded");
  console.log("data =", data);
  console.log("Is data an array?", Array.isArray(data));
  console.log("First item:", data[0]);
  
return(
    <table>
        {/* <thead>
            <tr>
                <th>ID</th>
                <th> Hip</th>
                <th>Hab</th>
                <th> Display Name</th>
                <th> HYG  </th>
                <th> Bayer Flamsteed </th>
                <th> Gliese </th>
                <th> BD </th>
                <th> HD </th>
                <th> HR </th>
                <th> Proper Name</th>
                <th> Spectral Class</th>
                <th> Distance</th>
                <th> Xg </th>
                <th> Yg </th>
                <th> Zg</th>
                <th> AbsMag</th>
            </tr>
        </thead> */}
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


                {/* <td> <span className="cell-header">Hab?: </span> {data.Hab}</td>
                <td> <span className="cell-header">Display Name: </span> {data.DisplayName}</td>
                <td> <span className="cell-header">HYG: </span> {data.Hyg}</td>
                <td> <span className="cell-header">Bayer Flamsteed: </span> {data.BayerFlamsteed}</td>
                <td> <span className="cell-header"> Gliese: </span> {data.Gliese}</td>
                <td> <span className="cell-header"> BD: </span> {data.BD}</td>
                <td> <span className="cell-header"> HD: </span> {data.HD}</td>
                <td> <span className="cell-header"> HR: </span> {data.HR}</td>
                <td> <span className="cell-header"> Proper Name: </span> {data.ProperName}</td>
                <td> <span className="cell-header"> Spectral Class: </span> {data.SpectralClass}</td>
                <td> <span className="cell-header"> Distance: </span> {data.Distance}</td>
                <td> <span className="cell-header"> X:  </span> {data.Xg}</td>
                <td> <span className="cell-header"> Y: </span> {data.Yg}</td>
                <td> <span className="cell-header"> Z: </span> {data.Zg}</td>
                <td> <span className="cell-header"> AbsMag </span> {data.AbsMag}</td> */}
            </tr>
            ))}
        </tbody>

    </table>
    

);

};

export default Table;