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
            //console.table(response);
            return await response.json();  // Retorna o JSON da resposta
        } else {
            // Lança uma exceção para ser capturada no catch
            const errorText = await response.text();
            throw new Error(`Erro: ${response.status} - ${errorText}`);
        }
    } catch (error) {
        // Lança o erro para ser tratado no front-end
        throw new Error(`Erro na requisição: ${error.message}`);
    }
}

export default FetchHandler;