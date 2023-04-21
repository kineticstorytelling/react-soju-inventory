let token = '8a414f8f33e16828fa2617d1c275b9f5533f34205321e4a7';

export const server_calls = {
  get: async () => {
    const response = await fetch(`https://excellent-sturdy-technician.glitch.me/api/sojus`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`,
        'Access-Control-Allow-Origin': 'https://excellent-sturdy-technician.glitch.me'
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch data from the server');
    }
    
    return await response.json();
  },

  create: async (data = {}) => {
    try {
      const response = await fetch(`https://excellent-sturdy-technician.glitch.me/api/sojus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': `Bearer ${token}`,
          'Access-Control-Allow-Origin': 'https://excellent-sturdy-technician.glitch.me',
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('Failed to create new data on the server');
      }
      
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error('Network error when attempting to create data');
    }
  },

  update: async (id:any, data = {}) => {
    const response = await fetch(`https://excellent-sturdy-technician.glitch.me/api/sojus/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`,
        'Access-Control-Allow-Origin': 'https://excellent-sturdy-technician.glitch.me'
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Failed to update data on server');
    }
    
    return await response.json();
  },

  delete: async (id:any) => {
    const response = await fetch(`https://excellent-sturdy-technician.glitch.me/api/sojus/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`,
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete data on server');
    }
  },
};