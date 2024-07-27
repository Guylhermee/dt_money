import {categories, CategoryModel} from "@/mocks/categoryModel";

export enum OperationType {
    credit,
    debit
}
export interface TransactionModel {
    id: number,
    title: string,
    price: number,
    category: CategoryModel | null,
    type: OperationType,
    date: string,
}

export const transactionsMock: TransactionModel[] = [
    {
        id: 1,
        title: 'Cinema',
        price: 20,
        category: categories[0],
        date: '26/07/2024',
        type: OperationType.debit
    },
    {
        id: 2,
        title: 'Agiota',
        price: 50,
        category: categories[1],
        date: '26/07/2024',
        type: OperationType.credit
    }
];