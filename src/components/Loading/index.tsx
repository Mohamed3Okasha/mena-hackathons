import mhLogo from "../../assets/mh-logo-web.png"

export function CircleLoader({ size, icon }: { size: number, icon?: string }) {
    const borderWidth = size / 30;

    return (
        <div className="flex items-center justify-center h-screen">
            <img src={icon || mhLogo} alt={`icon`} className={`w-20`} />
            <div className={`absolute`}>
                <div
                    className=" animate-spin rounded-full border-primary"
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        borderWidth: `${borderWidth}px`,
                        borderStyle: "solid",
                        borderTopColor: "transparent",
                    }}
                />
            </div>
        </div>

    )
}

export function LoadingBar({
    width = "100%",
    height = "11px",
    color = "accent",
}: { width?: string, height?: string, color?: string }) {
    return (
        <div
            className="bg-accent relative" >
            {/* Animated bar */}

            <div
                className="absolute h-full bg-accent animate-pulse rounded"
                style={{ backgroundColor: color, width, height }}
            />
        </div>
    );
}
export function SkeletonLoader() {
    return (<div className="space-y-4">
        <div className="h-4 bg-accent rounded animate-pulse w-3/4"></div>
        <div className="h-4 bg-accent rounded animate-pulse w-1/2"></div>
        <div className="h-4 bg-accent rounded animate-pulse w-1/2
        "></div>
    </div>)
}