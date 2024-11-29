import axios from 'axios';


const baseUrl = process.env.REACT_APP_BASE_URL;

// export const post = async (path, body) => {
//     const url = ${baseUrl}/${path}
//     var headers = { 'Content-Type': 'application/json' }
//     if (![${apiProps.AUTH_API}${paths.SIGNIN}].includes(path)) {
//         headers.Authorization = Bearer ${getToken()}
//     }

//     try {
//         const result = await fetch(url, {
//             method: 'POST',
//             headers: headers,
//             body: JSON.stringify(body),
//         })

//         const json = await result.json()
//         const { error, status } = json

//         if (error) {
//             throw error
//         } else if (status && status !== 'success') {
//             throw status
//         } else {
//             return json
//         }

//     } catch (e) {
//         throw e
//     }
// }

export const post = async (url,body) =>{
    return await axios.post(`${baseUrl}${url}`, body);
}

// export const get = async (path) => {
//     const url = ${baseUrl}/${path}
//     var headers = { 'Content-Type': 'application/json' }
//     if (!path.startsWith(${apiProps.AUTH_API}${paths.SEND_PASSWORD})) {
//         headers.Authorization = Bearer ${getToken()}
//     }

//     try {
//         const result = await fetch(url, {
//             method: 'GET',
//             headers: headers
//         })
//         if (result.status === 401) {
//             throw '401'
//         }
//         const json = await result.json()
//         const { error, status } = json
//         if (error) {
//             throw error
//         } else {
//             return json
//         }

//     } catch (e) {
//         throw e
//     }
// }

// export const put = async (path, body) => {
//     const url = ${baseUrl}/${path}

//     try {
//         const result = await fetch(url, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': Bearer ${getToken()}
//             },
//             body: JSON.stringify(body),
//         })
//         const json = await result.json()

//         const { error, status } = json
//         // console.log('status', json)
//         if (error) {
//             throw error
//         } else {
//             return json
//         }

//     } catch (e) {
//         throw e
//     }
// }

// export const del = async (path) => {
//     const url = ${baseUrl}/${path}
//     try {
//         const result = await fetch(url, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': Bearer ${getToken()}
//             }
//         })
//         if (result.ok) {
//             return 'success'
//         } else {
//             const json = await result.json()
//             const { error, status } = json

//             if (error) {
//                 throw error
//             } else if (status && status !== 'success') {
//                 throw status
//             } else {
//                 return json
//             }
//         }

//     } catch (e) {
//         throw e
//     }
// }