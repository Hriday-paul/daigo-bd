
const UseGetAllDoctors = async () => {
    try {
        const response = await fetch(`${process.env.SERVER_URL}/doctors`,
            {
                next: { revalidate: 5 }
            });
            const res = response.json();
        return res
    } catch (err) {
        throw new Error('fetching error')
    }
};

export default UseGetAllDoctors;