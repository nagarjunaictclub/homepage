import dynamic from "next/dynamic"
import React from "react"

const NoSSRWrapper = ({ children }) => {
    return <>
        {children}
    </>
}

export default dynamic(() => Promise.resolve(NoSSRWrapper), {
    ssr: false
})