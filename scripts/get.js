"use strict"
// function get(url) {
//     return fetch(url)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(data) {
//             return data;
//         })
//         .catch(function(error) {
//             return error;
//         });
// }

function get(request) {
    return fetch(request)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => error);
}