
const handleAjaxError = (response) => {
    if(!response.ok) {
        throw Error(response.status)
    }
    
    return response.json();
}

const handleAjaxErrorForText = (response) => {
    if(!response.ok) {
        throw Error(response.status)
    }    
   
    return response.text();
}


export default class ApiBaseService {    
    
    static async get(url) {
        const result = await fetch(url, {           
            method: 'GET',
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json; charset=UTF-8',
                'email': "Ragnar.Lodbrock@abv.com",
                'password': "adminADMIN123?"
            }             
        })
        .then(handleAjaxError);

        return result;
    }

    static async post(url, formData) {
        const result = await fetch(url, { 
            mode: 'cors',                    
            method: 'POST',
            headers: {
                'email': "Ragnar.Lodbrock@abv.com",
                'password': "adminADMIN123?",
                'Accept': 'application/json', 
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData),
            referrerPolicy: "origin"           

        })
        .then(handleAjaxErrorForText)

        return result;
    }

    static async put(url, formData) {
        const result = await fetch(url, { 
            mode: 'cors',                         
            method: 'PUT',
            headers: {                
                'Accept': 'application/json', 
                'Content-Type': 'application/json; charset=UTF-8',
                'email': "Ragnar.Lodbrock@abv.com",
                'password': "adminADMIN123?"
            },
            body: JSON.stringify(formData),
            referrerPolicy: "origin"             
        })
        .then(handleAjaxErrorForText)

        return result;
    }

    static async delete(url) {
        const result = await fetch(url, { 
            mode: 'cors',          
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json; charset=UTF-8',
                'email': "Ragnar.Lodbrock@abv.com",
                'password': "adminADMIN123?"
            }           
        })
        .then(handleAjaxErrorForText);

        return result;
    }
}