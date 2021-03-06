/** @jsx React.DOM */

var WorksheetBundle = React.createClass({
    mixins: [CheckboxMixin],
    getInitialState: function(){
        this.props.item.state.checked = false;
        return this.props.item.state;
    },
    capture_keys: function(event){
        Mousetrap.bind(['enter'], function(e){
            this.goToWorksheet();
        }.bind(this), 'keydown');
    },
    handleClick: function(event){
        this.props.setFocus(this.props.index, event);
    },
    goToWorksheet: function(){
        window.open('/worksheets/' + this.props.item.state.interpreted.uuid);
    },
    render: function() {
        var item = this.props.item.state.interpreted;
        var className = 'type-worksheet' + (this.props.focused ? ' focused' : '');
        var checkbox = this.props.canEdit ? <input type="checkbox" className="ws-checkbox" onChange={this.handleCheck} checked={this.state.checked} disabled={!this.props.checkboxEnabled}/> : null;
        var ws_url = '/worksheets/' + item.uuid;
        return(
            <div className="ws-item" onClick={this.handleClick}>
                {checkbox}
                <div className={className}>
                    <a href={ws_url} target="_blank">
                        {item.name}
                    </a>
                </div>
            </div>
        );
    } // end of render function
}); //end of  InlineBundle
