type Props = {
  name: 'autocomplete' | 'field' | 'copyToClipboard';
};
const table = {
  headers: [
    { id: 1, name: 'Prop' },
    { id: 2, name: 'Type' },
    { id: 3, name: 'Description' },
  ],
  body: {
    autocomplete: [
      {
        prop: 'disabled',
        type: 'Boolean',
        description: 'it specifies that the autocomplete should be disabled.',
      },
      {
        prop: '*value',
        type: 'String',
        description: 'value of the autocomplete input',
      },
      {
        prop: '*setValue',
        type: 'function',
        description: 'a function for handling the autocomplete value',
      },
      {
        prop: '*suggestions',
        type: 'Array[String]',
        description: 'Array of options used to autocomplete input',
      },
      {
        prop: 'notFound',
        type: 'String | React Node',
        description: 'message to display when no suggestion is available',
      },
      {
        prop: 'label',
        type: 'String',
        description: 'label of the field',
      },
      {
        prop: 'name',
        type: 'String',
        description: 'name of the field',
      },
    ],
    field: [
      {
        prop: 'disabled',
        type: 'Boolean',
        description: 'it specifies that a field should be disabled.',
      },
      {
        prop: 'dot',
        type: 'Boolean',
        description: `If true, a dot will be displayed on the side of the label to indicate a required field`,
      },
      {
        prop: 'error',
        type: 'String',
        description: `Will display an error message (when its value is not null)`,
      },
      {
        prop: 'label',
        type: 'String',
        description: 'label of the field',
      },
      {
        prop: 'name',
        type: 'String',
        description: 'name of the field',
      },
      {
        prop: 'ref',
        type: 'any',
        description: 'React ref',
      },
      {
        prop: '*type',
        type: 'String',
        description: `type of the field (select, textarea, text, number, checkbox, password etc...)`,
      },
    ],
    copyToClipboard: [
      {
        prop: '*ref',
        type: 'any',
        description: `Should be passed to the element you want to copy`,
      },
      {
        prop: '*onCopy',
        type: 'function',
        description: `a function for handling copy to clipboard`,
      },
      {
        prop: '*copied',
        type: 'boolean',
        description: `is true when you trigger onCopy function and false when the copied value is reset`,
      },
      {
        prop: '*duration',
        type: 'number',
        description: `timeout value (in milliseconds) to reset the copied value. default to 3s`,
      },
    ],
  },
};

export default function Table({ name }: Props) {
  return (
    <div className="max-w-full pr-1 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {table.headers.map((column) => (
              <th key={column.id} className="text-left p-4">
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">
          {table.body[name].map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 text-left p-4">
                {item.prop}
              </td>
              <td className="border border-gray-300 text-left p-4">
                {item.type}
              </td>
              <td className="border border-gray-300 text-left p-4">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}