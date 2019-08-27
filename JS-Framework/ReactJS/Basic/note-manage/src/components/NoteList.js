import React, { Component } from 'react';
import { noteData } from './../firebase/firebaseConnect.js';
import NoteItem from './NoteItem.js';

class NoteList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }

    componentWillMount = () => {
        // get note-list from firebase
        noteData.on('value', (notes) => {
            var arrData = [];
            notes.forEach((element) => {
                const id = element.key;
                const title = element.val().title;
                const content = element.val().content;
                arrData.push({
                    id: id,
                    title: title,
                    content: content
                })
            })
            this.setState({
                dataFirebase: arrData
            })
        })
    }

    getData = () => {
        if(this.state.dataFirebase) {
            return this.state.dataFirebase.map((value, key) => {
                return (
                    <NoteItem 
                    key={key}
                    note={value}
                    index={key}
                    title = {value.title}
                    content = {value.content}
                    />
                )
            })
        }
    }

    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>
        )
    }
}

export default NoteList;
