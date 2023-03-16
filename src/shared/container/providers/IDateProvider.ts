interface IDateProvider {
    dateNow(): Date;
    compareInHours(start_date: Date, end_date: Date): number;
    convertTOUTC(date: Date): string 
}

export {IDateProvider}