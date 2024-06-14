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
    const formatNumber = String(numberValue).padStart(2, "0");

    return formatNumber;
};

export const storageUrl = "https://jagoconfig.com/storage";

export const checkDeadlinePassed = (date, time) => {
    const [hours, minutes] = time.split(":").map(Number);
    const deadlineDate = new Date(date);
    deadlineDate.setHours(hours);
    deadlineDate.setMinutes(minutes);
    const currentDate = new Date();

    return currentDate.getTime() >= deadlineDate.getTime();
};
