interface DateUtility {
    getCurrentDate: () => string;
    formatDate: (date: Date) => string;
}

const dateUtility: DateUtility = {
    getCurrentDate: () => {
        const currentDate = new Date();
        return dateUtility.formatDate(currentDate);
    },

    formatDate: (date: Date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    },
};

export default dateUtility
