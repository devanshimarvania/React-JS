import { useState } from "react";

function FormExample() {
    const [userId, setUserId] = useState('');
    const [courseName, setCourseName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted : ' ,userId, courseName);
    }

    return (
        <>
            <h2>Form Example :</h2>

            <form onSubmit={handleSubmit}>
                
                <label>ID : </label>
                <input 
                    type="number" 
                    placeholder="Enter Your Id" 
                    value={userId} 
                    onChange={(e) => setUserId(e.target.value)} 
                />
                <br /><br />

                <label>Course :</label>
                <input 
                    type="text" 
                    placeholder="Enter Your Course" 
                    value={courseName} 
                    onChange={(e) => setCourseName(e.target.value)} 
                />
                <br /><br />

                <button type="submit">Submit</button>

                <p>Submitted : {`${userId} || ${courseName}`}</p>
            </form>
        </>
    );
}

export default FormExample;
