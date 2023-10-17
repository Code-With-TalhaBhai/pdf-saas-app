import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

    
export default async function Dashboard(){

	const { getUser, isAuthenticated } = getKindeServerSession();
    const user = getUser();

    // if(!user || !user.id) redirect(`${process.env.KINDE_SITE_URL}/api/auth/kinde_callback`);
    if(!user || !user.id) redirect(`${process.env.KINDE_SITE_URL}/auth-callback?origin=dashboard`);

    return(
        <div>
            {user.email}
        </div>
    )
}