export async function fetchJSON(url: string) {    
    const response = await fetch(url);    
    return await response.json();
}

export async function postJSON(url: string, formData: object) {

    const response = await fetch(
        url, { 
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },    
            body: JSON.stringify(formData) 
        })

    return await response.json();
}