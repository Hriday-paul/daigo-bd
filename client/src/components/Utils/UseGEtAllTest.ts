
const UseGEtAllTest = async () => {
    try {
        const response = await fetch(process.env.SERVER_URL + '/alltest');
        return response.json();
    } catch (err) {
        throw new Error('fetching error')
    }
};

export default UseGEtAllTest;