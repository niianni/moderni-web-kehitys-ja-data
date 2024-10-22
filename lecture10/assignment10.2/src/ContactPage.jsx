import { useLoaderData } from "react-router-dom"

const contacts = [
    {name:"Minna", id:"1", phone: "040 123 4567", email: "minna@gmail.com"},
    {name:"Maija", id:"2", phone: "040 111 2233", email: "maija@outlook.com"},
    {name:"Marja-Leena", id:"3", phone: "040 222 4466", email: "marjaleena@gmail.com"},
    {name:"Minerva", id:"4", phone: "040 999 8844", email: "minerva@gmail.com"},
    {name:"Moona", id:"5", phone: "040 333 7788", email: "moona@gmail.com"},
];

export function loader({params}) {
    return params
}

export default function ContactPage() {
    const params = useLoaderData();

    const person = contacts.find(contact => contact.id === params.id);
    
    return (
        <>
            {params.id < contacts.length && 
            <div>
                <h1>Contact info</h1>
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

