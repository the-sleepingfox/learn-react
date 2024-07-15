const heading1= React.createElement(
    "h1",
    {
        id:"heading1",
    },
    "heading1"
);
const heading2= React.createElement(
    "h2",
    {
        id:"heading2",
    },
    "heading2"
);
const container= React.createElement(
    "div",
    {
        class: "container",
        id: "container",
    },
    [heading1, heading2]
);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(container);