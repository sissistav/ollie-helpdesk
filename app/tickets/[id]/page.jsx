import { notFound } from "next/navigation";

export const dynamicParams = true; // default value true

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/tickets/');
    const tickets = await res.json();

    return tickets.map((ticket) => ({ id: ticket.id }));
}

async function getTicket(id) {
    const res = await fetch(`http://localhost:4000/tickets/${id}`);
    
    if (!res.ok) {
        throw new Error("Ticket not found");
    }
    
    return res.json();
}

export default async function TicketDetails({ params }) {
    try {
        const ticket = await getTicket(params.id);

        return (
            <main>
                <nav>
                    <h2>Ticket Details</h2>
                </nav>
                <div className="card">
                    <h3>{ticket.title}</h3>
                    <small>Created by: {ticket.user_email}</small>
                    <p>{ticket.body}</p>
                    <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                    </div>
                </div>
            </main>
        );
    } catch (error) {
        notFound(); // Indicate that the ticket is not found
    }
}
