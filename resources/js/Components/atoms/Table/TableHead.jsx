export default function TableHead({ datas }) {
    return (
        <thead className="capitalize bg-gray-50 border-b border-gray-500 text-center font-medium">
            <tr>
                {datas.map((data, index) => {
                    return (
                        <td key={index} scope="col" className="px-6 py-4">
                            {data}
                        </td>
                    );
                })}
            </tr>
        </thead>
    );
}
