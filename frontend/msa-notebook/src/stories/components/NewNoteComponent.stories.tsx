import React from 'react';

import {TaskComponent} from "../../components/task/TaskComponent";
import NoteInterface from "../../api/NoteInterface";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";
import {NewTask} from "../../components/task/NewTask";


export default {
    component: NewTask,
    title: 'Notes/NewComponent',
};

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache()
});

// @ts-ignore
const Template = (args) =><ApolloProvider client={client}><NewTask {...args} /></ApolloProvider>;

export const PlusButton = Template.bind({});
// @ts-ignore
PlusButton.args = {
};





