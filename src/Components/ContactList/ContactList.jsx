import css from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {

    return (
        <ul className={ css.allContacts}>
            {contacts.map(contact => (
                <li key={contact.id} className={css.contact}>
                    <span>{contact.name}: {contact.number}</span>
                    <button className={css.delete} type="button" onClick={()=> onDeleteContact(contact.id)}>Delete</button>
                </li>))}
        </ul>
    )
}

export default ContactList