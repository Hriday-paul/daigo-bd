
const UseGetPopularTest = async () => {
    const response = await fetch(process.env.SERVER_URL+'/mostFrequent');
    if (!response.ok) {
        throw new Error('All test data fetch faild');
    }
    return response.json();
};

export default UseGetPopularTest;