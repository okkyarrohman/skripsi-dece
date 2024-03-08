export const formattedDate = (dateValue) => {
    // Assuming createdAt is a string or a valid Date object
    const date = new Date(dateValue);

    // Format the date as dd/mm/yyyy
    const formatDate = date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });

    return formatDate;
};

export const formattedNumber = (numberValue) => {
    const formatNumber = String(numberValue + 1).padStart(2, "0");

    return formatNumber;
};

export const storageUrl = "http://127.0.0.1:8000/storage/";