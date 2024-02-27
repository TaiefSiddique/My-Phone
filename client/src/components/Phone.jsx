import { useLoaderData } from "react-router-dom";

const Phone = () => {
    const phoneData = useLoaderData();
    console.log(phoneData); // Check the data in the console
    return (
        <div>
            <h1>Phone Details</h1>
            {/* Render your phone details here */}
        </div>
    );
};

export default Phone;
