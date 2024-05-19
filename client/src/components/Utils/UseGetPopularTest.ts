
const UseGetPopularTest = async () => {
    try {
        const response = await fetch(process.env.SERVER_URL+'/mostFrequent',
            );
        const res = response.json();
        return res
    } catch (err) {
        console.log(err);
        throw new Error('fetching error')
    }
};

export default UseGetPopularTest;