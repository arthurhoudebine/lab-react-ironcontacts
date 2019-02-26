import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';


const ArtistTable = (props) => {
    return (
        <div>
        <table>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
            </tr>
            {
                props.contacts.map((oneContact, index) => {
                    return (
                        <tr>
                            <img src={oneContact.pictureUrl}></img>
                            <td>{oneContact.name}</td> 
                            <td>{oneContact.popularity}</td>
                        </tr>
                    );
                })
            }
        </table>
        </div>
    )
};


export default ArtistTable;
