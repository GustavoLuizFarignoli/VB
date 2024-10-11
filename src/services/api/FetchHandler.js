class FetchHandler {
    constructor() {
        this.allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
    }

    async makeRequest(url, method = 'GET', bodyData = null) {
        method = method.toUpperCase();
        
        if (!this.allowedMethods.includes(method)) {
            throw new Error('Método não permitido');
        }
        
        if (method === 'GET') {
            let data = await fetch(url, {method: method}).then(response => response.json());
            return data;
        }
        
        const OPTIONS = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: bodyData ? JSON.stringify(bodyData) : null,
        };

        const response = await fetch(url, OPTIONS);

        if (response.ok) {
            return response.json();
        }
        
        alert(await response.text());
    }
}

export default FetchHandler;