
const handleAjaxError = (response) => {
    if(!response.ok) {
        throw Error(response.status)
    }

    return response.json();    
}

export default class ApiBaseService {   

    static async getPublic(url) {
        const result = await fetch(url, {           
            method: 'GET',
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json; charset=UTF-8'                
            }             
        })
        .then(handleAjaxError);

        return result;
    }
    
    static async get(url, email, password) {
        const result = await fetch(url, {           
            method: 'GET',
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json; charset=UTF-8',
                'email': email,
                'password': password
            }             
        })
        .then(handleAjaxError);

        return result;
    }   

    static async post(url, email, password, formData) {
        const result = await fetch(url, { 
            mode: 'cors',                    
            method: 'POST',
            headers: {
                'email': email,
                'password': password,
                'Accept': 'application/json', 
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData),
            referrerPolicy: "origin"           

        })
        .then(handleAjaxError)

        return result;
    }

    static async put(url, email, password, formData) {
        const result = await fetch(url, { 
            mode: 'cors',                         
            method: 'PUT',
            headers: {                
                'Accept': 'application/json', 
                'Content-Type': 'application/json; charset=UTF-8',
                'email': email,
                'password': password
            },
            body: JSON.stringify(formData),
            referrerPolicy: "origin"             
        })
        .then(handleAjaxError)

        return result;
    }

    static async delete(url, email, password) {
        const result = await fetch(url, { 
            mode: 'cors',          
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json; charset=UTF-8',
                'email': email,
                'password': password
            }           
        })
        .then(handleAjaxError);

        return result;
    }

    static async login(url, formData) {
        const result = await fetch(url, { 
            mode: 'cors',                    
            method: 'POST',
            headers: {                
                'Accept': 'application/json', 
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData),
            referrerPolicy: "origin"           

        })
        .then(handleAjaxError)

        return result;
    }

    static async register(url, formData) {
        const result = await fetch(url, { 
            mode: 'cors',                    
            method: 'POST',
            headers: {                
                'Accept': 'application/json', 
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData),
            referrerPolicy: "origin"           

        })
        .then(handleAjaxError)

        return result;
    }

    static async enrollGet(url) {
        const result = await fetch(url, {                             
            method: 'GET',
            headers: {                
                'Accept': 'application/json', 
                'Content-Type': 'application/json; charset=UTF-8'
            }                          

        })
        .then(handleAjaxError)

        return result;
    }

    static async enrollPost(url, formData) {
        const result = await fetch(url, { 
            mode: 'cors',                    
            method: 'POST',
            headers: {                
                'Accept': 'application/json', 
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData),
            referrerPolicy: "origin"           

        })
        .then(handleAjaxError)

        return result;
    }

}