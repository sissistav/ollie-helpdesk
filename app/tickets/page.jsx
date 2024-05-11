import TicketList from "./TicketList";
import { Suspense } from "react";
import Loading from './loading'

export default function Tickets() {
    return (
        <main>
            <Suspense fallback={<Loading />}>
                <TicketList />
            </Suspense>
        </main>
    )
}