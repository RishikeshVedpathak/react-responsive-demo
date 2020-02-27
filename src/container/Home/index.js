import React from "react";
import withResponsive from "../../hoc/responsive";

const Home = (props) => {
    const Yes = () => <span style={{ color: "#5cb85c" }}>YES</span>;
    const No = () => <span style={{ color: "#d9534f" }}>NO</span>;

    return (
        <>
            <div>
                Is Desktop : {props.responsiveInfo.isDesktop ? <Yes /> : <No />}
            </div>
            <div>
                Is Tablet : {props.responsiveInfo.isTablet ? <Yes /> : <No />}
            </div>
            <div>
                Is Mobile : {props.responsiveInfo.isMobile ? <Yes /> : <No />}
            </div>
            <div>
                Is Not Mobile : {props.responsiveInfo.isNotMobile ? <Yes /> : <No />}
            </div>
            <div>
                Is Portrait : {props.responsiveInfo.isPortrait ? <Yes /> : <No />}
            </div>
            <div>
                Is Retina : {props.responsiveInfo.isRetina ? <Yes /> : <No />}
            </div>
        </>
    )
}

export default withResponsive(Home);
