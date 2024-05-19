
const UseGEtAllTest = async () => {
    try {
        const response = await fetch(process.env.SERVER_URL + '/alltest',
            {
                next:
                    { revalidate: 1 }
            });
            const res = response.json();
        return res
    } catch (err) {
        throw new Error('fetching error')
    }
};

export default UseGEtAllTest;