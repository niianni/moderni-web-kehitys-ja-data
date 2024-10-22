import { useLoaderData } from "react-router-dom"
import { contacts } from "./contacts";

export function loader({params}) {
    return params
}

export default function ContactPage() {
    const params = useLoaderData();

    const person = contacts.find(contact => contact.id === params.id);
    
    return (
        <>
            {params.id <= contacts.length && 
            <div className="infoCard">
                <h2>Contact info</h2>
                <p><span className="italic">Name:</span> {person.name}</p>
                <p><span className="italic">Phone:</span> {person.phone}</p>
                <p><span className="italic">Email:</span> {person.email}</p>
            </div>
            }
            {params.id > contacts.length && 
            <div>
                <h1>Contact not found</h1>
                <p>Check the id.</p>
            </div>
            }
        </>
)}

