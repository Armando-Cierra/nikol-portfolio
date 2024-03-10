import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink({href, children}){

    const router = useRouter();
    let className =  'link';
    if(router.pathname === href){
        className = `${className} active`;
    }

    return(
        <Link href={href}><a className={className}>{children}</a></Link>
    )
}