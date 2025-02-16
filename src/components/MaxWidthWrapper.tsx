import { ReactNode } from "react"

const MaxWidthWrapper = ({
    children
}: {
    className?: string
    children: ReactNode
}) => {
    return (
        <>
            <div className={(
                "h-full mx-auto w-full max-w-screen-3xl px-2.5 md:px-28"
            )}>
                {children}
            </div>
        </>
    )
}

export default MaxWidthWrapper