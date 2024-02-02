'use client'

import DetailsUser from "@/components/DetailsUser"
import { useUserById } from "@/hooks/useUserById"


export  default  function Page({ params }: { params: { id: string } }) {

    const {data}= useUserById({id: params.id})

    return(
        <div>
            {<DetailsUser  user={data} />}
        </div>
    )
}