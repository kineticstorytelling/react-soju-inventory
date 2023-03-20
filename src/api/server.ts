
    // forms and functions for how to communicate with the database
    // PB8. Have to use my own tokens and shit async fetch calls


    let token = '8a414f8f33e16828fa2617d1c275b9f5533f34205321e4a7'

    export const server_calls = {
        get: async () => {
            const response = await fetch(``,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
            });
    
            if (!response.ok){
                throw new Error('Failed to fetch data from the server')
            }
    
            return await response.json()
        },
    
        create: async (data: any = {}) => {
            const response = await fetch(``,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': 'Bearer ${token}',
                },
                body: JSON.stringify(data)
            })
    
            if (!response.ok) {
                throw new Error('Failed to create new data on the server')
            }
    
            return await response.json()
        },
    
        update: async (id:string, data: any = {}) => {
            const response = await fetch(`/api/contacts/${id}`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': 'Bearer ${token}',
                },
                body: JSON.stringify(data)
            })
    
            if (!response.ok){
                throw new Error('Failed to update data on server')
            }
    
            return await response.json()
        },
    
        delete: async (id:string) => {
            const response = await fetch(`/api/contacts/${id}`,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                }
            })
    
            if (!response.ok){
                throw new Error('Failed to delete data on server')
            }
    
            return;
        },
    }