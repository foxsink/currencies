export enum Currencies {
    RUB = 'rub',
    USD = 'usd',
    EUR = 'eur',
}

export type ExchangeRate = {
    [k: string]: number;
};
