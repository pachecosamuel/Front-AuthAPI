import { React } from "react";
import { ContentContainer } from "./style";

function ContentPageContainer(props) {
    return (
        <ContentContainer>
            {props.children}
        </ContentContainer>
    );
}

export default ContentPageContainer;