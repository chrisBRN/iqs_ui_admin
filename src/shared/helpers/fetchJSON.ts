export async function fetchJSON(url: string) {
    
    const response = await fetch(url);
    
    return await response.json();
}

export async function postJSON(url: string, formData: FormData) {

    const response = await fetch(url, { method: 'POST', body: formData })

    return await response.json();
}