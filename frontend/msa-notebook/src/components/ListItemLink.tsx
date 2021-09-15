/**
 * This component is heavily taken from Materials UI documentation
 * https://material-ui-next.com/demos/buttons/#third-party-routing-library
 */


import {Link as RouterLink, LinkProps as RouterLinkProps} from 'react-router-dom';
import React from "react";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

/**
 * Contains props ListItemLink takes
 */
interface ListItemLinkProps {
    icon?: React.ReactElement; // Icon optional
    primary: string; // Button display
    to: string; // Redirect uri
}

/**
 * Provides a ListItem button which acts as a redirect
 * @param props ListItemLinkProps
 */
export function ListItemLink(props: ListItemLinkProps) {
    // Deconstruct props
    const {icon, primary, to} = props;

    // Create redirect location
    const renderLink = React.useMemo(
        () =>
            React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
                <RouterLink
                    to={{pathname: to,}}
                    ref={ref}
                    {...itemProps} />
            )),
        [to],
    );

    // Return listItem whic redirects
    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary}/>
            </ListItem>
        </li>
    );
}