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
import {Clock} from "../../components/dashboard/Clock";

export default {
    component: Clock,
    title: 'Dashboard/Clock',
};

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache()
});

// @ts-ignore
const Template = (args) =><ApolloProvider client={client}><Clock {...args} /></ApolloProvider>;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
};

