import { createLazyFileRoute } from '@tanstack/react-router'
import ContactsSection from "../pages/contacts/ContactsSection/ContactsSection.tsx";

export const Route = createLazyFileRoute('/contacts')({
    component: Contacts
})

function Contacts() {
    return (
        <>
            <ContactsSection />
        </>
    )
}