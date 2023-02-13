Component example.....

```jsx
const datadropdown = [
    { id: 0, label: "Order ID", value: "111" },
    { id: 1, label: "Occasion", value: "222" },
    { id: 2, label: "No. of hampers", value: "333" },
    { id: 3, label: "Order value", value: "444" },
    { id: 4, label: "Month + year", value: "555" }
];

<Dropdown
  id="select-items-below"
  data={datadropdown}
  defaultValueText="Receiver Partners"
  onChange={(value) => console.log(value)}
/>;
```