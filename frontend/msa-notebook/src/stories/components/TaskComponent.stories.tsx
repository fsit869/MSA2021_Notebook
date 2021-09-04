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

export default {
    component: TaskComponent,
    title: 'Notes/Task',
};

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache()
});

// @ts-ignore
const Template = (args) =><ApolloProvider client={client}><TaskComponent {...args} /></ApolloProvider>;

export const Unranked = Template.bind({});
// @ts-ignore
Unranked.args = {
    id: "First ID",
    title: "Title One",
    description:"I am unranked task",
    date: "01/01/2021",
    severity:0
};

export const lowPriority = Template.bind({});
// @ts-ignore
lowPriority.args = {
    id: "Second ID",
    title: "Title Two",
    description:"I am low ranked task",
    date: "01/01/2021",
    severity:1
};

export const medPriority = Template.bind({});
// @ts-ignore
medPriority.args = {
    id: "three ID",
    title: "Title Three",
    description:"I am med ranked task",
    date: "01/01/2021",
    severity:2
};

export const highPriority = Template.bind({});
// @ts-ignore
highPriority.args = {
    id: "Three ID",
    title: "Title 3",
    description:"I am high ranked task",
    date: "01/01/2021",
    severity:3
};
