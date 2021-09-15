/*
TaskComponent.test.tsx

This file tests the component which displays the notes

 */

import React from "react"
import {TaskComponent} from "../components/task/TaskComponent";
import {render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { MockedProvider, MockedResponse} from '@apollo/client/testing';

// Create mock apollo client
const apolloClientMocks: readonly MockedResponse<Record<string, any>>[] | undefined = [];

// Check severity unranked displays
test("Check unranked text", () => {
    const component = render(
        <MockedProvider mocks={apolloClientMocks} addTypename={false}>
            <TaskComponent
                id={"myId"}
                title={"myTitle"}
                description={"myDesc"}
                date={"01/01/2000"}
                severity={0}
            />
        </MockedProvider>,
    );
    const severityElement = component.getByTestId("severityText");

    expect(severityElement.textContent).toBe("Unranked");
})

// Check low rank text displays
test("Check low ranked text", () => {
    const component = render(
        <MockedProvider mocks={apolloClientMocks} addTypename={false}>
            <TaskComponent
                id={"myId"}
                title={"myTitle"}
                description={"myDesc"}
                date={"01/01/2000"}
                severity={1}
            />
        </MockedProvider>,
    );
    const severityElement = component.getByTestId("severityText");

    expect(severityElement.textContent).toBe("Low priority");
})

// Check med rank text displays
test("Check med rank text", () => {
    const component = render(
        <MockedProvider mocks={apolloClientMocks} addTypename={false}>
            <TaskComponent
                id={"myId"}
                title={"myTitle"}
                description={"myDesc"}
                date={"01/01/2000"}
                severity={2}
            />
        </MockedProvider>,
    );
    const severityElement = component.getByTestId("severityText");

    expect(severityElement.textContent).toBe("Medium priority");
})

// Checks high rank text displays
test("Check high ranked text", () => {
    const component = render(
        <MockedProvider mocks={apolloClientMocks} addTypename={false}>
            <TaskComponent
                id={"myId"}
                title={"myTitle"}
                description={"myDesc"}
                date={"01/01/2000"}
                severity={3}
            />
        </MockedProvider>,
    );
    const severityElement = component.getByTestId("severityText");

    expect(severityElement.textContent).toBe("High priority");
})

// Checks handles unknown severity
test("Check error rank text", () => {
    const component = render(
        <MockedProvider mocks={apolloClientMocks} addTypename={false}>
            <TaskComponent
                id={"myId"}
                title={"myTitle"}
                description={"myDesc"}
                date={"01/01/2000"}
                severity={420}
            />
        </MockedProvider>,
    );
    const severityElement = component.getByTestId("severityText");

    expect(severityElement.textContent).toBe("ERR HANDLING PRIORITY");
})

// Checks contents displayed properly
test("Check displays content properly", () => {
    const component = render(
        <MockedProvider mocks={apolloClientMocks} addTypename={false}>
            <TaskComponent
                id={"myId"}
                title={"myTitle"}
                description={"myDesc"}
                date={"01/01/2000"}
                severity={1}
            />
        </MockedProvider>,
    );
    const headerElement = component.getByTestId("headerElement");
    const descElement = component.getByTestId("descriptionElement");
    const severityElement = component.getByTestId("severityText");

    expect(descElement.textContent).toBe("myDesc")
    expect(severityElement.textContent).toBe("Low priority");
})
