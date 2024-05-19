
const UseVerifyadmin = async (email: string): Promise<any> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/isAdmin/${email}`, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: { admin: boolean } = await response.json();
        return data;
    } catch (err) {
        console.error('Fetching error:', err);
        return null;
    }
};

export default UseVerifyadmin;