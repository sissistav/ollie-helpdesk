import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <h1>Ollie&apos;s Helpdesk</h1>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
            <Link href="/tickets/create">Create</Link>
        </nav>
    )
}