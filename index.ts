import fetch from 'node-fetch';

interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUsers(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(`API call failed: ${response.status}`);
    }

const users = await response.json() as User[];

    console.log(`Fetched ${users.length} users:\n`);

    users.forEach((user) => {
      console.log(`👤 ${user.name} - 📧 ${user.email}`);
    });

  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

fetchUsers();
