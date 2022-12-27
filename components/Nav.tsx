import '../style/navigation.sass'
import { Link } from 'next/link'
import { useState } from 'react'

export default function Nav(props: {
    active: string,
    links: { name: string, href: string }[]
}) {
    const [open, setOpen] = useState(false);
}