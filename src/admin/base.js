import React, {PropTypes} from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

export default class Admin extends React.Component {
    static contextTypes = {
        muiTheme: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: true
        };
    }

    toggleDrawer() {
        this.setState({drawerOpen: !this.state.drawerOpen});
    }

    render() {
        let theme = this.context.muiTheme;

        return (
            <div>
                <AppBar
                    title="Title"
                    onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
                />
                <Drawer
                    containerStyle={{marginTop: theme.appBar.height}}
                    open={this.state.drawerOpen}
                >
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
                <div
                    style={{
                        marginLeft: this.state.drawerOpen ? theme.navDrawer.width : 0,
                        padding: theme.spacing.desktopGutterMore}}>
                    content blabla
                    content blabla
                    content blabla
                    content blabla
                    content blabla
                    content blabla
                    content blabla
                </div>
            </div>
        );
    }
}
