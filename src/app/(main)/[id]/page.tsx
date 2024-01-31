'use client'

import DetailsUser from "@/app/components/DetailsUser"
import Spinner from "@/app/components/Spinner"
import { useUserById } from "@/app/hooks/useUserById"


export  default  function Page({ params }: { params: { id: string } }) {

    const {data, isFetching}= useUserById({id: params.id})

    return(
        <div>
            {isFetching?<Spinner/>:<DetailsUser  user={data} />}
        </div>
    )
}